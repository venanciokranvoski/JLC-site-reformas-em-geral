# Google Search Console

## O que falta para conectar

1. Trocar `https://jlcreformasemgeral.site` pelo domínio real nos arquivos:
   - `index.html`
   - `blog/index.html`
   - `blog/*/index.html`
   - `site.config.json`
   - `robots.txt`
   - `sitemap.xml`
2. Rodar:

```bash
node scripts/generate-sitemap.mjs
```

3. No Google Search Console:
   - verificar a propriedade do domínio
   - enviar `https://jlcreformasemgeral.site/sitemap.xml`
   - pedir inspeção da URL principal e da página `/blog/`

## Sugestão de verificação

- Preferir verificação por DNS para cobrir todo o domínio.
- Depois da publicação, testar:
  - Rich Results Test
  - PageSpeed Insights
  - URL Inspection
