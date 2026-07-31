import { Beaker, FlaskConical, ScanSearch } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceGroup {
  id: string
  title: string
  description: string
  items: readonly string[]
  icon: LucideIcon
  /** Destaca o cartão com a superfície escura da marca. */
  featured?: boolean
  /** Ação exibida ao final do cartão. */
  cta?: { label: string; targetId: string }
}

/** Catálogo de análises, agrupado como na seção Serviços. */
export const serviceGroups: readonly ServiceGroup[] = [
  {
    id: 'fisico-quimicas',
    title: 'Análises físico-químicas',
    description: 'Composição centesimal completa de alimentos e matérias-primas.',
    icon: FlaskConical,
    items: ['Umidade', 'Proteína', 'Carboidratos', 'Lipídios', 'Fibra alimentar', 'Cinzas (resíduo mineral)'],
  },
  {
    id: 'quimicas-avancadas',
    title: 'Análises químicas avançadas',
    description: 'Caracterização detalhada de compostos e produtos.',
    icon: Beaker,
    featured: true,
    items: ['Compostos orgânicos', 'Compostos voláteis', 'Análise de bebidas'],
  },
  {
    id: 'outros-servicos',
    title: 'Outros serviços',
    description: 'A capacidade do laboratório vai além do catálogo publicado.',
    icon: ScanSearch,
    items: ['Identificação e rastreabilidade de compostos'],
    cta: { label: 'Consultar disponibilidade', targetId: 'contato' },
  },
] as const
