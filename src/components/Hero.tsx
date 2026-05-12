import { motion } from 'framer-motion'
import { ChevronDown, Star, Shield, Heart } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/constants'

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
            <motion.span
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary-fixed font-label text-label-md backdrop-blur-sm"
            >
              <Shield size={14} />
              Profissionais Certificados — Salvador, BA
            </motion.span>

            <motion.h1
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="font-headline text-display-lg-mobile md:text-display-lg text-white mb-6 text-balance"
            >
              Cuidado que transforma
              <br />
              <span className="text-secondary-fixed">a vida de quem você ama</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="text-body-lg text-white/80 max-w-lg mb-8 leading-relaxed"
            >
              Cuidadores certificados proporcionam assistência especializada no conforto do seu lar — com segurança, dignidade e carinho.
            </motion.p>

            <motion.div
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shadow-ambient-md"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Avaliação Gratuita
              </a>
              <button
                onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline-white"
              >
                Conheça os Serviços
              </button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeUp} transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: <Star size={14} className="fill-secondary-fixed text-secondary-fixed" />, text: '98% de satisfação' },
                { icon: <Shield size={14} className="text-secondary-fixed" />, text: 'Verificados' },
                { icon: <Heart size={14} className="text-secondary-fixed" />, text: '24/7 Disponível' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-white/90 text-label-md font-label">
                  {b.icon} {b.text}
                </div>
              ))}
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
              <p className="font-headline text-2xl font-bold text-primary">200+</p>
              <p className="text-caption text-on-surface-variant font-label mt-0.5">Famílias atendidas</p>
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
