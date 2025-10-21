import React from 'react'
import { motion } from 'framer-motion'
import { Check, Shield, CalendarDays, CreditCard, BookOpen, Users, Clock, DollarSign, Mail, Phone, ChevronRight, ArrowRight, Star, LineChart, GraduationCap } from 'lucide-react'
import { Button } from './components/ui/Button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/Card.jsx'
import { Input, Textarea } from './components/ui/Input.jsx'
import { Badge } from './components/ui/Badge.jsx'

const brand = {
  primary: '#117A65',
  secondary: '#1F6FEB',
  accent: '#22C55E',
  ink: '#0B132B',
}

const LionMark = () => (
  <svg viewBox="0 0 64 64" aria-hidden className="h-8 w-8 md:h-10 md:w-10">
    <defs>
      <linearGradient id="pfGrad" x1="0" x2="1">
        <stop offset="0%" stopColor={brand.secondary} />
        <stop offset="100%" stopColor={brand.primary} />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#pfGrad)" opacity="0.15" />
    <path d="M20 42c8 4 16 4 24 0 0 0-2-4-2-8 0-4 3-6 3-10 0-6-6-10-13-10s-13 4-13 10c0 4 3 6 3 10 0 4-2 8-2 8z" fill="url(#pfGrad)" />
    <path d="M26 30c2 2 10 2 12 0" stroke={brand.ink} strokeWidth="2" strokeLinecap="round" />
    <circle cx="26" cy="26" r="1.5" fill={brand.ink} />
    <circle cx="38" cy="26" r="1.5" fill={brand.ink} />
  </svg>
)

