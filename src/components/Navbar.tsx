import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { WHATSAPP_URL, PHONE_NUMBER } from '../lib/constants'
import { trackWhatsAppClick } from '../lib/tracking'
import LogoElis from './LogoElis'

const NAV_LINKS = [
  { path: '/servicos', sectionId: 'servicos', label: 'Serviços' },
  { path: '/como-funciona', sectionId: 'como-funciona', label: 'Como Funciona' },
  { path: '/precos', sectionId: 'valores', label: 'Preços' },
  { path: '/depoimentos', sectionId: 'depoimentos', label: 'Depoimentos' },
  { path: '/contato', sectionId: 'contato', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (path: string, sectionId: string) => {
    setIsOpen(false)
    navigate(path)
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const handleLogoClick = () => {
    setIsOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-surface/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-20" aria-label="Navegação principal">
        <button
          onClick={handleLogoClick}
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          aria-label="Início"
        >
          {scrolled || isOpen ? (
            <LogoElis variant="full" className="h-10 w-auto" />
          ) : (
            <span className="font-headline font-bold text-xl text-white tracking-wide">
              Elis <span className="font-normal opacity-80 text-base">Agência de Cuidadores</span>
            </span>
          )}
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => handleNavClick(link.path, link.sectionId)}
                className={`font-label text-label-md transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded ${
                  pathname === link.path
                    ? 'text-primary font-semibold'
                    : scrolled
                    ? 'text-on-surface-variant'
                    : 'text-white/90'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:+${PHONE_NUMBER.replace(/\D/g, '')}`}
            className={`flex items-center gap-1.5 font-label text-label-md transition-colors duration-200 hover:text-primary ${
              scrolled ? 'text-on-surface-variant' : 'text-white/90'
            }`}
          >
            <Phone size={14} />
            {PHONE_NUMBER}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('navbar_desktop')}
            data-gtm-event="whatsapp_click"
            data-gtm-location="navbar_desktop"
            className="bg-primary hover:bg-primary-container text-on-primary font-label text-label-md px-6 py-2.5 rounded-full transition-all duration-200 shadow-ambient hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
            scrolled || isOpen ? 'text-on-surface-variant hover:bg-surface-container' : 'text-white hover:bg-white/10'
          }`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/30 shadow-ambient-md">
          <ul className="px-gutter py-4 space-y-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => handleNavClick(link.path, link.sectionId)}
                  className={`w-full text-left px-4 py-3 font-label text-label-md rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    pathname === link.path
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="px-gutter pb-6 flex flex-col gap-3">
            <a
              href={`tel:71999783417`}
              className="flex items-center justify-center gap-2 px-4 py-3 border border-outline-variant rounded-full text-on-surface-variant font-label text-label-md hover:bg-surface-container transition-colors"
            >
              <Phone size={16} />
              {PHONE_NUMBER}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('navbar_mobile')}
              data-gtm-event="whatsapp_click"
              data-gtm-location="navbar_mobile"
              className="btn-primary justify-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
