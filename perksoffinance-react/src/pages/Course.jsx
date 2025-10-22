import React from 'react'
import { Check, BookOpen, LineChart, CreditCard, Shield, Users } from 'lucide-react'
const Day = ({title, points, icon}) => (
  <div className="card border-0 ring-1 ring-black/5">
    <div className="card-header"><div className="card-title flex items-center gap-2">{icon} {title}</div></div>
    <div className="card-content space-y-2">
      {points.map(p => (<div key={p} className="flex items-start gap-2 text-slate-700"><Check className="h-4 w-4 mt-1" /> {p}</div>))}
    </div>
  </div>
)
export default function Course(){
  const days = [
    { title:'Day 1 • Foundation', icon:<BookOpen className="h-5 w-5"/>, points:['Credit file anatomy + scoring','DTI, PTI, LTV, advance caps','Risk flags & lender tiers']},
    { title:'Day 2 • Credit Reports', icon:<LineChart className="h-5 w-5"/>, points:['10‑point report checklist','Collections & disputes','Thin files & no‑hit playbook']},
    { title:'Day 3 • Structure Levers', icon:<CreditCard className="h-5 w-5"/>, points:['Term, down, rate, lender fit','Co‑buyers & guarantors','Negative equity pathways']},
    { title:'Day 4 • Docs That Win', icon:<Shield className="h-5 w-5"/>, points:['Income proofs & letters','Exception notes that pass','Fraud screens & audits']},
    { title:'Day 5 • Deal Room', icon:<Users className="h-5 w-5"/>, points:['Live critiques on real deals','Objection handling','Turnarounds & saves']},
  ]
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The 5‑Day Masterclass</h1>
      <p className="text-slate-600 mb-8">Built for busy operators. Live sessions run Monday–Friday with optional office hours on the weekend. All calls recorded with timestamps.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{days.map(d => <Day key={d.title} {...d} />)}</div>
    </main>
  )
}
