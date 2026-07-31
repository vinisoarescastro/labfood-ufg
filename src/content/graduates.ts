import { Award, GraduationCap, ScrollText } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface GraduateLevel {
  id: string
  title: string
  icon: LucideIcon
  description: string
}

/**
 * Níveis de pós-graduação com pesquisadores em atividade no laboratório.
 * Por decisão editorial, a seção não cita nomes, apenas os níveis de formação.
 */
export const graduateLevels: readonly GraduateLevel[] = [
  {
    id: 'mestrado',
    title: 'Mestrado',
    icon: GraduationCap,
    description:
      'Pesquisadores em formação que conduzem estudos aplicados ao controle de qualidade e à caracterização de alimentos.',
  },
  {
    id: 'doutorado',
    title: 'Doutorado',
    icon: ScrollText,
    description:
      'Projetos de maior fôlego que aprofundam métodos analíticos e geram conhecimento novo para a ciência de alimentos.',
  },
  {
    id: 'pos-doutorado',
    title: 'Pós-doutorado',
    icon: Award,
    description:
      'Pesquisadores experientes que ampliam as linhas de investigação e fortalecem as colaborações científicas do laboratório.',
  },
] as const
