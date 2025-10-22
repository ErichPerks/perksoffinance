import React from 'react'
export default function Enroll(){
  function handleSubmit(e){
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    window.location.href=`mailto:perksoffinance@gmail.com?subject=Join Waitlist&body=${encodeURIComponent([...data.entries()].map(([k,v])=>k+': '+v).join('\n'))}`;
  }
  return (<main className='container py-12 grid md:grid-cols-2 gap-8 items-start'>
    <div>
      <h1 className='text-3xl md:text-4xl font-bold'>Join the waitlist</h1>
      <p className='mt-2 text-slate-600 max-w-prose'>Be first to know when doors open. We’ll send dates and a private founder’s discount for early cohorts.</p>
      <form onSubmit={handleSubmit} className='mt-6 grid gap-3 max-w-lg'>
        <input name='name' required placeholder='Full name' className='w-full rounded-xl border border-slate-300 px-3 py-2'/>
        <input name='email' type='email' required placeholder='Email' className='w-full rounded-xl border border-slate-300 px-3 py-2'/>
        <input name='role' placeholder='Role / Company' className='w-full rounded-xl border border-slate-300 px-3 py-2'/>
        <textarea name='goal' placeholder='What do you want from this program?' rows='4' className='w-full rounded-xl border border-slate-300 px-3 py-2'></textarea>
        <button className='btn btn-primary'>Request invite</button>
      </form>
    </div>
    <div className='card border-0 ring-1 ring-black/5'>
      <div className='card-header'><div className='card-title'>Secure checkout, when open</div><div className='card-desc'>Stripe, Apple Pay, Google Pay supported</div></div>
      <div className='card-content space-y-2 text-slate-700'>
        <div>7‑day refund window from start</div>
        <div>Flexible business invoicing</div>
        <div>Receipt + GST/HST details provided</div>
      </div>
    </div>
  </main>)
}
