import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SERVICES, WHATSAPP_URL } from '../lib/constants'

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver()
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="servicos" className="section-padding bg-white" aria-labelledby="servicos-title">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="servicos-title" className="section-title">Modalidades de Atendimento</h2>
          <p className="section-subtitle">
            Soluções flexíveis para cada necessidade, sempre com cuidadores especializados e comprometidos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Benefits toggle */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center justify-between w-full text-primary font-medium text-sm hover:text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
                  aria-expanded={expanded === i}
                >
                  <span>Ver benefícios</span>
                  {expanded === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expanded === i && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 space-y-1.5"
                    role="list"
                  >
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check size={14} className="text-secondary flex-shrink-0" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center btn-primary py-2.5 text-sm"
                >
                  Solicitar este serviço
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
