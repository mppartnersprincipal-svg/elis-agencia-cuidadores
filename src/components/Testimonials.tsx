import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
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
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, isVisible, duration])
  return count
}

function StatCard({ stat, isVisible }: { stat: typeof STATS[0]; isVisible: boolean }) {
  const count = useCounter(stat.value, isVisible)
  return (
    <div className="text-center">
      <p className="text-4xl font-extrabold text-white">
        {count}{stat.suffix}
      </p>
      <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
    </div>
  )
}

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver()
  const [current, setCurrent] = useState(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAuto = () => {
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
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
    <section id="depoimentos" className="section-padding bg-gradient-to-br from-blue-900 to-blue-800" aria-labelledby="depoimentos-title">
      <div className="container-max" ref={ref}>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 id="depoimentos-title" className="section-title text-white">O Que as Famílias Dizem</h2>
        </motion.div>

        {/* Carousel */}
        <div className="mt-10 max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${t.rating} de 5 estrelas`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" aria-hidden="true" />
              ))}
            </div>

            <blockquote>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">"{t.text}"</p>
              <footer className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <cite className="font-bold text-gray-900 not-italic">{t.name}</cite>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Depoimentos">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
                    i === current ? 'bg-accent w-6' : 'bg-white/40 w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
