import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100),
  email: z.string().email('E-mail inválido'),
  phone: z
    .string()
    .min(10, 'Telefone inválido')
    .max(15, 'Telefone inválido')
    .regex(/^[\d\s()\-+]+$/, 'Formato de telefone inválido'),
  patientBirthdate: z.string().optional(),
  serviceType: z.enum(['longa-permanencia', 'curta-permanencia', 'day-care', 'reabilitacao', 'paliativos'], {
    required_error: 'Selecione um tipo de serviço',
  }),
  specialNeeds: z.string().max(500, 'Máximo 500 caracteres').optional(),
  neighborhood: z.string().min(1, 'Selecione o bairro/zona'),
  bestTime: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: 'Você precisa aceitar os termos para continuar',
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>
