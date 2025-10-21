import React from 'react'

export function Button({ variant='default', size='md', className='', asChild=false, children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl font-medium shadow-sm transition px-4 py-2'
  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5'
  }
  const variants = {
    default: 'bg-[var(--pf-secondary)] text-white hover:brightness-105',
    outline: 'border border-slate-300 text-slate-800 hover:bg-slate-50',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700'
  }
  const cls = [base, sizes[size] || sizes.md, variants[variant] || variants.default, className].join(' ')
  const Comp = asChild ? 'span' : 'button'
  return <Comp className={cls} {...props}>{children}</Comp>
}
