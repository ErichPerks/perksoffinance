import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Course from './pages/Course.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Enroll from './pages/Enroll.jsx'
export default function App(){
  React.useEffect(()=>{
    document.documentElement.style.setProperty('--pf-primary','#117A65')
    document.documentElement.style.setProperty('--pf-secondary','#1F6FEB')
    document.documentElement.style.setProperty('--pf-accent','#22C55E')
  },[])
  return (
    <div className="min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      <Footer />
    </div>
  )
}
