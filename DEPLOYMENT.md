# Deployment — GitHub Pages

This site uses Astro + GitHub Pages, the same stack as momery.live.

## One-time setup
1. Push this code to the `mattison-family` GitHub repo (main branch).
2. In the repo: **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
   The included workflow at `.github/workflows/deploy.yml` will build and deploy automatically.
3. In **Settings -> Pages -> Custom domain**, enter `mattisonfamily.org`. The `public/CNAME`
   file already contains this domain so GitHub Pages will keep it set on every deploy.
4. At your domain registrar, point DNS to GitHub Pages:
   - Add an `A` record for the root domain pointing to GitHub Pages' IPs (185.199.108.153,
     185.199.109.153, 185.199.110.153, 185.199.111.153), or
   - Add a `CNAME` record for `www` pointing to `<username>.github.io`
5. Wait for DNS to propagate, then enable "Enforce HTTPS" in the Pages settings.

## Ongoing deploys
Every push to `main` automatically rebuilds and redeploys via GitHub Actions — no manual
build step needed.

## Local development
```bash
npm install
npm run dev
```
