import { motion } from 'framer-motion'
import { Phone, Clock, MapPin } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { WHATSAPP_URL, PHONE_NUMBER } from '../lib/constants'
import ContactForm from './ContactForm'

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="contato" className="section-padding bg-gray-50" aria-labelledby="contato-title">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contato-title" className="section-title">Solicite uma Avaliação Gratuita</h2>
          <p className="section-subtitle">
            Preencha o formulário ou fale diretamente pelo WhatsApp. Respondemos em até 2 horas!
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp card */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-secondary group-hover:fill-white transition-colors duration-300" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p className="text-secondary font-medium">{PHONE_NUMBER}</p>
                <p className="text-sm text-gray-500 mt-1">Resposta em até 2 horas</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:71999783417"
              className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <Phone size={22} className="text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Ligar</p>
                <p className="text-primary font-medium">{PHONE_NUMBER}</p>
                <p className="text-sm text-gray-500 mt-1">Atendimento imediato</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Horário de Atendimento</p>
                <p className="text-gray-600 text-sm mt-1">Segunda a domingo, 24h por dia</p>
                <p className="text-gray-500 text-xs mt-1">Incluindo feriados</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-red-500" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Área de Atendimento</p>
                <p className="text-gray-600 text-sm mt-1">Salvador e Região Metropolitana</p>
                <p className="text-gray-500 text-xs mt-1">Bahia, Brasil</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
