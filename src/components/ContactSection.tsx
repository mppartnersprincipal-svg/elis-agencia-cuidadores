import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react'
import { fadeLeft, blurIn, staggerContainer, viewport } from '../lib/animations'
import { WHATSAPP_URL, PHONE_NUMBER } from '../lib/constants'
import { trackWhatsAppClick } from '../lib/tracking'

const INFO_CARDS = [
  { icon: MessageCircle, iconBg: 'bg-secondary-container', iconColor: 'text-secondary', hoverBg: 'group-hover:bg-secondary', hoverIcon: 'group-hover:text-on-secondary', title: 'WhatsApp', value: PHONE_NUMBER, subtitle: 'Resposta em até 2 horas', href: WHATSAPP_URL, external: true, trackWhatsApp: true },
  { icon: Phone, iconBg: 'bg-primary-fixed', iconColor: 'text-primary', hoverBg: 'group-hover:bg-primary', hoverIcon: 'group-hover:text-on-primary', title: 'Ligar', value: PHONE_NUMBER, subtitle: 'Atendimento imediato', href: 'tel:71999783417', external: false },
  { icon: Clock, iconBg: 'bg-surface-container-high', iconColor: 'text-on-surface-variant', hoverBg: '', hoverIcon: '', title: 'Horário de Atendimento', value: 'Seg a Dom, 24h por dia', subtitle: 'Incluindo feriados', href: null, external: false },
  { icon: MapPin, iconBg: 'bg-surface-container-high', iconColor: 'text-on-surface-variant', hoverBg: '', hoverIcon: '', title: 'Área de Atendimento', value: 'Salvador e Região', subtitle: 'Bahia, Brasil', href: null, external: false },
]

export default function ContactSection() {
  return (
    <section id="contato" className="py-[80px] bg-surface" aria-labelledby="contato-title">
      <div className="section-container">
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14 text-center"
        >
          <h2 id="contato-title" className="section-title font-headline">Comece hoje. A avaliação é gratuita.</h2>
          <p className="section-subtitle">
            Mande uma mensagem no WhatsApp ou nos ligue. Nossa equipe responde em até 2 horas — incluindo fins de semana.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {INFO_CARDS.map((card) => {
            const Icon = card.icon
            const Wrapper = card.href ? 'a' : 'div'
            const isWhatsApp = 'trackWhatsApp' in card && card.trackWhatsApp
            const extraProps = card.href
              ? {
                  href: card.href,
                  ...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                  ...(isWhatsApp
                    ? {
                        onClick: () => trackWhatsAppClick('contact_section_card'),
                        'data-gtm-event': 'whatsapp_click',
                        'data-gtm-location': 'contact_section_card',
                      }
                    : {}),
                }
              : {}

            return (
              <motion.div key={card.title} variants={fadeLeft}>
                <Wrapper
                  {...(extraProps as any)}
                  className={`flex items-start gap-4 p-5 card group h-full ${card.href ? 'hover:-translate-y-0.5 hover:shadow-ambient-md cursor-pointer' : ''} transition-all duration-300`}
                >
                  <div className={`w-11 h-11 ${card.iconBg} ${card.hoverBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300`}>
                    <Icon size={20} className={`${card.iconColor} ${card.hoverIcon} transition-colors duration-300`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-label text-label-md text-on-surface">{card.title}</p>
                    <p className={`text-body-md mt-0.5 ${card.href ? 'text-primary' : 'text-on-surface'} font-semibold`}>{card.value}</p>
                    <p className="text-caption text-on-surface-variant mt-0.5">{card.subtitle}</p>
                  </div>
                </Wrapper>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
