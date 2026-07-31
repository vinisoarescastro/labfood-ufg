import { Handshake, LineChart, Sprout } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Partnership {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

/** Formatos de colaboração possíveis com o laboratório. */
export const partnerships: readonly Partnership[] = [
  {
    id: 'empresariais',
    title: 'Parcerias empresariais',
    description:
      'Convênios com empresas do setor alimentício para análises regulares, consultoria técnica e suporte à certificação de qualidade.',
    icon: Handshake,
  },
  {
    id: 'pesquisa',
    title: 'Projetos de pesquisa',
    description:
      'Apoio a projetos com infraestrutura laboratorial, orientação técnica e coautoria em publicações científicas.',
    icon: LineChart,
  },
  {
    id: 'extensao',
    title: 'Projetos de extensão',
    description:
      'Iniciativas voltadas à comunidade, capacitação técnica e suporte a pequenos produtores e cooperativas agroindustriais.',
    icon: Sprout,
  },
] as const
