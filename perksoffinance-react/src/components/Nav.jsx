import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LionMark from '../assets/LionMark.jsx'
export default function Nav(){
  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
      <div className="container py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <LionMark className="h-9 w-9" />
          <span className="font-extrabold tracking-tight text-xl md:text-2xl text-slate-800">
            Perks of <span style={{color:'var(--pf-secondary)'}}>Finance</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/course" className={({isActive})=> (isActive?'text-slate-900':'text-slate-600 hover:text-slate-900')}>The 5‑Day Course</NavLink>
          <NavLink to="/pricing" className={({isActive})=> (isActive?'text-slate-900':'text-slate-600 hover:text-slate-900')}>Pricing</NavLink>
          <NavLink to="/about" className={({isActive})=> (isActive?'text-slate-900':'text-slate-600 hover:text-slate-900')}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=> (isActive?'text-slate-900':'text-slate-600 hover:text-slate-900')}>Contact</NavLink>
        </div>
        <Link to="/enroll" className="btn btn-primary">Join Next Cohort</Link>
      </div>
    </nav>
  )
}
