import { motion } from 'framer-motion'
import { MessageCircle, Home, FileText, CheckCircle, Heart } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { HOW_IT_WORKS } from '../lib/constants'

const ICONS = { MessageCircle, Home, FileText, CheckCircle, Heart }

export default function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-br from-blue-50 to-emerald-50" aria-labelledby="como-funciona-title">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="como-funciona-title" className="section-title">Como Funciona</h2>
          <p className="section-subtitle">
            Processo simples e transparente para garantir o melhor cuidado para seu familiar.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary mx-24" aria-hidden="true" />

          <ol className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative" role="list">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = ICONS[step.icon as keyof typeof ICONS]
              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-white border-2 border-primary rounded-2xl flex items-center justify-center shadow-md lg:mx-auto">
                      <Icon size={28} className="text-primary" aria-hidden="true" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-gray-900 text-xs font-bold rounded-full flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>

                  {/* Mobile connector */}
                  <div className="lg:hidden w-0.5 h-6 bg-primary/20 ml-10 -mt-2" aria-hidden="true" />

                  <div className="lg:mt-4">
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{step.description}</p>
                    <span className="inline-block text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
