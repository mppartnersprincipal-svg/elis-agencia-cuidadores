import { motion } from 'framer-motion'
import { ChevronDown, Star, Shield } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Hero() {
  const handleScrollDown = () => {
    document.querySelector('#diferenciais')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-emerald-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-white text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield size={14} className="text-accent" />
            Profissionais Certificados em Salvador, BA
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance"
          >
            Cuidado Humanizado
            <br />
            <span className="text-accent">para Quem Você Ama</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Cuidadores certificados proporcionam assistência especializada
            no conforto do seu lar — com segurança, dignidade e carinho.
          </motion.p>

          {/* Social proof badges */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              { icon: <Star size={14} className="fill-accent text-accent" />, text: '98% de satisfação' },
              { icon: <Shield size={14} className="text-secondary" />, text: 'Profissionais verificados' },
              { icon: <span className="text-accent font-bold text-xs">24/7</span>, text: 'Atendimento contínuo' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                {badge.icon}
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-base px-8 py-4 text-lg font-bold shadow-2xl"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Avaliação Gratuita
            </a>
            <button
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-base px-8 py-4 text-lg"
            >
              Conheça Nossos Serviços
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-1"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </button>
    </section>
  )
}
