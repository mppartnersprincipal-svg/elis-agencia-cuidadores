export const WHATSAPP_NUMBER = '5571999783417'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20gratuita.`
export const INSTAGRAM_URL = 'https://instagram.com/elisagenciacuidadores'
export const PHONE_NUMBER = '(71) 99978-3417'

export const STATS: Array<{ value: number; suffix: string; label: string; display?: string }> = [
  { value: 0, suffix: '', label: 'e Região Metropolitana', display: 'Salvador' },
  { value: 2, suffix: 'h', label: 'Resposta garantida' },
  { value: 98, suffix: '%', label: 'Famílias satisfeitas' },
  { value: 50, suffix: '+', label: 'Cuidadores certificados' },
]

export const DIFFERENTIALS = [
  {
    icon: 'Shield',
    title: 'Você conhece o cuidador antes',
    description: 'Apresentamos o profissional para aprovação da família antes do primeiro dia. Não gostou? Trocamos sem burocracia.',
    color: 'text-primary',
    bg: 'bg-primary-fixed',
  },
  {
    icon: 'Clock',
    title: 'Resposta em até 2 horas',
    description: 'Domingo às 22h ou feriado: nossa equipe responde. Urgência não espera horário comercial.',
    color: 'text-secondary',
    bg: 'bg-secondary-container',
  },
  {
    icon: 'Home',
    title: 'A avaliação vai até você',
    description: 'Um profissional visita sua casa gratuitamente para entender a rotina do seu familiar — sem compromisso de contratar.',
    color: 'text-primary',
    bg: 'bg-primary-fixed',
  },
  {
    icon: 'Heart',
    title: 'Cuidado especializado em Alzheimer e paliativos',
    description: 'Profissionais com treinamento específico para as condições mais delicadas — porque cuidar da pessoa certa exige preparo.',
    color: 'text-secondary',
    bg: 'bg-secondary-container',
  },
]

export const SERVICES = [
  {
    title: 'Longa Permanência',
    description: 'Cuidador presente 24h no lar. Você vai trabalhar, dormir e viver a sua vida sabendo que seu familiar está seguro o tempo todo.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
    imageAlt: 'Cuidadora de idosos em Salvador BA auxiliando idosa em casa — home care 24h',
    benefits: ['Presença 24h, 7 dias por semana', 'Monitoramento de saúde contínuo', 'Assistência noturna incluída', 'Relatório diário para a família'],
  },
  {
    title: 'Curta Permanência',
    description: 'Precisa de alguns dias de reforço? Coberturas pontuais para quando a família não pode estar presente ou precisa descansar.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    imageAlt: 'Profissional de home care em atendimento domiciliar em Salvador BA',
    benefits: ['Horários flexíveis', 'Sem contrato de longo prazo', 'Agendamento em 24h', 'Ideal para coberturas e viagens'],
  },
  {
    title: 'Acompanhamento Diurno',
    description: 'Seu familiar fica em casa com companhia, segurança e estímulo durante o dia — enquanto você trabalha sem preocupação.',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80',
    imageAlt: 'Idoso feliz com cuidadora de idosos em Salvador durante acompanhamento diurno',
    benefits: ['Atividades que estimulam a mente', 'Refeições preparadas e assistidas', 'Passeios e companhia', 'Segurança e supervisão constante'],
  },
  {
    title: 'Recuperação Pós-Cirúrgica',
    description: 'Alta hospitalar não significa que a recuperação acabou. Nossos cuidadores garantem que o processo em casa seja seguro e sem complicações.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    imageAlt: 'Cuidador pós-cirúrgico em reabilitação domiciliar — home care Salvador BA',
    benefits: ['Medicamentos no horário certo', 'Curativos e cuidados com feridas', 'Exercícios conforme orientação médica', 'Apoio total à mobilidade'],
  },
  {
    title: 'Cuidados Paliativos',
    description: 'Nos momentos mais delicados, sua família não precisa enfrentar isso sozinha. Cuidado com dignidade, alívio e presença humana.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    imageAlt: 'Cuidados paliativos em casa em Salvador BA — cuidado humanizado e confortante',
    benefits: ['Alívio da dor e do desconforto', 'Suporte emocional ao paciente', 'Apoio e acolhimento à família', 'Equipe treinada para este momento'],
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Fale com a gente',
    description: 'Mande uma mensagem pelo WhatsApp ou preencha o formulário. Respondemos em até 2 horas — mesmo nos fins de semana.',
    icon: 'MessageCircle',
    time: 'Resposta em até 2h',
  },
  {
    step: 2,
    title: 'Vamos até sua casa',
    description: 'Um profissional visita gratuitamente para conhecer seu familiar, entender a rotina e identificar o que realmente é necessário.',
    icon: 'Home',
    time: 'Agendamos em 24h',
  },
  {
    step: 3,
    title: 'Plano personalizado, sem surpresas',
    description: 'Você recebe um plano de cuidados detalhado e um orçamento transparente. Sem letras miúdas, sem cobranças inesperadas.',
    icon: 'FileText',
    time: 'Em até 48h',
  },
  {
    step: 4,
    title: 'Você aprova o cuidador',
    description: 'Apresentamos o profissional selecionado para sua família antes de iniciar. Só começamos quando você estiver confortável.',
    icon: 'CheckCircle',
    time: 'Sem pressa',
  },
  {
    step: 5,
    title: 'O cuidado começa',
    description: 'Serviço iniciado com suporte contínuo da nossa equipe. Você acompanha tudo e pode falar conosco sempre que precisar.',
    icon: 'Heart',
    time: 'Com suporte contínuo',
  },
]

export const DETAILED_SERVICES = [
  { icon: 'Bath', title: 'Higiene e Conforto', description: 'Banho, higiene oral, cuidados com a pele e prevenção de escaras — com respeito e dignidade.' },
  { icon: 'Pill', title: 'Medicamentos no Horário', description: 'Controle rigoroso de doses e horários conforme a prescrição médica. Zero falhas.' },
  { icon: 'UtensilsCrossed', title: 'Alimentação Adaptada', description: 'Refeições nutritivas preparadas conforme a dieta e as preferências do paciente.' },
  { icon: 'Building2', title: 'Acompanhamento Hospitalar', description: 'Presença e suporte em internações, consultas e exames. Seu familiar nunca vai sozinho.' },
  { icon: 'Gamepad2', title: 'Estímulo Mental e Social', description: 'Jogos, leitura, artesanato e conversas que mantêm a mente ativa e o humor elevado.' },
  { icon: 'Activity', title: 'Monitoramento de Saúde', description: 'Pressão, temperatura, glicemia e sinais vitais verificados e registrados diariamente.' },
]

export const PRICING = [
  {
    hours: '6 horas',
    price: 'Consultar',
    popular: false,
    features: ['Turno diurno fixo', 'Higiene e conforto', 'Medicamentos no horário', 'Refeições assistidas'],
  },
  {
    hours: '8 horas',
    price: 'Consultar',
    popular: false,
    features: ['Turno diurno ampliado', 'Todos os cuidados básicos', 'Atividades de estímulo', 'Relatório enviado à família'],
  },
  {
    hours: '12 horas',
    price: 'Consultar',
    popular: true,
    features: ['Cobertura dia e noite', 'Todos os cuidados inclusos', 'Suporte direto à família', 'Relatório detalhado diário', 'Atendimento de urgência'],
  },
  {
    hours: '24 horas',
    price: 'A partir de R$ 6.000',
    popular: false,
    features: ['Presença integral no lar', 'Todos os cuidados inclusos', 'Monitoramento noturno', 'Linha direta 24/7', 'Relatório completo', 'Paliativo especializado'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Ana Clara Souza',
    role: 'Filha de paciente, Pituba',
    rating: 5,
    text: 'A Elis foi um presente para nossa família. A cuidadora da minha mãe é atenciosa, profissional e carinhosa. Minha mãe adora ela. Recomendo de olhos fechados.',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
  },
  {
    name: 'Roberto Mendes',
    role: 'Esposo de paciente, Barra',
    rating: 5,
    text: 'Contratei após a cirurgia da minha esposa e o serviço superou tudo que esperávamos. A cuidadora sabia exatamente como ajudar na recuperação. Profissionalismo de verdade.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Mariana Oliveira',
    role: 'Filha de paciente, Graça',
    rating: 5,
    text: 'Meu pai tem Alzheimer e precisávamos de alguém muito especial. A cuidadora da Elis tem paciência infinita e demonstra amor genuíno pela profissão. São 2 anos e não troco por nada.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
  },
  {
    name: 'Carlos Eduardo',
    role: 'Filho de paciente, Itaigara',
    rating: 5,
    text: 'A visita gratuita foi o que me convenceu. Desde o primeiro contato senti seriedade. O contrato foi claro, o preço justo e nunca tive uma surpresa ruim.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Fernanda Lima',
    role: 'Neta de paciente, Rio Vermelho',
    rating: 5,
    text: 'Minha vó ficou encantada com a cuidadora. Além do cuidado físico, ela traz alegria e companhia. Consigo trabalhar tranquila sabendo que ela está em boas mãos.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Como sei que o cuidador é de confiança?',
    answer: 'Todos os cuidadores passam por verificação de antecedentes criminais, conferência de formação profissional (Técnico em Enfermagem ou Cuidador Certificado) e entrevistas antes de entrar em qualquer lar. Você também conhece e aprova o profissional antes do início do serviço.',
  },
  {
    question: 'Quanto tempo leva para começar o atendimento?',
    answer: 'Na maioria dos casos, conseguimos iniciar em 3 a 5 dias úteis. A visita de avaliação é agendada em até 24 horas do primeiro contato, e o plano de cuidados fica pronto em até 48 horas.',
  },
  {
    question: 'Posso trocar de cuidador se não me adaptar?',
    answer: 'Sim, sem custo e sem complicação. Compatibilidade é essencial para um bom cuidado. Se a química não for boa, indicamos outro profissional imediatamente.',
  },
  {
    question: 'Vocês atendem fins de semana e feriados?',
    answer: 'Sim. Operamos 24 horas por dia, 7 dias por semana, incluindo todos os feriados. Para casos urgentes, temos linha de atendimento prioritário.',
  },
  {
    question: 'Como funciona a avaliação domiciliar gratuita?',
    answer: 'Um profissional da Elis vai até sua casa, sem custo, para conhecer o paciente e a rotina da família. Com isso, elaboramos um plano de cuidados personalizado e um orçamento transparente — sem compromisso de contratar.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer: 'Aceitamos PIX, transferência bancária (TED), cartão de crédito e boleto. O pagamento é antecipado, o que garante a disponibilidade do cuidador. Emitimos nota fiscal para todos os serviços.',
  },
  {
    question: 'Posso ajustar os horários depois de contratar?',
    answer: 'Sim. Entendemos que as necessidades mudam. Ajustes de horário ou de modalidade são feitos com 48 horas de aviso prévio, sem custos adicionais.',
  },
  {
    question: 'Vocês têm cuidadores especializados em Alzheimer?',
    answer: 'Sim. Contamos com profissionais com treinamento específico em Alzheimer, demências e cuidados paliativos. Durante a avaliação, identificamos o perfil ideal para as necessidades do seu familiar.',
  },
]

export const SALVADOR_NEIGHBORHOODS = [
  'Barra', 'Pituba', 'Graça', 'Vitória', 'Ondina', 'Rio Vermelho',
  'Itaigara', 'Caminho das Árvores', 'Imbuí', 'Brotas', 'Nazaré',
  'Federação', 'Canela', 'Garcia', 'Tororó', 'Cabula',
  'Paralela', 'Patamares', 'Piatã', 'Stella Maris', 'Outro',
]
