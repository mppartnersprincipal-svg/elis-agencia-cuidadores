import { motion } from 'framer-motion'
import { Briefcase, Instagram } from 'lucide-react'
import { blurIn, viewport } from '../lib/animations'
import { INSTAGRAM_URL } from '../lib/constants'

export default function HiringNotice() {
  return (
    <section id="nao-estamos-contratando" className="py-[48px] bg-surface" aria-labelledby="hiring-notice-title">
      <div className="section-container">
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="max-w-3xl mx-auto bg-error-container border-2 border-error/25 rounded-3xl p-8 sm:p-10 text-center shadow-ambient"
        >
          <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-on-error-container/10 flex items-center justify-center">
            <Briefcase size={26} className="text-on-error-container" aria-hidden="true" />
          </div>

          <span className="inline-block bg-on-error-container text-error-container font-label text-label-md px-4 py-1.5 rounded-full mb-5">
            Aviso importante para profissionais
          </span>

          <h2 id="hiring-notice-title" className="font-headline text-headline-sm text-on-error-container mb-4 text-balance">
            No momento, <strong className="font-bold uppercase">não estamos contratando</strong> cuidadores
          </h2>

          <p className="text-body-md text-on-error-container/90 max-w-xl mx-auto mb-4">
            Nosso WhatsApp é exclusivo para <strong>famílias que buscam contratar serviços de cuidado</strong>.
            Não há vagas abertas e mensagens com currículos ou pedidos de emprego não poderão ser respondidas.
          </p>

          <p className="text-body-md text-on-error-container/90 max-w-xl mx-auto">
            Quando abrirmos novas vagas, o anúncio será feito no nosso Instagram:{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              <Instagram size={15} aria-hidden="true" />
              @elisagenciacuidadores
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
