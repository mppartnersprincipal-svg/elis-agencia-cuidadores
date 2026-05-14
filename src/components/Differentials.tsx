import { motion } from 'framer-motion'
import { Shield, Clock, Home, Heart } from 'lucide-react'
import { fadeLeft, fadeRight, fadeUp, blurIn, staggerContainer, viewport } from '../lib/animations'

const STEPS = [
  { icon: Shield, step: '01', title: 'Você conhece o cuidador antes', description: 'Apresentamos o profissional para aprovação da família antes do primeiro dia. Não gostou? Trocamos sem burocracia.', iconBg: 'bg-primary-fixed', iconColor: 'text-primary', anim: fadeLeft },
  { icon: Clock,  step: '02', title: 'Resposta em até 2 horas',       description: 'Domingo às 22h ou feriado: nossa equipe responde. Urgência não espera horário comercial.',                              iconBg: 'bg-secondary-container', iconColor: 'text-secondary', anim: fadeUp },
  { icon: Home,   step: '03', title: 'A avaliação vai até você',       description: 'Um profissional visita sua casa gratuitamente para entender a rotina do seu familiar — sem compromisso de contratar.', iconBg: 'bg-primary-fixed', iconColor: 'text-primary', anim: fadeUp },
  { icon: Heart,  step: '04', title: 'Cuidado especializado em Alzheimer e paliativos', description: 'Profissionais com treinamento específico para as condições mais delicadas — porque cuidar da pessoa certa exige preparo.', iconBg: 'bg-secondary-container', iconColor: 'text-secondary', anim: fadeRight },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-[80px] bg-surface-container-low" aria-labelledby="diferenciais-title">
      <div className="section-container">
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <h2 id="diferenciais-title" className="section-title font-headline">Por Que Salvador Confia na Elis</h2>
          <p className="section-subtitle mx-auto">
            Qualquer agência diz que tem bons profissionais. Veja o que nos faz diferentes na prática.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.13)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={item.anim}
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
        </motion.div>
      </div>
    </section>
  )
}
