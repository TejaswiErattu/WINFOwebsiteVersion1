/*
  Auto-generate a past sponsors array by importing all image files from
  src/assets/sponsors using Vite's glob import. If you place sponsor
  logo files in `src/assets/sponsors` (png, jpg, jpeg, svg), this module
  will export an array of { name, logo } objects where `logo` is the
  resolved URL that can be used directly in <img src=... />.

  Usage: import sponsorsAuto from '../data/pastSponsorsAuto';
*/

// Import all allowed image types from the sponsors assets folder.
// Vite eager glob import — resolved at build time.
const modules = import.meta.glob('/src/assets/sponsors/*.{png,jpg,jpeg,svg}', { eager: true });

const sponsorsAuto = Object.keys(modules).map((fullPath) => {
  const fileName = fullPath.split('/').pop();
  // Remove extension and replace dashes/underscores with spaces
  const base = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ');
  // Title-case the name for display
  const name = base
    .split(' ')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');

  // Vite returns the URL as the default export for static assets
  const mod = modules[fullPath];
  const logo = mod && (mod.default || mod);

  return { name, logo };
});

export default sponsorsAuto;
