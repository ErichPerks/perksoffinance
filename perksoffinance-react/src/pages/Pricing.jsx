import React from 'react'
const Card=({title,price,desc,cta,href})=> (
  <div className='card border-0 ring-1 ring-black/5'>
    <div className='card-header'><div className='card-title text-2xl'>{title}</div><div className='card-desc'>{desc}</div></div>
    <div className='card-content space-y-4'>
      <div className='flex items-end gap-1'><span className='text-4xl font-extrabold'>${price}</span><span className='text-slate-500 mb-1'>CAD</span></div>
      <a className='btn btn-primary w-full' href={href}>{cta}</a>
    </div>
  </div>
)
export default function Pricing(){
  return (<main className='container py-12'>
    <h1 className='text-3xl md:text-4xl font-bold mb-6'>Pricing</h1>
    <div className='grid md:grid-cols-2 gap-6'>
      <Card title='5‑Day Masterclass' price='1,999' desc='Live cohort + recordings + toolkit' cta='Enroll / Join Waitlist' href='/enroll' />
      <Card title='1:1 Session (60 min)' price='1,500' desc='Personal coaching with Erich' cta='Request 1:1' href='/contact' />
    </div>
    <p className='text-sm text-slate-500 mt-4'>Prices shown in CAD. Taxes may apply.</p>
  </main>)
}
