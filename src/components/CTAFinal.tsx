import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { scaleUp, blurIn, popIn, staggerContainer, viewport } from '../lib/animations'
import { WHATSAPP_URL, PHONE_NUMBER } from '../lib/constants'

const TRUST_BADGES = [
  'Avaliação domiciliar gratuita',
  'Resposta em até 2h',
  'Você aprova o cuidador',
  'Sem fidelidade mínima',
]

export default function CTAFinal() {
  return (
    <section className="py-[80px] bg-surface-container-low" aria-labelledby="cta-title">
      <div className="section-container">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="bg-primary-container rounded-[3rem] p-12 text-center text-on-primary-container relative overflow-hidden shadow-ambient-md"
        >
          {/* Decorative blobs */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary-container rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />

          <div className="relative z-10">
            <motion.div
              variants={blurIn}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-label text-label-md mb-6">
                Sem compromisso — avaliação gratuita
              </span>

              <h2 id="cta-title" className="font-headline text-headline-md mb-4 text-balance">
                Não espere uma crise para buscar ajuda
              </h2>

              <p className="text-body-lg opacity-90 max-w-xl mx-auto mb-10">
                Quanto mais cedo você começa, mais fácil é adaptar o cuidado ao ritmo do seu familiar. Fale conosco agora e veja como podemos ajudar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative inline-flex items-center justify-center gap-3 bg-on-primary-container text-primary font-label text-label-md font-bold px-10 py-4 rounded-full shadow-ambient-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-container hover:bg-primary-fixed transition-colors"
                >
                  <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" aria-hidden="true" />
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-secondary relative" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="relative">Falar no WhatsApp Agora</span>
                </motion.a>

                <button
                  onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 border-2 border-on-primary-container/60 hover:border-on-primary-container text-on-primary-container font-label text-label-md font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-on-primary-container"
                >
                  Preencher Formulário
                </button>

                <a
                  href="tel:71999783417"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-on-primary-container font-label text-label-md font-semibold px-6 py-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-on-primary-container"
                >
                  <Phone size={16} aria-hidden="true" />
                  {PHONE_NUMBER}
                </a>
              </div>

              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="flex flex-wrap justify-center gap-4 text-caption text-on-primary-container/70 font-label"
              >
                {TRUST_BADGES.map((badge) => (
                  <motion.span key={badge} variants={popIn} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-secondary-fixed inline-block" aria-hidden="true" />
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
