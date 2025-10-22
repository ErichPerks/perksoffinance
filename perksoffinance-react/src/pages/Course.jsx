import React from 'react'
export default function Course(){
  const days=[
    ['Day 1 • Foundation',['Credit file anatomy + scoring','DTI, PTI, LTV, advance caps','Risk flags & lender tiers']],
    ['Day 2 • Credit Reports',['10‑point report checklist','Collections & disputes','Thin files & no‑hit playbook']],
    ['Day 3 • Structure Levers',['Term, down, rate, lender fit','Co‑buyers & guarantors','Negative equity pathways']],
    ['Day 4 • Docs That Win',['Income proofs & letters','Exception notes that pass','Fraud screens & audits']],
    ['Day 5 • Deal Room',['Live critiques on real deals','Objection handling','Turnarounds & saves']],
  ]
  return (<main className="container py-12">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">The 5‑Day Masterclass</h1>
    <p className="text-slate-600 mb-8">Live sessions Mon–Fri. Optional office hours on the weekend. All calls recorded.</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {days.map(([title,points])=> (
        <div key={title} className="card border-0 ring-1 ring-black/5">
          <div className="card-header"><div className="card-title">{title}</div></div>
          <div className="card-content space-y-2">{points.map(p=> <div key={p} className="text-slate-700">• {p}</div>)}</div>
        </div>
      ))}
    </div>
  </main>)
}
