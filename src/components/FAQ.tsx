import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { FAQ_ITEMS } from '../lib/constants'

export default function FAQ() {
  const { ref, isVisible } = useIntersectionObserver()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-title">
      <div className="container-max max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="faq-title" className="section-title">Dúvidas Frequentes</h2>
          <p className="section-subtitle">
            Respondemos as perguntas mais comuns para que você se sinta seguro ao nos contratar.
          </p>
        </motion.div>

        <dl className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                open === i ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.question}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    open === i ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {open === i
                      ? <Minus size={14} aria-hidden="true" />
                      : <Plus size={14} aria-hidden="true" />
                    }
                  </span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.dd
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