const Nav = () => (
  <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b">
    <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <LionMark />
        <span className="font-extrabold tracking-tight text-xl md:text-2xl text-slate-800">
          Perks of <span style={{color:'var(--pf-secondary)'}}>Finance</span>
        </span>
        <Badge className="ml-2 hidden md:inline-flex" variant="secondary">Cohort-based</Badge>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#format" className="hover:text-slate-900 text-slate-600">Format</a>
        <a href="#curriculum" className="hover:text-slate-900 text-slate-600">Curriculum</a>
        <a href="#pricing" className="hover:text-slate-900 text-slate-600">Pricing</a>
        <a href="#about" className="hover:text-slate-900 text-slate-600">About</a>
        <a href="#faq" className="hover:text-slate-900 text-slate-600">FAQ</a>
      </div>
      <div className="flex items-center gap-2">
        <Button className="hidden md:inline-flex" asChild>
          <a href="#apply">Join waitlist</a>
        </Button>
        <Button variant="secondary" className="md:hidden">Menu</Button>
      </div>
    </div>
  </nav>
)

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-emerald-50 to-white" />
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
        <Badge className="w-fit" variant="secondary">
          <CalendarDays className="h-4 w-4 mr-1" /> 1‑week cohort • Monthly
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
          Master credit, lending & deal structure—
          <span style={{color:'var(--pf-secondary)'}}> in 7 days</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-xl">
          A hands‑on program for entrepreneurs, sales pros, and finance managers to confidently read credit reports, structure approvals, de‑risk negative equity, and speak fluent bank.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="group">
            Enroll now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#apply">Join waitlist</a>
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-2 text-sm text-slate-500">
          <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> 7‑day refund window</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Live + recordings</div>
          <div className="flex items-center gap-2"><Users className="h-4 w-4" /> Limited seats</div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <Card className="shadow-xl border-0 ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" /> What you’ll build in a week
            </CardTitle>
            <CardDescription>By Day 7 you’ll have a repeatable playbook.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {[
              "Decode any credit report with a 10‑point checklist",
              "LTV math, debt‑to‑income, and lender tiers—without guesswork",
              "Turn negative equity into approvals using structure levers",
              "Bank‑ready docs: income letters, proof packs, exception notes",
              "A deal triage board to prioritize high‑probability wins",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="h-5 w-5 mt-0.5" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">See full curriculum</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  </section>
)

const Pill = ({ children }) => (
  <div className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
    <Star className="h-4 w-4" /> {children}
  </div>
)

const Format = () => (
  <section id="format" className="mx-auto max-w-7xl px-4 py-16">
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Cohort format built for busy operators</h2>
        <p className="text-slate-600 max-w-2xl">
          Live sessions run Monday–Friday with optional office hours on the weekend. Can’t make a session? Every call is recorded and timestamped. You’ll join a private community and keep lifetime access to updates.
        </p>
        <div className="flex flex-wrap gap-3">
          <Pill>Live 60–90 min sessions</Pill>
          <Pill>Templates & calculators</Pill>
          <Pill>Deal room & feedback</Pill>
          <Pill>Certificate of completion</Pill>
        </div>
      </div>
      <Card className="border-0 ring-1 ring-black/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><CalendarDays className="h-5 w-5" /> Next cohort</CardTitle>
          <CardDescription>Runs monthly • Seats limited</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Format</span>
            <span className="font-medium">1 week, live + async</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Timezone</span>
            <span className="font-medium">Pacific (PT)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Recordings</span>
            <span className="font-medium">Included</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Reserve a seat</Button>
        </CardFooter>
      </Card>
    </div>
  </section>
)

const Curriculum = () => (
  <section id="curriculum" className="mx-auto max-w-7xl px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Curriculum at a glance</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Day 1 • Foundation", icon: <BookOpen className="h-5 w-5" />, points: ["Credit file anatomy + scoring","DTI, PTI, LTV, advance caps","Risk flags & lender tiers"] },
        { title: "Day 2 • Credit Reports", icon: <LineChart className="h-5 w-5" />, points: ["10‑point report checklist","Collections & disputes","Thin files & no‑hit playbook"] },
        { title: "Day 3 • Structure Levers", icon: <CreditCard className="h-5 w-5" />, points: ["Term, down, rate, lender fit","Co‑buyers & guarantors","Negative equity pathways"] },
        { title: "Day 4 • Docs That Win", icon: <Shield className="h-5 w-5" />, points: ["Income proofs & letters","Exception notes that pass","Fraud screens & audits"] },
        { title: "Day 5 • Deal Room", icon: <Users className="h-5 w-5" />, points: ["Live critiques on real deals","Objection handling","Turnarounds & saves"] },
        { title: "Bonus • Career & Flow", icon: <Clock className="h-5 w-5" />, points: ["Daily pipeline cadence","Pay plans & KPIs","Ethics & compliance"] },
      ].map((d) => (
        <Card key={d.title} className="border-0 ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">{d.icon} {d.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {d.points.map((p) => (
              <div key={p} className="flex items-start gap-2 text-slate-700">
                <Check className="h-4 w-4 mt-1" /> {p}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
)

const PriceCard = ({ tier, price, tagline, features, cta = "Enroll", featured }) => (
  <Card className={`relative border-0 ring-1 ring-black/5 ${featured ? "shadow-2xl scale-[1.02]" : ""}`}>
    {featured && (
      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="default">Most popular</Badge>
    )}
    <CardHeader>
      <CardTitle className="text-2xl">{tier}</CardTitle>
      <CardDescription>{tagline}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-end gap-1">
        <span className="text-4xl font-extrabold">${price}</span>
        <span className="text-slate-500 mb-1">CAD</span>
      </div>
      <ul className="space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-slate-700">
            <Check className="h-4 w-4 mt-1" /> {f}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full">
        {cta} <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
)

const Pricing = () => (
  <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Flexible pricing</h2>
    <div className="grid md:grid-cols-3 gap-6 items-stretch">
      <PriceCard tier="Starter" price={299} tagline="Watch the recordings + templates" features={["All recordings","Template pack","Community access"]} cta="Get Starter" />
      <PriceCard tier="Cohort Live" price={699} tagline="Join the next live 1‑week sprint" features={["All Starter features","Live Q&A + deal room","Certificate of completion"]} cta="Reserve seat" featured />
      <PriceCard tier="VIP Coaching" price={1890} tagline="1:1 coaching + cohort access" features={["Everything in Cohort Live","Two 45‑min 1:1 calls","Deal review for 30 days"]} cta="Apply for VIP" />
    </div>
    <p className="text-center text-sm text-slate-500 mt-4">Prices shown are in CAD. Taxes may apply. 7‑day refund window from the cohort start date.</p>
  </section>
)

const Testimonials = () => (
  <section className="mx-auto max-w-7xl px-4 py-16">
    <div className="grid lg:grid-cols-3 gap-6">
      {[
        { quote: "Closed 7 approvals in 10 days. The structure levers paid for the course on Day 3.", name: "A. Singh", role: "Finance Manager, BC" },
        { quote: "Finally understand what lenders actually want. My notes get green‑lit now.", name: "M. Johnson", role: "Sales Pro, AB" },
        { quote: "The templates alone are worth it. Credit report checklist = chef’s kiss.", name: "S. Chen", role: "Entrepreneur, ON" },
      ].map((t) => (
        <Card key={t.name} className="border-0 ring-1 ring-black/5">
          <CardContent className="pt-6">
            <p className="text-lg text-slate-800">“{t.quote}”</p>
            <div className="mt-4 text-sm text-slate-500">{t.name} • {t.role}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
)

const About = () => (
  <section id="about" className="mx-auto max-w-7xl px-4 py-16">
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet your instructor</h2>
        <p className="text-slate-600">
          Hi, I’m Erich Perkins. I’ve led and scaled independent dealerships in British Columbia, closing thousands of deals across credit bands. This program distills the systems, templates, and lender‑first language that work in the real world—without fluff.
        </p>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-2"><Check className="h-4 w-4 mt-1" /> 12+ years in sales, finance & leadership</li>
          <li className="flex gap-2"><Check className="h-4 w-4 mt-1" /> Built playbooks used by high‑volume teams</li>
          <li className="flex gap-2"><Check className="h-4 w-4 mt-1" /> Focus on ethical, compliant deal structure</li>
        </ul>
      </div>
      <Card className="border-0 ring-1 ring-black/5">
        <CardHeader>
          <CardTitle>What’s inside the toolkit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[
            "Credit report checklist",
            "LTV & payment calculators",
            "Income letter templates",
            "Exception note library",
            "Deal triage board (Notion)",
          ].map((x) => (<div key={x} className="flex items-start gap-2 text-slate-700"><Check className="h-4 w-4 mt-1" /> {x}</div>))}
        </CardContent>
      </Card>
    </div>
  </section>
)

const FAQ = () => (
  <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { q: "Who is this for?", a: "Finance managers, sales professionals, and entrepreneurs who want confident lender‑ready deal structure without years of trial and error." },
        { q: "Do I need prior experience?", a: "Basic familiarity with lending concepts helps, but we start from foundations and move fast to practical application." },
        { q: "Will this work outside Canada?", a: "Principles are universal. Lender policies differ by market—our templates are Canada‑first with notes for adaptation." },
        { q: "Can my team join?", a: "Absolutely. Ask about group pricing and private cohorts for dealerships and brokerages." },
      ].map((f) => (
        <Card key={f.q} className="border-0 ring-1 ring-black/5">
          <CardHeader>
            <CardTitle className="text-xl">{f.q}</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700">{f.a}</CardContent>
        </Card>
      ))}
    </div>
  </section>
)

const Apply = () => (
  <section id="apply" className="mx-auto max-w-7xl px-4 py-16">
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Join the waitlist</h2>
        <p className="mt-2 text-slate-600 max-w-prose">Be first to know when doors open. We’ll send dates, pricing updates, and a private founder’s discount for early cohorts.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-3">
          <Input placeholder="Full name" required />
          <Input type="email" placeholder="Email" required />
          <Input placeholder="Role / Company" />
          <Textarea placeholder="What do you want from this program?" rows={4} />
          <Button size="lg" type="submit">Request invite</Button>
          <p className="text-xs text-slate-500">By submitting, you agree to be contacted about Perks of Finance. Unsubscribe anytime.</p>
        </form>
      </div>
      <Card className="border-0 ring-1 ring-black/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5" /> Secure checkout, when open</CardTitle>
          <CardDescription>Stripe, Apple Pay, Google Pay supported</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-slate-700">
          <div className="flex items-center gap-2"><DollarSign className="h-5 w-5" /> 7‑day refund window from start</div>
          <div className="flex items-center gap-2"><CalendarDays className="h-5 w-5" /> Flexible business invoicing</div>
          <div className="flex items-center gap-2"><Mail className="h-5 w-5" /> Receipt + GST/HST details provided</div>
        </CardContent>
      </Card>
    </div>
  </section>
)

const Footer = () => (
  <footer className="border-t">
    <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 items-start">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <LionMark />
          <span className="font-bold">Perks of Finance</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Perks of Finance. All rights reserved.</p>
      </div>
      <div className="text-sm text-slate-600">
        <div className="font-semibold mb-2">Program</div>
        <ul className="space-y-1">
          <li><a href="#format" className="hover:underline">Format</a></li>
          <li><a href="#curriculum" className="hover:underline">Curriculum</a></li>
          <li><a href="#pricing" className="hover:underline">Pricing</a></li>
          <li><a href="#faq" className="hover:underline">FAQ</a></li>
        </ul>
      </div>
      <div className="text-sm text-slate-600">
        <div className="font-semibold mb-2">Contact</div>
        <ul className="space-y-1">
          <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@perksoffinance.co (placeholder)</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (604) 555‑0123 (placeholder)</li>
        </ul>
      </div>
    </div>
  </footer>
)

export default function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--pf-primary', brand.primary);
    document.documentElement.style.setProperty('--pf-secondary', brand.secondary);
    document.documentElement.style.setProperty('--pf-accent', brand.accent);
  }, [])
  return (
    <div className="min-h-screen selection:bg-emerald-100">
      <Nav />
      <Hero />
      <Format />
      <Curriculum />
      <Pricing />
      <Testimonials />
      <About />
      <FAQ />
      <Apply />
      <Footer />
    </div>
  )
}
