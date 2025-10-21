import React from 'react'
export function Card({ className='', children }) {
  return <div className={`bg-white rounded-2xl border border-slate-200 ${className}`}>{children}</div>
}
export function CardHeader({ children, className='' }) {
  return <div className={`p-5 border-b border-slate-200 ${className}`}>{children}</div>
}
export function CardTitle({ children, className='' }) {
  return <div className={`font-semibold text-slate-900 ${className}`}>{children}</div>
}
export function CardDescription({ children, className='' }) {
  return <div className={`text-sm text-slate-500 ${className}`}>{children}</div>
}
export function CardContent({ children, className='' }) {
  return <div className={`p-5 ${className}`}>{children}</div>
}
export function CardFooter({ children, className='' }) {
  return <div className={`p-5 border-t border-slate-200 ${className}`}>{children}</div>
}
