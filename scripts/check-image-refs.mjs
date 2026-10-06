#!/usr/bin/env node
/**
 * check-image-refs.mjs — extracts every /images/... path referenced in src/
 * (and index.html) and confirms the file exists in public/.
 * Exit code 1 if anything is missing. Run: node scripts/check-image-refs.mjs
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]
  );

const sources = [...walk(join(ROOT, 'src')).filter((f) => /\.(jsx?|css)$/.test(f)), join(ROOT, 'index.html')];
const re = /\/images\/[A-Za-z0-9_\-./]+\.(?:jpe?g|png|svg|webp|gif|avif)/gi;

const refs = new Map(); // path -> files
for (const f of sources) {
  for (const m of readFileSync(f, 'utf8').matchAll(re)) {
    if (!refs.has(m[0])) refs.set(m[0], new Set());
    refs.get(m[0]).add(f.replace(ROOT + '/', ''));
  }
}

const missing = [];
for (const [path, files] of refs) {
  const abs = join(ROOT, 'public', path);
  /* exact-case check: a case-insensitive Mac would hide a wrong-case reference */
  const dir = dirname(abs);
  const exact = existsSync(abs) && readdirSync(dir).includes(path.split('/').pop());
  if (!exact) missing.push({ path, files: [...files] });
}

console.log(`checked ${refs.size} image paths in ${sources.length} files`);
if (missing.length) {
  for (const m of missing) console.log(`MISSING ${m.path}  (used in ${m.files.join(', ')})`);
  console.log(`\n${missing.length} missing`);
  process.exit(1);
}
console.log('0 missing');
