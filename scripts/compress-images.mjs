#!/usr/bin/env node
/**
 * compress-images.mjs — shrink the photos in public/images without changing
 * how any page looks.
 *
 *   node scripts/compress-images.mjs            # do it
 *   node scripts/compress-images.mjs --dry-run  # report only
 *
 * 1. Normalises file names: lowercase names and extensions (git mv, so the
 *    rename is tracked on a case-insensitive Mac).
 * 2. For each JPG/PNG over 300 KB: applies EXIF rotation, then strips
 *    metadata, resizes to at most 1920px wide (800px for images in team/),
 *    re-encodes JPG at quality 80, and converts PNGs that are fully opaque to
 *    JPG. Logos, icons and anything with real transparency stay PNG.
 * 3. Never makes a file bigger: if the result isn't smaller, the original stays.
 *
 * Prints a JSON rename map (old -> new, relative to public/) on the last line,
 * for updating references in src/.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, statSync, renameSync, unlinkSync, existsSync } from 'node:fs';
import { dirname, extname, join, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const IMAGES = join(PUBLIC, 'images');
const THRESHOLD = 300 * 1024;
const MAX_WIDTH = 1920;
const MAX_WIDTH_TEAM = 800;
const JPG_QUALITY = 80;
const DRY = process.argv.includes('--dry-run');

const isRaster = (f) => /\.(jpe?g|png)$/i.test(f);
/* Logos and icons are always kept as PNG */
const keepAsPng = (rel) => /(^|\/)(icons)\//i.test(rel) || /logo/i.test(basename(rel));

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.name.startsWith('.')) return []; // .DS_Store etc.
    const p = join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

const git = (...args) => execFileSync('git', args, { cwd: ROOT, stdio: 'pipe' });
const isTracked = (abs) => {
  try { git('ls-files', '--error-unmatch', relative(ROOT, abs)); return true; } catch { return false; }
};

/** Rename (tracked when possible). Two-step so case-only changes work on APFS. */
function move(from, to) {
  if (from === to || DRY) return;
  const tmp = `${from}.tmp-rename`;
  if (isTracked(from)) {
    git('mv', relative(ROOT, from), relative(ROOT, tmp));
    git('mv', relative(ROOT, tmp), relative(ROOT, to));
  } else {
    renameSync(from, tmp);
    renameSync(tmp, to);
  }
}

const renames = {}; // old rel path -> new rel path (relative to public/)
const report = [];
const skipped = [];
const rel = (abs) => relative(PUBLIC, abs).split('\\').join('/');

/* ---- Step 1: normalise names (lowercase) ---- */
for (const abs of walk(IMAGES)) {
  const dir = dirname(abs);
  const lower = basename(abs).toLowerCase();
  if (lower === basename(abs)) continue;
  const to = join(dir, lower);
  renames[rel(abs)] = rel(to);
  move(abs, to);
}

/* ---- Step 2: compress ---- */
const files = DRY ? walk(IMAGES) : walk(IMAGES); // names are already normalised on disk
for (const abs of files) {
  if (!isRaster(abs)) continue;
  const name = rel(abs);
  const before = statSync(abs).size;
  if (before <= THRESHOLD) continue;

  const isPng = /\.png$/i.test(abs);
  const isTeam = /(^|\/)team\//.test(name);
  const maxW = isTeam ? MAX_WIDTH_TEAM : MAX_WIDTH;

  const base = sharp(abs).rotate(); // bake in EXIF orientation before stripping
  const meta = await sharp(abs).metadata();
  let toJpg = !isPng;
  let reason = '';

  if (isPng) {
    if (keepAsPng(name)) {
      reason = 'logo/icon stays PNG';
    } else if (meta.hasAlpha && !(await sharp(abs).stats()).isOpaque) {
      reason = 'has transparency, stays PNG';
    } else {
      toJpg = true;
    }
  }

  let pipeline = base.resize({ width: maxW, withoutEnlargement: true });
  pipeline = toJpg
    ? pipeline.flatten({ background: '#ffffff' }).jpeg({ quality: JPG_QUALITY, mozjpeg: true })
    : pipeline.png({ compressionLevel: 9, effort: 10 });

  const buf = await pipeline.toBuffer({ resolveWithObject: true });
  const after = buf.data.length;

  if (after >= before) {
    skipped.push({ file: name, size: before, why: 'result not smaller; kept original' });
    continue;
  }

  const outAbs = toJpg && isPng ? abs.replace(/\.png$/i, '.jpg') : abs;
  if (!DRY) {
    if (outAbs !== abs) {
      renames[name] = rel(outAbs);
      if (existsSync(outAbs)) throw new Error(`refusing to overwrite ${rel(outAbs)}`);
      move(abs, outAbs); // tracked rename .png -> .jpg, then overwrite contents
    }
    const { writeFileSync } = await import('node:fs');
    writeFileSync(outAbs, buf.data);
  }
  report.push({
    file: name,
    out: rel(outAbs),
    before,
    after,
    from: `${meta.width}x${meta.height}`,
    to: `${buf.info.width}x${buf.info.height}`,
    note: reason,
  });
}

/* Chains: a file renamed in step 1 and again in step 2 should map old -> final */
for (const [oldPath, mid] of Object.entries(renames)) {
  const r = report.find((x) => x.file === mid);
  if (r && r.out !== mid) renames[oldPath] = r.out;
}

console.error(`\n${DRY ? '[dry run] ' : ''}compressed ${report.length} files, skipped ${skipped.length}`);
for (const s of skipped) console.error(`  skipped ${s.file} (${s.why})`);
console.log(JSON.stringify({ renames, report, skipped }, null, 2));
