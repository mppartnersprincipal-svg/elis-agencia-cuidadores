import { motion } from 'framer-motion'
import { Bath, Pill, UtensilsCrossed, Building2, Gamepad2, Activity } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { DETAILED_SERVICES } from '../lib/constants'

const ICONS = { Bath, Pill, UtensilsCrossed, Building2, Gamepad2, Activity }

export default function DetailedServices() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section className="section-padding bg-white" aria-labelledby="servicos-detalhados-title">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="servicos-detalhados-title" className="section-title">O Que Nossos Cuidadores Fazem</h2>
          <p className="section-subtitle">
            Cuidado completo e integral, cobrindo todas as necessidades do dia a dia do seu familiar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {DETAILED_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:shadow-md transition-all duration-300">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
