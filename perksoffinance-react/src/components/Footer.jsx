import React from 'react'
import { Link } from 'react-router-dom'
import LionMark from '../assets/LionMark.jsx'
export default function Footer(){
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid md:grid-cols-3 gap-6 items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LionMark className="h-8 w-8" />
            <span className="font-bold">Perks of Finance</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Perks of Finance. All rights reserved.</p>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold mb-2">Program</div>
          <ul className="space-y-1">
            <li><Link to="/course" className="hover:underline">The 5‑Day Course</Link></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-1">
            <li>perksoffinance@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
