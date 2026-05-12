import { motion } from 'framer-motion'
import { Shield, Clock, Home, Heart } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const STEPS = [
  {
    icon: Shield,
    step: '01',
    title: 'Profissionais Certificados',
    description: 'Todos os cuidadores passam por rigorosa seleção, verificação de antecedentes e treinamento especializado.',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
  },
  {
    icon: Clock,
    step: '02',
    title: 'Disponibilidade 24/7',
    description: 'Atendimento ininterrupto, todos os dias da semana, incluindo feriados e finais de semana.',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-secondary',
  },
  {
    icon: Home,
    step: '03',
    title: 'Avaliação Gratuita',
    description: 'Realizamos visita domiciliar sem custo para entender as necessidades específicas do seu familiar.',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
  },
  {
    icon: Heart,
    step: '04',
    title: 'Cuidados Paliativos',
    description: 'Equipe especializada em conforto e qualidade de vida para pacientes em cuidados paliativos.',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-secondary',
  },
]

export default function Differentials() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section id="diferenciais" className="py-[80px] bg-surface-container-low" aria-labelledby="diferenciais-title">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 id="diferenciais-title" className="section-title font-headline">Por Que Escolher a Elis?</h2>
          <p className="section-subtitle mx-auto">
            Mais do que um serviço — um compromisso com a qualidade de vida e segurança do seu familiar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 flex flex-col items-start hover:shadow-ambient-md transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center mb-6 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <span className={`${item.iconColor} font-label text-label-md mb-2`}>Passo {item.step}</span>
                <h3 className="font-headline text-headline-sm text-on-surface mb-3">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
