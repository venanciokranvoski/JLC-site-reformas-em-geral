import { readFile, writeFile } from "node:fs/promises";

const configRaw = await readFile(new URL("../site.config.json", import.meta.url), "utf8");
const config = JSON.parse(configRaw);
const today = new Date().toISOString().slice(0, 10);

const urls = config.pages
  .map(
    (page) => `  <url>
    <loc>${config.siteUrl}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;

await writeFile(new URL("../sitemap.xml", import.meta.url), sitemap, "utf8");
await writeFile(new URL("../robots.txt", import.meta.url), robots, "utf8");

console.log("sitemap.xml e robots.txt gerados com sucesso.");
