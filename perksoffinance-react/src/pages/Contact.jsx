import React,{useState} from 'react'
export default function Contact(){
  const[status,setStatus]=useState('idle')
  const FORMSPREE_ID=import.meta.env.VITE_FORMSPREE_ID
  async function handleSubmit(e){
    e.preventDefault()
    const data=new FormData(e.currentTarget)
    if(!FORMSPREE_ID){
      window.location.href=`mailto:perksoffinance@gmail.com?subject=Contact&body=${encodeURIComponent([...data.entries()].map(([k,v])=>k+': '+v).join('\n'))}`
      return
    }
    setStatus('loading')
    const res=await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,{method:'POST',headers:{'Accept':'application/json'},body:data})
    setStatus(res.ok?'success':'error')
  }
  return (<main className="container py-12">
    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Contact</h1>
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 max-w-2xl">
      <input name="name" required placeholder="Full name" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
      <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-slate-300 px-3 py-2"/>
      <input name="company" placeholder="Company / Role" className="w-full rounded-xl border border-slate-300 px-3 py-2 md:col-span-2"/>
      <textarea name="message" rows="5" placeholder="How can we help?" className="w-full rounded-xl border border-slate-300 px-3 py-2 md:col-span-2"></textarea>
      <button className="btn btn-primary" disabled={status==='loading'}>{status==='loading'?'Sending…':'Send'}</button>
      {status==='success'&&<div className="text-green-700 font-medium">Thanks — we’ll be in touch.</div>}
      {status==='error'&&<div className="text-red-700">Something went wrong. Email perksoffinance@gmail.com</div>}
    </form>
  </main>)
}
