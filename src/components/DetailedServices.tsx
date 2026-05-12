import { motion } from 'framer-motion'
import { Bath, Pill, UtensilsCrossed, Building2, Gamepad2, Activity, ShieldCheck } from 'lucide-react'
import { fadeLeft, fadeRight, popIn, blurIn, staggerContainer, viewport } from '../lib/animations'
import { DETAILED_SERVICES } from '../lib/constants'

const ICONS = { Bath, Pill, UtensilsCrossed, Building2, Gamepad2, Activity }

const STATS = [
  { value: '100%', label: 'Verificados' },
  { value: '3%', label: 'Taxa de aprovação' },
  { value: '24/7', label: 'Suporte clínico' },
]

export default function DetailedServices() {
  return (
    <section className="py-[80px] bg-surface" aria-labelledby="servicos-detalhados-title">
      <div className="section-container">
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <h2 id="servicos-detalhados-title" className="section-title font-headline">Cuidado Completo, Dia a Dia</h2>
          <p className="section-subtitle mx-auto">
            Tudo que seu familiar precisa — da higiene ao acompanhamento médico — feito por profissionais treinados, com rotina e sem improvisos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large card — slides from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="md:col-span-2 card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-headline text-headline-sm text-on-surface mb-4">Só entra em casa quem a família aprova</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Verificação de antecedentes, checagem de formação, entrevistas presenciais e apresentação à família antes do primeiro dia. Menos de 3% dos candidatos chegam até você.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-outline-variant pt-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-headline text-headline-sm text-primary">{stat.value}</div>
                  <div className="text-caption text-outline font-label mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dark card — slides from right */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="bg-primary text-on-primary p-8 rounded-3xl shadow-ambient flex flex-col justify-center"
          >
            <Gamepad2 size={36} className="mb-6 text-primary-fixed" aria-hidden="true" />
            <h3 className="font-headline text-headline-sm mb-4 text-on-primary-container">Sempre aprendendo para cuidar melhor</h3>
            <p className="text-body-md opacity-90">
              Treinamentos mensais em Alzheimer, recuperação pós-cirúrgica e comunicação humanizada. Seu familiar é atendido por quem está sempre atualizado.
            </p>
          </motion.div>

          {/* Small service cards — pop in with stagger */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {DETAILED_SERVICES.map((service) => {
              const Icon = ICONS[service.icon as keyof typeof ICONS]
              return (
                <motion.div
                  key={service.title}
                  variants={popIn}
                  className="card p-6 flex gap-4 items-start hover:shadow-ambient-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 bg-surface-container-high rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-sm transition-all duration-300">
                    <Icon size={20} className="text-primary group-hover:text-on-primary transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-label text-label-md text-on-surface mb-1">{service.title}</h4>
                    <p className="text-caption text-on-surface-variant leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
