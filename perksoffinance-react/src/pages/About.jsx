import React from 'react'
import { Check } from 'lucide-react'
export default function About(){
  return (
    <main className="container py-12 grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Meet your instructor</h1>
        <p className="text-slate-600">Hi, I’m Erich Perkins. I’ve led and scaled independent dealerships in British Columbia, closing thousands of deals across credit bands. This program distills the systems, templates, and lender‑first language that work in the real world—without fluff.</p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2"><Check className="h-4 w-4 mt-1" /> 12+ years in sales, finance & leadership</li>
          <li className="flex gap-2"><Check className="h-4 w-4 mt-1" /> Built playbooks used by high‑volume teams</li>
          <li className="flex gap-2"><Check className="h-4 w-4 mt-1" /> Focus on ethical, compliant deal structure</li>
        </ul>
      </div>
      <div className="card border-0 ring-1 ring-black/5">
        <div className="card-header"><div className="card-title">What’s inside the toolkit</div></div>
        <div className="card-content space-y-2">
          {["Credit report checklist","LTV & payment calculators","Income letter templates","Exception note library","Deal triage board (Notion)"].map(x => (<div key={x} className="flex items-start gap-2 text-slate-700"><span className="font-bold mr-1">•</span> {x}</div>))}
        </div>
      </div>
    </main>
  )
}
