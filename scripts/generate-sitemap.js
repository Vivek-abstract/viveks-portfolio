const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://vivekgawande.in';

// Discover all HTML pages from the build output
function getPages(dir, base = '') {
  const pages = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const urlPath = base + '/' + entry.name;

    if (entry.isDirectory()) {
      // Skip _next, hidden dirs, and placeholder blog posts
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
      if (entry.name === '_placeholder') continue;
      pages.push(...getPages(fullPath, urlPath));
    } else if (entry.name === 'index.html') {
      // Convert /about/index.html -> /about/
      const pagePath = base === '' ? '/' : base + '/';
      pages.push(pagePath);
    }
  }

  return pages;
}

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.log('No /out directory found — run `next build` first.');
  process.exit(1);
}

const pages = getPages(outDir);
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated with ${pages.length} pages.`);
