import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

const SOCIAL_PROOF_AVATARS = [
  { src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80', alt: 'Família atendida pela Elis' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80', alt: 'Família atendida pela Elis' },
  { src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80', alt: 'Família atendida pela Elis' },
  { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80', alt: 'Família atendida pela Elis' },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Seção principal">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top md:object-center"
          loading="eager"
        />
        <div className="absolute inset-0 gradient-forest opacity-75 md:opacity-85" />
      </div>

      <div className="relative z-10 w-full section-container pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          >
            {/* Social proof avatar group */}
            <motion.div
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex -space-x-3">
                {SOCIAL_PROOF_AVATARS.map((av, i) => (
                  <Avatar
                    key={i}
                    className="ring-2 ring-white/30 w-10 h-10"
                  >
                    <AvatarImage src={av.src} alt={av.alt} />
                    <AvatarFallback className="bg-secondary text-on-secondary text-xs">
                      {String.fromCharCode(65 + i)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-label text-label-md">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-secondary-fixed text-secondary-fixed" aria-hidden="true" />
                  ))}
                </div>
                <span>Famílias atendidas em Salvador</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="font-headline text-display-lg-mobile md:text-display-lg text-white mb-6 text-balance"
            >
              Seu familiar seguro.
              <br />
              <span className="text-secondary-fixed">Você com paz de espírito.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="text-body-lg text-white/80 max-w-lg mb-8 leading-relaxed"
            >
              Cuidadores de idosos verificados e treinados para home care em Salvador — para que você possa trabalhar, descansar e viver sem culpa.
            </motion.p>

            <motion.div
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-fixed text-primary font-label font-semibold text-label-md px-8 py-4 rounded-full transition-all duration-200 shadow-ambient-md hover:shadow-ambient-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Quero uma Avaliação Gratuita
              </a>
              <button
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-fixed text-primary font-label font-semibold text-label-md px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Ver os Serviços
              </button>
            </motion.div>

          </motion.div>

          {/* Right: Image card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="rounded-4xl overflow-hidden shadow-ambient-md border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Cuidadora profissional com paciente"
                className="w-full h-[520px] object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest rounded-2xl p-4 shadow-ambient-md border border-outline-variant/20">
              <p className="font-headline text-2xl font-bold text-primary">24h</p>
              <p className="text-caption text-on-surface-variant font-label mt-0.5">Suporte contínuo</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#diferenciais')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors focus:outline-none rounded-full p-1"
        aria-label="Rolar para baixo"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={28} />
        </motion.div>
      </button>
    </section>
  )
}
