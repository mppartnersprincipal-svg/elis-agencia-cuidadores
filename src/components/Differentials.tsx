import { motion } from 'framer-motion'
import { Shield, Clock, Home, Heart } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { DIFFERENTIALS } from '../lib/constants'

const ICONS = { Shield, Clock, Home, Heart }

export default function Differentials() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="diferenciais" className="section-padding bg-gray-50" aria-labelledby="diferenciais-title">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="diferenciais-title" className="section-title">Por Que Escolher a Elis?</h2>
          <p className="section-subtitle">
            Mais do que um serviço — um compromisso com a qualidade de vida e segurança do seu familiar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {DIFFERENTIALS.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={28} className={item.color} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
