import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { TESTIMONIALS, STATS } from '../lib/constants'

function useCounter(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, isVisible, duration])
  return count
}

// Extracted to own component so useCounter is not called inside a .map()
function StatCard({ stat, isVisible }: { stat: typeof STATS[0]; isVisible: boolean }) {
  const count = useCounter(stat.value, isVisible)
  return (
    <div className="card p-6 text-center">
      <p className="font-headline text-display-lg-mobile text-primary">{count}{stat.suffix}</p>
      <p className="text-body-md text-on-surface-variant mt-1">{stat.label}</p>
    </div>
  )
}

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver()
  const [current, setCurrent] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAuto = () => {
    autoRef.current = setInterval(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), 5000)
  }
  useEffect(() => {
    startAuto()
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [])

  const go = (dir: 1 | -1) => {
    if (autoRef.current) clearInterval(autoRef.current)
    setCurrent((c) => (c + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
    startAuto()
  }

  const t = TESTIMONIALS[current]

  return (
    <section id="depoimentos" className="py-[80px] bg-surface" aria-labelledby="depoimentos-title">
      <div className="section-container" ref={ref}>
        {/* Stats row — each card renders its own hook correctly */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"
        >
          <div>
            <h2 id="depoimentos-title" className="section-title font-headline">O Que as Famílias Dizem</h2>
            <p className="section-subtitle">Histórias reais de quem confiou no nosso cuidado.</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-all focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="card p-8 relative"
          >
            <Quote size={32} className="text-secondary/20 absolute top-6 right-6" aria-hidden="true" />
            <div className="flex gap-1 mb-6" aria-label={`Avaliação: ${t.rating} de 5 estrelas`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-secondary fill-secondary" aria-hidden="true" />
              ))}
            </div>
            <blockquote>
              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-8 italic">"{t.text}"</p>
              <footer className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <cite className="font-label font-semibold text-label-md text-on-surface not-italic">{t.name}</cite>
                  <p className="text-caption text-on-surface-variant mt-0.5">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>

          <div className="flex gap-2 mt-6" role="tablist" aria-label="Depoimentos">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Depoimento ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
                  i === current ? 'bg-primary w-8' : 'bg-outline-variant w-2 hover:bg-outline'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
