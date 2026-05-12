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
import Footer from './components/Footer'

export default function App() {
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
        <ContactSection />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
