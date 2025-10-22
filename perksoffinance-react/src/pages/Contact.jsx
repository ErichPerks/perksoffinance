import React from 'react'
export default function Contact(){
  function handleSubmit(e){
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    window.location.href=`mailto:perksoffinance@gmail.com?subject=Contact&body=${encodeURIComponent([...data.entries()].map(([k,v])=>k+': '+v).join('\n'))}`;
  }
  return (<main className='container py-12'>
    <h1 className='text-3xl md:text-4xl font-bold mb-6'>Contact</h1>
    <form onSubmit={handleSubmit} className='grid md:grid-cols-2 gap-4 max-w-2xl'>
      <input name='name' required placeholder='Full name' className='w-full rounded-xl border border-slate-300 px-3 py-2'/>
      <input name='email' type='email' required placeholder='Email' className='w-full rounded-xl border border-slate-300 px-3 py-2'/>
      <input name='company' placeholder='Company / Role' className='w-full rounded-xl border border-slate-300 px-3 py-2 md:col-span-2'/>
      <textarea name='message' rows='5' placeholder='How can we help?' className='w-full rounded-xl border border-slate-300 px-3 py-2 md:col-span-2'></textarea>
      <button className='btn btn-primary'>Send</button>
    </form>
  </main>)
}
