export const WHATSAPP_NUMBER = '5571999783417'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20gratuita.`
export const INSTAGRAM_URL = 'https://instagram.com/elisagenciacuidadores'
export const PHONE_NUMBER = '(71) 99978-3417'

export const STATS = [
  { value: 200, suffix: '+', label: 'Clientes Atendidos' },
  { value: 5, suffix: '+', label: 'Anos de Experiência' },
  { value: 98, suffix: '%', label: 'Índice de Satisfação' },
  { value: 50, suffix: '+', label: 'Profissionais Certificados' },
]

export const DIFFERENTIALS = [
  {
    icon: 'Shield',
    title: 'Profissionais Certificados',
    description: 'Todos os cuidadores passam por rigorosa seleção, verificação de antecedentes e treinamento especializado.',
    color: 'text-primary',
    bg: 'bg-blue-50',
  },
  {
    icon: 'Clock',
    title: 'Disponibilidade 24/7',
    description: 'Atendimento ininterrupto, todos os dias da semana, incluindo feriados e finais de semana.',
    color: 'text-secondary',
    bg: 'bg-green-50',
  },
  {
    icon: 'Home',
    title: 'Avaliação Gratuita',
    description: 'Realizamos visita domiciliar sem custo para entender as necessidades específicas do seu familiar.',
    color: 'text-accent',
    bg: 'bg-amber-50',
  },
  {
    icon: 'Heart',
    title: 'Cuidados Paliativos',
    description: 'Equipe especializada em conforto e qualidade de vida para pacientes em cuidados paliativos.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
]

export const SERVICES = [
  {
    title: 'Longa Permanência',
    description: 'Cuidador presente 24 horas por dia, proporcionando assistência contínua e acompanhamento integral no lar.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
    imageAlt: 'Cuidadora profissional auxiliando idosa em casa',
    benefits: ['Presença 24 horas', 'Monitoramento contínuo', 'Assistência noturna', 'Relatórios diários'],
  },
  {
    title: 'Curta Permanência',
    description: 'Cuidado especializado por períodos determinados, ideal para recuperações ou quando a família precisa de apoio pontual.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    imageAlt: 'Profissional de saúde em atendimento domiciliar',
    benefits: ['Flexibilidade de horários', 'Avaliação personalizada', 'Fácil agendamento', 'Transição gradual'],
  },
  {
    title: 'Day Care (Diurno)',
    description: 'Assistência durante o dia para idosos que mantêm autonomia parcial, garantindo segurança e companhia.',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80',
    imageAlt: 'Idoso feliz com cuidadora durante atividade diurna',
    benefits: ['Atividades recreativas', 'Companhia e estímulo', 'Refeições assistidas', 'Passeios acompanhados'],
  },
  {
    title: 'Reabilitação Pós-Cirúrgica',
    description: 'Acompanhamento especializado para recuperação segura após procedimentos cirúrgicos ou hospitalares.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    imageAlt: 'Fisioterapia e reabilitação domiciliar assistida',
    benefits: ['Administração de medicamentos', 'Curativos e cuidados', 'Exercícios orientados', 'Apoio à mobilidade'],
  },
  {
    title: 'Cuidados Paliativos',
    description: 'Cuidado humanizado focado no conforto, dignidade e qualidade de vida de pacientes em fase avançada.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Cuidado humanizado e confortante para paciente',
    benefits: ['Alívio da dor e desconforto', 'Suporte emocional', 'Apoio à família', 'Equipe multidisciplinar'],
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Primeiro Contato',
    description: 'Entre em contato pelo WhatsApp ou formulário. Nossa equipe responde em até 2 horas.',
    icon: 'MessageCircle',
    time: 'Resposta em 2h',
  },
  {
    step: 2,
    title: 'Avaliação Domiciliar',
    description: 'Profissional vai à sua casa gratuitamente para entender as necessidades do paciente.',
    icon: 'Home',
    time: 'Agendamos em 24h',
  },
  {
    step: 3,
    title: 'Diagnóstico e Orçamento',
    description: 'Elaboramos plano de cuidados personalizado com orçamento transparente e sem surpresas.',
    icon: 'FileText',
    time: 'Em até 48h',
  },
  {
    step: 4,
    title: 'Contratação',
    description: 'Formalização simples com contrato claro. Pagamento antecipado garante a disponibilidade.',
    icon: 'CheckCircle',
    time: 'Processo rápido',
  },
  {
    step: 5,
    title: 'Início do Atendimento',
    description: 'Cuidador selecionado inicia o serviço conforme o plano estabelecido, com suporte contínuo.',
    icon: 'Heart',
    time: 'Imediato',
  },
]

export const DETAILED_SERVICES = [
  { icon: 'Bath', title: 'Higiene Pessoal', description: 'Banho, higiene oral, cuidados com a pele e prevenção de escaras.' },
  { icon: 'Pill', title: 'Administração de Medicamentos', description: 'Controle rigoroso de horários e dosagens, conforme prescrição médica.' },
  { icon: 'UtensilsCrossed', title: 'Preparação de Alimentos', description: 'Refeições nutritivas adaptadas às necessidades dietéticas do paciente.' },
  { icon: 'Building2', title: 'Acompanhamento Hospitalar', description: 'Presença e suporte durante internações e consultas médicas.' },
  { icon: 'Gamepad2', title: 'Atividades Recreativas', description: 'Jogos, leituras, artesanato e atividades que estimulam a mente e o bem-estar.' },
  { icon: 'Activity', title: 'Monitoramento de Saúde', description: 'Verificação de pressão, temperatura, glicemia e outros sinais vitais.' },
]

export const PRICING = [
  { hours: '6 horas', price: 'Consultar', popular: false, features: ['Período diurno', 'Higiene básica', 'Administração de medicamentos', 'Refeições assistidas'] },
  { hours: '8 horas', price: 'Consultar', popular: false, features: ['Período diurno ampliado', 'Todos serviços básicos', 'Atividades recreativas', 'Relatório diário'] },
  { hours: '12 horas', price: 'Consultar', popular: true, features: ['Meio período integral', 'Todos os serviços', 'Cobertura diurna/noturna', 'Suporte à família', 'Relatório detalhado'] },
  { hours: '24 horas', price: 'A partir de R$ 6.000', popular: false, features: ['Cobertura total', 'Todos os serviços', 'Monitoramento noturno', 'Suporte 24/7', 'Relatório completo', 'Cuidado paliativo incluso'] },
]

export const TESTIMONIALS = [
  {
    name: 'Ana Clara Souza',
    role: 'Filha de paciente',
    rating: 5,
    text: 'A Elis Agência foi um presente para nossa família. A cuidadora da minha mãe é atenciosa, profissional e carinhosa. Minha mãe adora ela! Recomendo de olhos fechados.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
  },
  {
    name: 'Roberto Mendes',
    role: 'Esposo de paciente',
    rating: 5,
    text: 'Contratei após a cirurgia da minha esposa. O serviço superou todas as expectativas. A cuidadora sabia exatamente como ajudar na recuperação. Excelente profissionalismo.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Mariana Oliveira',
    role: 'Filha de paciente',
    rating: 5,
    text: 'Meu pai tem Alzheimer e precisávamos de alguém muito especial. A cuidadora da Elis tem paciência infinita e demonstra verdadeiro amor pela profissão. São 2 anos e não troco por nada.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Filho de paciente',
    rating: 5,
    text: 'A avaliação gratuita foi o que me convenceu. Senti seriedade e comprometimento desde o primeiro contato. O processo de contratação foi transparente e sem complicações.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Fernanda Lima',
    role: 'Neta de paciente',
    rating: 5,
    text: 'Vovó ficou encantada com a cuidadora! Além dos cuidados físicos, ela proporciona companhia e alegria. Posso trabalhar tranquila sabendo que ela está bem assistida.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Vocês operam 24 horas por dia, todos os dias?',
    answer: 'Sim! A Elis Agência opera 24/7, incluindo finais de semana e feriados. Temos cuidadores disponíveis para todas as modalidades de atendimento, inclusive plantões noturnos e coberturas de emergência.',
  },
  {
    question: 'Como funciona a avaliação domiciliar gratuita?',
    answer: 'Após o primeiro contato, agendamos uma visita ao domicílio em até 24 horas. Um profissional da Elis vai à sua casa para conhecer o paciente, entender as necessidades específicas e elaborar o plano de cuidados personalizado. Sem custo algum.',
  },
  {
    question: 'Posso conhecer a cuidadora antes de contratar?',
    answer: 'Absolutamente! Prezamos pela compatibilidade entre cuidador e paciente. Apresentamos o profissional selecionado antes do início do serviço, e caso não haja identificação, substituímos sem burocracia.',
  },
  {
    question: 'Vocês oferecem cuidados paliativos especializados?',
    answer: 'Sim. Temos profissionais treinados especificamente para cuidados paliativos, com foco em conforto, dignidade e qualidade de vida. Nossa equipe também oferece suporte emocional às famílias neste momento delicado.',
  },
  {
    question: 'Como é feito o pagamento?',
    answer: 'O pagamento é realizado de forma antecipada, o que garante a disponibilidade do cuidador. Aceitamos transferência bancária (PIX/TED), cartão de crédito e boleto bancário. Emitimos nota fiscal para todos os serviços.',
  },
  {
    question: 'Posso alterar os horários ou modalidade do serviço?',
    answer: 'Sim, entendemos que as necessidades mudam. Ajustes de horário ou modalidade podem ser feitos com aviso prévio de 48 horas. Nossa equipe é flexível para se adaptar à realidade da sua família.',
  },
  {
    question: 'Qual o tempo de resposta após o contato inicial?',
    answer: 'Respondemos ao WhatsApp em até 2 horas durante horário comercial. Para casos urgentes, temos linha de atendimento prioritário. A avaliação domiciliar é agendada em até 24 horas após o primeiro contato.',
  },
  {
    question: 'Os cuidadores têm formação e certificação?',
    answer: 'Todos os profissionais passam por seleção rigorosa: verificação de antecedentes, comprovação de formação (Técnico em Enfermagem, Cuidador de Idosos certificado), entrevistas e treinamento interno antes de serem alocados.',
  },
]

export const SALVADOR_NEIGHBORHOODS = [
  'Barra', 'Pituba', 'Graça', 'Vitória', 'Ondina', 'Rio Vermelho',
  'Itaigara', 'Caminho das Árvores', 'Imbuí', 'Brotas', 'Nazaré',
  'Federação', 'Canela', 'Garcia', 'Tororó', 'Cabula',
  'Paralela', 'Patamares', 'Piatã', 'Stella Maris', 'Outro',
]
