import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
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
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      className="py-[80px] bg-surface-container"
      aria-labelledby="cobertura-title"
      ref={ref}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
          {/* Neighborhoods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-label text-label-md text-primary font-semibold mb-5 flex items-center gap-2">
              <MapPin size={16} />
              Bairros Atendidos em Salvador
            </h3>
            <div className="flex flex-wrap gap-2">
              {NEIGHBORHOODS.map((bairro) => (
                <span
                  key={bairro}
                  className="px-3 py-1.5 bg-surface-container-lowest border border-outline-variant/40 rounded-full text-body-md text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {bairro}
                </span>
              ))}
            </div>
            <p className="text-caption text-outline mt-4">
              Não encontrou seu bairro? Entre em contato — provavelmente atendemos sua região.
            </p>
          </motion.div>

          {/* Services list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-label text-label-md text-primary font-semibold mb-5">
              Serviços de Home Care em Salvador
            </h3>
            <ul className="space-y-3">
              {SERVICES_KEYWORDS.map((s) => (
                <li key={s.label}>
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
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 btn-primary"
            >
              Verificar atendimento no meu bairro
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
