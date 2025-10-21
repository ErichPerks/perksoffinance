# Perks of Finance — React + Vite + Tailwind

A clean landing page for the Perks of Finance cohort program.

## Quick start

```bash
npm i
npm run dev
# then open http://localhost:5173
```

## Build & deploy
```bash
npm run build
# output in dist/
```

### Deploy to Vercel (no GitHub)
1. Go to https://vercel.com/new
2. Click **Upload** → select the project folder (or a .zip of it)
3. Framework: React (Vite)
4. Build command: `npm run build`
5. Output directory: `dist`

### DNS (Namecheap → Vercel)
- A record @ → 76.76.21.21
- CNAME www → cname.vercel-dns.com

Set your primary domain in Vercel and 301‑redirect the other domain to it.
