import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactSchema, type ContactFormData } from '../lib/validation'
import { SALVADOR_NEIGHBORHOODS, WHATSAPP_URL } from '../lib/constants'

const SERVICE_OPTIONS = [
  { value: 'longa-permanencia', label: 'Longa Permanência (24h)' },
  { value: 'curta-permanencia', label: 'Curta Permanência' },
  { value: 'day-care', label: 'Day Care (Diurno)' },
  { value: 'reabilitacao', label: 'Reabilitação Pós-Cirúrgica' },
  { value: 'paliativos', label: 'Cuidados Paliativos' },
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

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
    window.open(`https://wa.me/5571999783417?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={56} className="text-secondary mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h3>
        <p className="text-gray-600 mb-6">Abrimos o WhatsApp para você. Nossa equipe responderá em até 2 horas.</p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Continuar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Formulário de contato">
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nome completo <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome completo"
            className={`input-field ${errors.name ? 'input-error' : ''}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />{errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            WhatsApp / Telefone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(71) 99999-9999"
            className={`input-field ${errors.phone ? 'input-error' : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />{errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          E-mail <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          className={`input-field ${errors.email ? 'input-error' : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />{errors.email.message}
          </p>
        )}
      </div>

      {/* Row 2: Service + Neighborhood */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1.5">
            Tipo de serviço <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="serviceType"
            className={`input-field ${errors.serviceType ? 'input-error' : ''}`}
            aria-invalid={!!errors.serviceType}
            {...register('serviceType')}
          >
            <option value="">Selecione...</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {errors.serviceType && (
            <p role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />{errors.serviceType.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1.5">
            Bairro / Região <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="neighborhood"
            className={`input-field ${errors.neighborhood ? 'input-error' : ''}`}
            aria-invalid={!!errors.neighborhood}
            {...register('neighborhood')}
          >
            <option value="">Selecione...</option>
            {SALVADOR_NEIGHBORHOODS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {errors.neighborhood && (
            <p role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} aria-hidden="true" />{errors.neighborhood.message}
            </p>
          )}
        </div>
      </div>

      {/* Patient Birthdate */}
      <div>
        <label htmlFor="patientBirthdate" className="block text-sm font-medium text-gray-700 mb-1.5">
          Data de nascimento do paciente
        </label>
        <input
          id="patientBirthdate"
          type="date"
          className="input-field"
          {...register('patientBirthdate')}
        />
      </div>

      {/* Special Needs */}
      <div>
        <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700 mb-1.5">
          Necessidades especiais ou observações
        </label>
        <textarea
          id="specialNeeds"
          rows={3}
          placeholder="Descreva condições de saúde, medicamentos em uso, restrições, etc."
          className="input-field resize-none"
          {...register('specialNeeds')}
        />
        {errors.specialNeeds && (
          <p role="alert" className="mt-1 text-xs text-red-500">{errors.specialNeeds.message}</p>
        )}
      </div>

      {/* Best time */}
      <div>
        <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-1.5">
          Melhor horário para contato
        </label>
        <input
          id="bestTime"
          type="time"
          className="input-field"
          {...register('bestTime')}
        />
      </div>

      {/* Terms */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-offset-0 cursor-pointer"
            aria-invalid={!!errors.terms}
            {...register('terms')}
          />
          <span className="text-sm text-gray-600">
            Concordo com os{' '}
            <a href="#" className="text-primary hover:underline font-medium">Termos de Uso</a>
            {' '}e a{' '}
            <a href="#" className="text-primary hover:underline font-medium">Política de Privacidade</a>.{' '}
            <span className="text-red-500" aria-hidden="true">*</span>
          </span>
        </label>
        {errors.terms && (
          <p role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />{errors.terms.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
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
            <Send size={18} aria-hidden="true" />
            Solicitar Avaliação Gratuita
          </>
        )}
      </motion.button>
    </form>
  )
}
