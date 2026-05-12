import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { WHATSAPP_URL, PHONE_NUMBER } from '../lib/constants'
import ContactForm from './ContactForm'

const INFO_CARDS = [
  {
    icon: MessageCircle,
    iconBg: 'bg-secondary-container',
    iconColor: 'text-secondary',
    hoverBg: 'group-hover:bg-secondary',
    hoverIcon: 'group-hover:fill-on-secondary group-hover:text-on-secondary',
    title: 'WhatsApp',
    value: PHONE_NUMBER,
    subtitle: 'Resposta em até 2 horas',
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Phone,
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    hoverBg: 'group-hover:bg-primary',
    hoverIcon: 'group-hover:text-on-primary',
    title: 'Ligar',
    value: PHONE_NUMBER,
    subtitle: 'Atendimento imediato',
    href: 'tel:71999783417',
    external: false,
  },
  {
    icon: Clock,
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-on-surface-variant',
    hoverBg: '',
    hoverIcon: '',
    title: 'Horário de Atendimento',
    value: 'Seg a Dom, 24h por dia',
    subtitle: 'Incluindo feriados',
    href: null,
    external: false,
  },
  {
    icon: MapPin,
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-on-surface-variant',
    hoverBg: '',
    hoverIcon: '',
    title: 'Área de Atendimento',
    value: 'Salvador e Região',
    subtitle: 'Bahia, Brasil',
    href: null,
    external: false,
  },
]

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="contato" className="py-[80px] bg-surface" aria-labelledby="contato-title">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 id="contato-title" className="section-title font-headline">Solicite uma Avaliação Gratuita</h2>
          <p className="section-subtitle">
            Preencha o formulário ou fale diretamente pelo WhatsApp. Respondemos em até 2 horas!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {INFO_CARDS.map((card) => {
              const Icon = card.icon
              const Wrapper = card.href ? 'a' : 'div'
              const extraProps = card.href
                ? { href: card.href, ...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
                : {}

              return (
                <Wrapper
                  key={card.title}
                  {...(extraProps as any)}
                  className={`flex items-start gap-4 p-5 card group ${card.href ? 'hover:-translate-y-0.5 hover:shadow-ambient-md cursor-pointer' : ''} transition-all duration-300`}
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
              )
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-surface-container-lowest rounded-4xl shadow-ambient p-6 sm:p-8 border border-outline-variant/20"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
