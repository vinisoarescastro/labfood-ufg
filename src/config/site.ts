/**
 * Identidade e configuração global do site.
 * Centraliza dados institucionais usados em várias seções.
 */
export const site = {
  name: 'LabFood',
  fullName: 'Laboratório de Controle e Qualidade de Alimentos',
  institution: 'Universidade Federal de Goiás',
  school: 'Escola de Agronomia',
  url: 'https://labfood.ufg.br',
  email: 'labfood.agro@ufg.br',
  location: 'Goiânia, Goiás, Brasil',
  officeHours: 'Segunda a sexta, das 08h às 18h',
  foundedYear: 2022,
  tagline: 'Ciência a serviço da qualidade alimentar',
  instagram: {
    handle: '@labfood_ufg',
    url: 'https://www.instagram.com/labfood_ufg/',
  },
} as const

/** Autoria do site, exibida nos créditos do rodapé. */
export const author = {
  name: 'Vinicius Soares Castro',
  github: 'https://github.com/vinisoarescastro',
  linkedin: 'https://www.linkedin.com/in/vinisoarescastro/',
  instagram: 'https://www.instagram.com/vinisoarescastro/',
} as const

export interface NavItem {
  /** Id da seção alvo, usado no hash da URL (ex.: #servicos). */
  id: string
  label: string
}

/**
 * Itens do menu principal, na ordem das seções da página.
 * Os ids preservam os endereços já publicados (ex.: labfood.ufg.br/#servicos).
 */
export const navItems: readonly NavItem[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'posgraduandos', label: 'Pós-graduandos' },
  { id: 'parcerias', label: 'Parcerias' },
  { id: 'contato', label: 'Contato' },
] as const

/** Todas as seções observadas pelo destaque automático do menu. */
export const sectionIds = ['home', 'sobre', 'publico', 'servicos', 'equipe', 'posgraduandos', 'parcerias', 'contato'] as const
