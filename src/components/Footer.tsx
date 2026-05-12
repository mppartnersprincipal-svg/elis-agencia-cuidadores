import { ArrowUp, Phone, Instagram, MapPin, ShieldCheck, Award, Star } from 'lucide-react'
import { WHATSAPP_URL, PHONE_NUMBER, INSTAGRAM_URL } from '../lib/constants'
import LogoElis from './LogoElis'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#valores', label: 'Preços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

const scroll = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface" role="contentinfo">
      <div className="section-container py-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <LogoElis variant="full" className="h-14 w-auto brightness-[1.6] saturate-50" />
            </div>
            <p className="text-body-md text-inverse-on-surface/60 leading-relaxed">
              Cuidado humanizado e profissional para idosos e pacientes em Salvador, BA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-label text-label-md font-semibold text-inverse-on-surface mb-5">Navegação</h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scroll(link.href)}
                    className="text-body-md text-inverse-on-surface/60 hover:text-inverse-primary transition-colors focus:outline-none focus:ring-2 focus:ring-inverse-primary focus:ring-offset-2 focus:ring-offset-inverse-surface rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-label text-label-md font-semibold text-inverse-on-surface mb-5">Contato</h3>
            <ul className="space-y-3.5" role="list">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-body-md text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-secondary flex-shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:71999783417"
                  className="flex items-center gap-2.5 text-body-md text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors"
                >
                  <Phone size={15} className="flex-shrink-0 text-inverse-primary" aria-hidden="true" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-body-md text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors"
                >
                  <Instagram size={15} className="flex-shrink-0 text-secondary" aria-hidden="true" />
                  @elisagenciacuidadores
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-body-md text-inverse-on-surface/60">
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-secondary" aria-hidden="true" />
                <span>Salvador, Bahia — Brasil</span>
              </li>
            </ul>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="font-label text-label-md font-semibold text-inverse-on-surface mb-5">Atendimento</h3>
            <div className="space-y-2.5 text-body-md text-inverse-on-surface/60 mb-6">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                Segunda a domingo
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                24 horas por dia
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim inline-block" />
                Incluindo feriados
              </p>
            </div>
            <div className="flex gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <ShieldCheck size={28} className="text-inverse-primary" aria-label="Profissionais verificados" />
              <Award size={28} className="text-inverse-primary" aria-label="Prêmio de qualidade" />
              <Star size={28} className="text-inverse-primary" aria-label="Alta avaliação" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-inverse-on-surface/40">
            © {new Date().getFullYear()} Elis Agência de Cuidadores. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-caption text-inverse-on-surface/40">
            <a href="#" className="hover:text-inverse-on-surface transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-inverse-on-surface transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-6 w-10 h-10 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant text-on-surface-variant rounded-full shadow-ambient flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-40"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={16} aria-hidden="true" />
      </button>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5571999783417?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20gratuita."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20bc5a] text-white rounded-full shadow-ambient-md flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 z-40"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  )
}
