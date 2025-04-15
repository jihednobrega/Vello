interface ClientData {
  [key: string]: {
    niche: string
    revenueRange: string
    averageTicket: string
    monthlyInvestment: string
  }
}

export const defaultFormValues = {
  niche: '',
  revenueRange: '',
  averageTicket: '',
  monthlyInvestment: '',
}

export const clientsData: ClientData = {
  'Mio Capelli': {
    niche: 'Fashion',
    revenueRange: '100k-500k',
    averageTicket: '50',
    monthlyInvestment: '1000',
  },
  Nike: {
    niche: 'Sports',
    revenueRange: '500k-1M',
    averageTicket: '80',
    monthlyInvestment: '5000',
  },
  Apple: {
    niche: 'Technology',
    revenueRange: '1M+',
    averageTicket: '120',
    monthlyInvestment: '10000',
  },
}

export const nicheOptions = [
  'Moda e Acessórios',
  'Beleza e Cosméticos',
  'Suplementos e Saúde',
  'Pet Shop',
  'Casa e Decoração',
  'Eletrônicos e Tecnologia',
]

export const revenueRangeOptions = [
  'Até R$10 mil/mês',
  'De R$10 mil a R$30 mil/mês',
  'De R$30 mil a R$70 mil/mês',
  'De R$70 mil a R$150 mil/mês',
  'De R$150 mil a R$300 mil/mês',
  'Acima de R$300 mil/mês',
]

export const ticketOptions = [
  'Até R$50',
  'De R$51 a R$100',
  'De R$101 a R$200',
  'De R$201 a R$500',
  'De R$501 a R$1.000',
  'Acima de R$1.000',
]

export const investmentOptions = [
  'Até R$500',
  'De R$501 a R$1.000',
  'De R$1.001 a R$2.000',
  'De R$2.001 a R$5.000',
  'De R$5.001 a R$10.000',
  'Acima de R$10.000',
]
