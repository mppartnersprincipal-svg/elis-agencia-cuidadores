import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { FAQ_ITEMS } from '../lib/constants'

export default function FAQ() {
  const { ref, isVisible } = useIntersectionObserver()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-[80px] bg-surface-container" aria-labelledby="faq-title">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="faq-title" className="section-title font-headline">Dúvidas Frequentes</h2>
          <p className="section-subtitle mx-auto">
            Respondemos as perguntas mais comuns para que você se sinta seguro ao nos contratar.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-surface-container-lowest rounded-2xl border transition-all duration-200 ${
                open === i ? 'border-primary/30 shadow-ambient' : 'border-outline-variant/30 hover:border-outline-variant'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-2xl"
                aria-expanded={open === i}
              >
                <span className="font-label text-label-md text-on-surface">{item.question}</span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  open === i ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
                }`}>
                  {open === i ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
