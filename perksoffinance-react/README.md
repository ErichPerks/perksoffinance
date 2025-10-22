# Perks of Finance — 5‑Day Masterclass Site (Gmail wired)

## Local dev
```bash
npm i
npm run dev
```

## Vercel build
- Framework: **Vite**
- Build: `npm run build`
- Output: `dist`

## Forms
- Default fallback is **mailto:perksoffinance@gmail.com** for Contact + Enroll forms.
- To capture without opening mail app, set **Formspree**:
  - Add env var in Vercel: `VITE_FORMSPREE_ID=xxxxxxx`
  - Redeploy

## Stripe (optional)
Set env vars to turn on checkout links:
```
VITE_STRIPE_LINK_STARTER=https://buy.stripe.com/...
VITE_STRIPE_LINK_COHORT=https://buy.stripe.com/...
VITE_STRIPE_LINK_VIP=https://buy.stripe.com/...
```

## Routes
/           Home
/course     5‑day breakdown
/pricing    Pricing (Stripe-ready)
/about      Instructor + toolkit
/contact    Contact form
/enroll     Waitlist form
