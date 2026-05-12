import { motion } from 'framer-motion'
import { Home, FileText, CheckCircle, Heart } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { HOW_IT_WORKS } from '../lib/constants'

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const ICONS = { MessageCircle: WhatsAppIcon, Home, FileText, CheckCircle, Heart }

const ICON_STYLES = [
  { bg: 'bg-primary-fixed', color: 'text-primary' },
  { bg: 'bg-secondary-container', color: 'text-secondary' },
  { bg: 'bg-primary-fixed', color: 'text-primary' },
  { bg: 'bg-secondary-container', color: 'text-secondary' },
  { bg: 'bg-primary-fixed', color: 'text-primary' },
]

export default function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="como-funciona" className="py-[80px] bg-surface-container-low" aria-labelledby="como-funciona-title">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 id="como-funciona-title" className="section-title font-headline">Como Funciona</h2>
          <p className="section-subtitle mx-auto">
            Processo simples e transparente para garantir o melhor cuidado para seu familiar.
          </p>
        </motion.div>

        {/* Desktop: 5 col grid with connector line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent mx-32 pointer-events-none" aria-hidden="true" />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative" role="list">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = ICONS[step.icon as keyof typeof ICONS]
              const style = ICON_STYLES[i]
              return (
                <motion.li
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center"
                >
                  <div className="relative flex-shrink-0">
                    <div className={`w-14 h-14 ${style.bg} rounded-2xl flex items-center justify-center shadow-sm lg:mx-auto`}>
                      <Icon size={24} className={style.color} aria-hidden="true" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-on-primary text-[10px] font-label font-bold rounded-full flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>

                  <div className="lg:mt-5">
                    <h3 className="font-headline text-label-md font-semibold text-on-surface mb-1">{step.title}</h3>
                    <p className="text-on-surface-variant text-body-md leading-relaxed mb-2">{step.description}</p>
                    <span className={`inline-block text-caption font-label font-semibold ${style.color} bg-primary-fixed/50 px-3 py-1 rounded-full`}>
                      {step.time}
                    </span>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>

        {/* Asymmetric detail block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] rounded-4xl overflow-hidden shadow-ambient-md">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="Avaliação domiciliar profissional"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="font-headline text-headline-md text-primary">Avaliação Domiciliar Gratuita</h2>
            <p className="text-body-lg text-on-surface-variant">
              Antes de iniciar o cuidado, nossos profissionais realizam uma avaliação detalhada da saúde física e do ambiente doméstico. Isso garante que cada plano de cuidados seja personalizado para a realidade da sua família.
            </p>
            <div className="bg-surface-container-high p-6 rounded-2xl border-l-4 border-primary">
              <p className="italic text-on-surface-variant text-body-md leading-relaxed">
                "A avaliação foi além da medicina — eles entenderam como minha mãe vivia. Notaram detalhes que não consideramos, tornando a casa muito mais segura."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-fixed flex-shrink-0" />
                <div>
                  <p className="font-bold text-on-surface text-label-md font-label">Ana Clara S.</p>
                  <p className="text-caption text-on-surface-variant">Filha de paciente</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
