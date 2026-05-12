import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { WHATSAPP_URL, PHONE_NUMBER } from '../lib/constants'

export default function CTAFinal() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section className="section-padding gradient-cta relative overflow-hidden" aria-labelledby="cta-title">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true" />

      <div className="container-max relative z-10 text-center text-white" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Avaliação 100% Gratuita
          </span>

          <h2 id="cta-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-balance">
            Seu Familiar Merece o
            <br />
            Melhor Cuidado
          </h2>

          <p className="text-lg text-white/85 max-w-xl mx-auto mb-10">
            Não espere uma crise para buscar ajuda. Fale conosco agora
            e descubra como podemos transformar a qualidade de vida da sua família.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp - primary */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-2xl text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              <span className="absolute inset-0 rounded-xl bg-white animate-ping opacity-20" aria-hidden="true" />
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-secondary relative" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative">Falar no WhatsApp Agora</span>
            </motion.a>

            {/* Scroll to form */}
            <button
              onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Preencher Formulário
            </button>

            {/* Call */}
            <a
              href="tel:71999783417"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Phone size={18} aria-hidden="true" />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-white/70">
            {['Avaliação gratuita', 'Sem compromisso', 'Resposta em 2h', 'Profissionais verificados'].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
