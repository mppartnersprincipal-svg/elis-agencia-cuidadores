import { motion } from 'framer-motion'
import { Check, Star, MessageCircle } from 'lucide-react'
import { fadeUp, flipUp, blurIn, staggerContainer, viewport } from '../lib/animations'
import { PRICING, WHATSAPP_URL } from '../lib/constants'

export default function Pricing() {
  return (
    <section id="valores" className="py-[80px] bg-surface-container-low" aria-labelledby="valores-title">
      <div className="section-container">
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <h2 id="valores-title" className="section-title font-headline">Escolha o Plano Certo para Seu Familiar</h2>
          <p className="section-subtitle mx-auto">
            Valores transparentes, sem taxas escondidas. Não sabe qual escolher? A avaliação gratuita nos ajuda a indicar o ideal.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-8 bg-primary-fixed border border-primary/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <MessageCircle size={18} className="text-on-primary" aria-hidden="true" />
          </div>
          <p className="text-body-md text-on-surface">
            <strong className="text-primary">Não sabe qual plano escolher? A visita é gratuita.</strong>{' '}
            Um profissional vai à sua casa e indica o que faz sentido para a situação real do seu familiar.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRICING.map((plan) => (
            <motion.div
              key={plan.hours}
              variants={flipUp}
              className={`relative rounded-3xl p-6 flex flex-col border transition-all duration-300 ${
                plan.popular
                  ? 'bg-primary border-primary text-on-primary shadow-ambient-md scale-105 z-10'
                  : 'bg-surface-container-lowest border-outline-variant/30 text-on-surface shadow-ambient hover:shadow-ambient-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-secondary text-on-secondary text-caption font-label px-3 py-1 rounded-full shadow">
                  <Star size={10} className="fill-current" aria-hidden="true" />
                  Mais Contratado
                </div>
              )}

              <div className="mb-4">
                <h3 className={`font-headline font-semibold text-headline-sm ${plan.popular ? 'text-on-primary-container' : 'text-on-surface'}`}>
                  {plan.hours}
                </h3>
                <p className={`text-body-md mt-1 ${plan.popular ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>de cuidado</p>
              </div>

              <div className="mb-6">
                <span className={`text-label-md font-label font-semibold ${plan.popular ? 'text-secondary-fixed' : 'text-primary'}`}>
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6" role="list">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-body-md">
                    <Check size={14} className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-secondary-fixed' : 'text-secondary'}`} aria-hidden="true" />
                    <span className={plan.popular ? 'text-on-primary-container' : 'text-on-surface-variant'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-4 rounded-full font-label text-label-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  plan.popular
                    ? 'bg-on-primary-container text-primary hover:bg-primary-fixed focus:ring-white'
                    : 'bg-primary hover:bg-primary-container text-on-primary focus:ring-primary'
                }`}
              >
                Quero este plano
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-caption text-outline mt-6"
        >
          * Pagamento antecipado. Valores ajustados conforme especificidades do paciente.
        </motion.p>
      </div>
    </section>
  )
}
