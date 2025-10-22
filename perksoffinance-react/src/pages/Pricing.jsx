import React from 'react'
import { Check, ChevronRight } from 'lucide-react'
const PriceCard = ({ tier, price, tagline, features, link, featured }) => (
  <div className={`card border-0 ring-1 ring-black/5 ${featured?'shadow-2xl scale-[1.02]':''}`}>
    <div className="card-header"><div className="card-title text-2xl">{tier}</div><div className="card-desc">{tagline}</div></div>
    <div className="card-content space-y-4">
      <div className="flex items-end gap-1"><span className="text-4xl font-extrabold">${price}</span><span className="text-slate-500 mb-1">CAD</span></div>
      <ul className="space-y-2">{features.map(f => (<li key={f} className="flex items-start gap-2 text-slate-700"><Check className="h-4 w-4 mt-1" /> {f}</li>))}</ul>
      <a href={link} className="btn btn-primary w-full">Enroll <ChevronRight className="h-4 w-4 ml-1" /></a>
    </div>
  </div>
)
export default function Pricing(){
  const stripeStarter = import.meta.env.VITE_STRIPE_LINK_STARTER || '#'
  const stripeCohort = import.meta.env.VITE_STRIPE_LINK_COHORT || '#'
  const stripeVIP = import.meta.env.VITE_STRIPE_LINK_VIP || '#'
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <PriceCard tier="Starter" price={299} tagline="Watch the recordings + templates" features={["All recordings","Template pack","Community access"]} link={stripeStarter} />
        <PriceCard tier="Cohort Live" price={699} tagline="Join the next live 5‑day sprint" features={["All Starter features","Live Q&A + deal room","Certificate of completion"]} link={stripeCohort} featured />
        <PriceCard tier="VIP Coaching" price={1890} tagline="1:1 coaching + cohort access" features={["Everything in Cohort Live","Two 45‑min 1:1 calls","Deal review for 30 days"]} link={stripeVIP} />
      </div>
      <p className="text-sm text-slate-500 mt-4">Prices in CAD. Taxes may apply. 7‑day refund window from cohort start date.</p>
    </main>
  )
}
