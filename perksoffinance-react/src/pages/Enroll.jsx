import React,{useState} from 'react'
export default function Enroll(){
  const[status,setStatus]=useState('idle')
  const FORMSPREE_ID=import.meta.env.VITE_FORMSPREE_ID
  async function handleSubmit(e){
    e.preventDefault()
    const data=new FormData(e.currentTarget)
    if(!FORMSPREE_ID){
      window.location.href=`mailto:perksoffinance@gmail.com?subject=Join Waitlist&body=${encodeURIComponent([...data.entries()].map(([k,v])=>k+': '+v).join('\n'))}`
      return
    }
    setStatus('loading')
    const res=await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,{method:'POST',headers:{'Accept':'application/json'},body:data})
    setStatus(res.ok?'success':'error')
  }
  return (<main className="container py-12 grid md:grid-cols-2 gap-8 items-start">
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Join the waitlist</h1>
      <p className="mt-2 text-slate-600 max-w-prose">Be first to know when doors open. We’ll send dates, pricing updates, and a private founder’s discount for early cohorts.</p>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-3 max-w-lg">
        <input name="name" required placeholder="Full name" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
        <input name="role" placeholder="Role / Company" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
        <textarea name="goal" placeholder="What do you want from this program?" rows="4" className="w-full rounded-xl border border-slate-300 px-3 py-2"></textarea>
        <button className="btn btn-primary" disabled={status==='loading'}>{status==='loading'?'Requesting…':'Request invite'}</button>
        {status==='success'&&<div className="text-green-700 font-medium">Thanks — you’re on the list.</div>}
        {status==='error'&&<div className="text-red-700">Something went wrong. Try again or email us.</div>}
      </form>
    </div>
    <div className="card border-0 ring-1 ring-black/5">
      <div className="card-header"><div className="card-title">Secure checkout, when open</div><div className="card-desc">Stripe, Apple Pay, Google Pay supported</div></div>
      <div className="card-content space-y-2 text-slate-700">
        <div>7‑day refund window from start</div>
        <div>Flexible business invoicing</div>
        <div>Receipt + GST/HST details provided</div>
      </div>
    </div>
  </main>)
}
