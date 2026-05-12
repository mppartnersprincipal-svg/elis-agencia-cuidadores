import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Differentials from './components/Differentials'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import DetailedServices from './components/DetailedServices'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactSection from './components/ContactSection'
import CTAFinal from './components/CTAFinal'
import CoverageArea from './components/CoverageArea'
import Footer from './components/Footer'

const SECTION_MAP: Record<string, string> = {
  '/servicos': 'servicos',
  '/como-funciona': 'como-funciona',
  '/precos': 'valores',
  '/depoimentos': 'depoimentos',
  '/faq': 'faq',
  '/contato': 'contato',
  '/diferenciais': 'diferenciais',
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sectionId = SECTION_MAP[pathname]
    if (!sectionId) {
      if (pathname === '/') window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }
    const el = document.getElementById(sectionId)
    if (!el) return
    const timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Differentials />
        <Services />
        <HowItWorks />
        <DetailedServices />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CoverageArea />
        <ContactSection />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
