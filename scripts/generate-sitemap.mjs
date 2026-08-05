import { mkdir, writeFile } from 'node:fs/promises';
import items from '../src/data/items.json' with { type: 'json' };

const baseUrl = 'https://bubbleskp.com';
const staticPaths = [
	'/', '/rooms', '/navigation', '/gallery', '/sales', '/articles', '/reviews',
	'/events', '/jobs', '/socials', '/favorites',
];
const paths = [...staticPaths, ...items.map(({ slug }) => `/dish/${encodeURIComponent(slug)}`)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${baseUrl}${path}</loc></url>`).join('\n')}
</urlset>
`;

await mkdir(new URL('../public/', import.meta.url), { recursive: true });
await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml);
