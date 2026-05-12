import { motion } from 'framer-motion'
import { Check, Star, MessageCircle } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { PRICING, WHATSAPP_URL } from '../lib/constants'

export default function Pricing() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="valores" className="section-padding bg-gray-50" aria-labelledby="valores-title">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="valores-title" className="section-title">Investimento em Cuidado</h2>
          <p className="section-subtitle">
            Transparência e flexibilidade para encontrar a melhor solução para sua família.
          </p>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <MessageCircle size={20} className="text-white" aria-hidden="true" />
          </div>
          <p className="text-gray-700 text-sm">
            <strong className="text-primary">Avaliação domiciliar 100% gratuita.</strong>{' '}
            Todos os valores são ajustados conforme as necessidades reais do paciente. Solicite um orçamento personalizado!
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 overflow-x-auto pb-2">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.hours}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? 'bg-primary text-white shadow-2xl scale-105 z-10'
                  : 'bg-white text-gray-800 shadow-md hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  <Star size={10} className="fill-current" aria-hidden="true" />
                  Mais Contratado
                </div>
              )}

              <div className="mb-4">
                <h3 className={`font-bold text-xl ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.hours}</h3>
                <p className={`text-sm mt-1 ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>de cuidado</p>
              </div>

              <div className="mb-6">
                <span className={`text-lg font-bold ${plan.popular ? 'text-accent' : 'text-primary'}`}>
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={14}
                      className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-accent' : 'text-secondary'}`}
                      aria-hidden="true"
                    />
                    <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent-dark text-gray-900 focus:ring-accent'
                    : 'bg-primary hover:bg-primary-dark text-white focus:ring-primary'
                }`}
              >
                Solicitar Orçamento
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          * Pagamento antecipado. Valores ajustados conforme especificidades do paciente.
        </motion.p>
      </div>
    </section>
  )
}
