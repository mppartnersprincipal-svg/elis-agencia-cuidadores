import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactSchema, type ContactFormData } from '../lib/validation'
import { SALVADOR_NEIGHBORHOODS, WHATSAPP_URL } from '../lib/constants'
import { trackWhatsAppClick } from '../lib/tracking'

const SERVICE_OPTIONS = [
  { value: 'longa-permanencia', label: 'Longa Permanência (24h)' },
  { value: 'curta-permanencia', label: 'Curta Permanência' },
  { value: 'day-care', label: 'Day Care (Diurno)' },
  { value: 'reabilitacao', label: 'Reabilitação Pós-Cirúrgica' },
  { value: 'paliativos', label: 'Cuidados Paliativos' },
]

const LabelText = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="block font-label text-label-md text-on-surface-variant mb-1.5">
    {children}
  </label>
)

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) })

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800))
    const msg = encodeURIComponent(
      `Olá! Gostaria de solicitar uma avaliação.\n\n` +
      `Nome: ${data.name}\n` +
      `Telefone: ${data.phone}\n` +
      `Serviço: ${SERVICE_OPTIONS.find(o => o.value === data.serviceType)?.label}\n` +
      `Bairro: ${data.neighborhood}\n` +
      (data.specialNeeds ? `Necessidades: ${data.specialNeeds}` : '')
    )
    trackWhatsAppClick('contact_form_submit', {
      service_type: data.serviceType,
      neighborhood: data.neighborhood,
    })
    window.open(`https://wa.me/5571999783417?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={52} className="text-secondary mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-headline text-headline-sm text-on-surface mb-2">Solicitação Enviada!</h3>
        <p className="text-body-md text-on-surface-variant mb-6">Abrimos o WhatsApp para você. Respondemos em até 2 horas.</p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('contact_form_success')}
          data-gtm-event="whatsapp_click"
          data-gtm-location="contact_form_success"
          className="btn-primary inline-flex"
        >
          Continuar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Formulário de contato">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <LabelText htmlFor="name">Nome completo <span className="text-error" aria-hidden="true">*</span></LabelText>
          <input id="name" type="text" autoComplete="name" placeholder="Seu nome completo"
            className={`input-field ${errors.name ? 'input-error' : ''}`}
            aria-invalid={!!errors.name} {...register('name')} />
          {errors.name && (
            <p role="alert" className="mt-1 text-caption text-error flex items-center gap-1">
              <AlertCircle size={11} />{errors.name.message}
            </p>
          )}
        </div>
        <div>
          <LabelText htmlFor="phone">WhatsApp / Telefone <span className="text-error" aria-hidden="true">*</span></LabelText>
          <input id="phone" type="tel" autoComplete="tel" placeholder="(71) 99999-9999"
            className={`input-field ${errors.phone ? 'input-error' : ''}`}
            aria-invalid={!!errors.phone} {...register('phone')} />
          {errors.phone && (
            <p role="alert" className="mt-1 text-caption text-error flex items-center gap-1">
              <AlertCircle size={11} />{errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <LabelText htmlFor="email">E-mail <span className="text-error" aria-hidden="true">*</span></LabelText>
        <input id="email" type="email" autoComplete="email" placeholder="seu@email.com"
          className={`input-field ${errors.email ? 'input-error' : ''}`}
          aria-invalid={!!errors.email} {...register('email')} />
        {errors.email && (
          <p role="alert" className="mt-1 text-caption text-error flex items-center gap-1">
            <AlertCircle size={11} />{errors.email.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <LabelText htmlFor="serviceType">Tipo de serviço <span className="text-error" aria-hidden="true">*</span></LabelText>
          <select id="serviceType" className={`input-field ${errors.serviceType ? 'input-error' : ''}`}
            aria-invalid={!!errors.serviceType} {...register('serviceType')}>
            <option value="">Selecione...</option>
            {SERVICE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          {errors.serviceType && (
            <p role="alert" className="mt-1 text-caption text-error flex items-center gap-1">
              <AlertCircle size={11} />{errors.serviceType.message}
            </p>
          )}
        </div>
        <div>
          <LabelText htmlFor="neighborhood">Bairro / Região <span className="text-error" aria-hidden="true">*</span></LabelText>
          <select id="neighborhood" className={`input-field ${errors.neighborhood ? 'input-error' : ''}`}
            aria-invalid={!!errors.neighborhood} {...register('neighborhood')}>
            <option value="">Selecione...</option>
            {SALVADOR_NEIGHBORHOODS.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
          {errors.neighborhood && (
            <p role="alert" className="mt-1 text-caption text-error flex items-center gap-1">
              <AlertCircle size={11} />{errors.neighborhood.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <LabelText htmlFor="patientBirthdate">Data de nascimento do paciente</LabelText>
        <input id="patientBirthdate" type="date" className="input-field" {...register('patientBirthdate')} />
      </div>

      <div>
        <LabelText htmlFor="specialNeeds">Necessidades especiais ou observações</LabelText>
        <textarea id="specialNeeds" rows={3}
          placeholder="Descreva condições de saúde, medicamentos em uso, restrições, etc."
          className="input-field resize-none" {...register('specialNeeds')} />
      </div>

      <div>
        <LabelText htmlFor="bestTime">Melhor horário para contato</LabelText>
        <input id="bestTime" type="time" className="input-field" {...register('bestTime')} />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox"
            className="mt-0.5 w-4 h-4 text-primary border-outline-variant rounded focus:ring-primary focus:ring-offset-0 cursor-pointer accent-primary"
            aria-invalid={!!errors.terms} {...register('terms')} />
          <span className="text-body-md text-on-surface-variant">
            Concordo com os{' '}
            <a href="#" className="text-primary hover:underline font-semibold">Termos de Uso</a>
            {' '}e a{' '}
            <a href="#" className="text-primary hover:underline font-semibold">Política de Privacidade</a>.{' '}
            <span className="text-error" aria-hidden="true">*</span>
          </span>
        </label>
        {errors.terms && (
          <p role="alert" className="mt-1 text-caption text-error flex items-center gap-1">
            <AlertCircle size={11} />{errors.terms.message}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full btn-primary py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <Send size={17} aria-hidden="true" />
            Solicitar Avaliação Gratuita
          </>
        )}
      </motion.button>
    </form>
  )
}
