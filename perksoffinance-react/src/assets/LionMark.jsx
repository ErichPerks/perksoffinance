import React from 'react'
export default function LionMark({className=''}){
  return (<svg className={className} viewBox="0 0 64 64" aria-hidden>
    <defs><linearGradient id="pfGrad" x1="0" x2="1"><stop offset="0%" stopColor="#1F6FEB"/><stop offset="100%" stopColor="#117A65"/></linearGradient></defs>
    <circle cx="32" cy="32" r="30" fill="url(#pfGrad)" opacity="0.15" />
    <path d="M20 42c8 4 16 4 24 0 0 0-2-4-2-8 0-4 3-6 3-10 0-6-6-10-13-10s-13 4-13 10c0 4 3 6 3 10 0 4-2 8-2 8z" fill="url(#pfGrad)" />
    <path d="M26 30c2 2 10 2 12 0" stroke="#0B132B" strokeWidth="2" strokeLinecap="round" />
    <circle cx="26" cy="26" r="1.5" fill="#0B132B" />
    <circle cx="38" cy="26" r="1.5" fill="#0B132B" />
  </svg>)
}
