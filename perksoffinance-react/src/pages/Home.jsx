import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{background:'linear-gradient(135deg, var(--pf-secondary), var(--pf-primary))', opacity:.08}}/>
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 text-xs">
              5‑Day Masterclass • Monthly
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Master credit, lending & deal structure—<span style={{color:'var(--pf-secondary)'}}> in 5 days</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              A hands‑on program for entrepreneurs, sales pros, and finance managers to confidently read credit reports, structure approvals, de‑risk negative equity, and speak fluent bank.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/enroll" className="btn btn-primary">Join next cohort</Link>
              <Link to="/course" className="btn btn-outline">See the 5‑day plan</Link>
            </div>
          </div>
          <div>
            <div className="card shadow-xl border-0 ring-1 ring-black/5">
              <div className="card-header">
                <div className="card-title">What you’ll build in 5 days</div>
                <div className="card-desc">By Day 5 you’ll have a repeatable playbook.</div>
              </div>
              <div className="card-content grid gap-3">
                {["Decode any credit report with a 10‑point checklist","LTV math, debt‑to‑income, and lender tiers—without guesswork","Turn negative equity into approvals using structure levers","Bank‑ready docs: income letters, proof packs, exception notes","A deal triage board to prioritize high‑probability wins"].map(x=> <div key={x} className="text-slate-700">• {x}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
