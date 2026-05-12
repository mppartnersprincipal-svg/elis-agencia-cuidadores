import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SERVICES, WHATSAPP_URL } from '../lib/constants'

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver()
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-[80px] bg-surface" aria-labelledby="servicos-title">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 id="servicos-title" className="section-title font-headline">Encontre o Cuidado Certo para Seu Familiar</h2>
          <p className="section-subtitle">
            Do acompanhamento diário ao cuidado integral 24h — adaptado à rotina e às necessidades reais da sua família.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-headline text-headline-sm text-on-surface mb-2">{service.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">{service.description}</p>

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center justify-between w-full text-primary font-label text-label-md hover:text-primary-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
                  aria-expanded={expanded === i}
                >
                  <span>O que está incluso</span>
                  {expanded === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {expanded === i && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-2"
                    role="list"
                  >
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-body-md text-on-surface-variant">
                        <Check size={14} className="text-secondary flex-shrink-0" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>

              <div className="px-6 pb-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary hover:bg-primary-container text-on-primary font-label text-label-md py-3 rounded-full transition-all duration-200 shadow-ambient hover:shadow-ambient-md"
                >
                  Quero este serviço
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
