import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { fadeLeft, fadeRight, blurIn, staggerContainer, viewport } from '../lib/animations'
import { WHATSAPP_URL } from '../lib/constants'

const NEIGHBORHOODS = [
  'Pituba', 'Barra', 'Graça', 'Vitória', 'Itaigara', 'Ondina',
  'Rio Vermelho', 'Caminho das Árvores', 'Imbuí', 'Brotas',
  'Nazaré', 'Federação', 'Canela', 'Garcia', 'Paralela',
  'Patamares', 'Piatã', 'Stella Maris', 'Lauro de Freitas',
]

const SERVICES_KEYWORDS = [
  { label: 'Cuidador de Idosos 24h', href: '#servicos' },
  { label: 'Home Care Domiciliar', href: '#servicos' },
  { label: 'Enfermagem Domiciliar', href: '#servicos' },
  { label: 'Cuidados Paliativos em Casa', href: '#servicos' },
  { label: 'Acompanhante Hospitalar', href: '#servicos' },
  { label: 'Cuidador Pós-Cirúrgico', href: '#servicos' },
  { label: 'Cuidador para Alzheimer', href: '#servicos' },
  { label: 'Cuidador Noturno', href: '#servicos' },
]

export default function CoverageArea() {
  return (
    <section className="py-[80px] bg-surface-container" aria-labelledby="cobertura-title">
      <div className="section-container">
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 badge mb-4">
            <MapPin size={14} />
            Salvador e Região Metropolitana
          </div>
          <h2 id="cobertura-title" className="section-title font-headline">
            Cuidadores de Idosos em Toda Salvador, BA
          </h2>
          <p className="section-subtitle mx-auto">
            Nossa equipe de home care atende todos os bairros de Salvador e a região metropolitana.
            Onde você estiver, levamos o melhor cuidado até a porta da sua casa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Neighborhoods — tags pop in */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h3 className="font-label text-label-md text-primary font-semibold mb-5 flex items-center gap-2">
              <MapPin size={16} />
              Bairros Atendidos em Salvador
            </h3>
            <motion.div
              variants={staggerContainer(0.04)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="flex flex-wrap gap-2"
            >
              {NEIGHBORHOODS.map((bairro) => (
                <motion.span
                  key={bairro}
                  variants={{
                    hidden: { opacity: 0, scale: 0.7, y: 8 },
                    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 22 } },
                  }}
                  className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/40 rounded-full text-body-md text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {bairro}
                </motion.span>
              ))}
            </motion.div>
            <p className="text-caption text-outline mt-4">
              Não encontrou seu bairro? Entre em contato — provavelmente atendemos sua região.
            </p>
          </motion.div>

          {/* Services — slide from right */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <h3 className="font-label text-label-md text-primary font-semibold mb-5">
              Serviços de Home Care em Salvador
            </h3>
            <motion.ul
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="space-y-3"
            >
              {SERVICES_KEYWORDS.map((s) => (
                <motion.li
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                  }}
                >
                  <a
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(s.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="flex items-center gap-3 group text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-primary transition-colors flex-shrink-0" />
                    <span className="text-body-md">{s.label} em Salvador, BA</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Verificar atendimento no meu bairro
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
