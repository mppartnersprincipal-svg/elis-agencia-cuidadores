import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { fadeLeft, blurIn, staggerContainer, viewport } from '../lib/animations'
import { FAQ_ITEMS } from '../lib/constants'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-[80px] bg-surface-container" aria-labelledby="faq-title">
      <div className="section-container">
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-12"
        >
          <h2 id="faq-title" className="section-title font-headline">Perguntas que toda família faz</h2>
          <p className="section-subtitle mx-auto">
            Respostas diretas para as dúvidas mais comuns — sem enrolação.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-3xl mx-auto space-y-3"
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeLeft}
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
                <motion.span
                  animate={{ rotate: open === i ? 0 : 0 }}
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    open === i ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {open === i ? <Minus size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}
                </motion.span>
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
        </motion.div>
      </div>
    </section>
  )
}
