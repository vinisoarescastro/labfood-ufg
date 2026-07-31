import { Building2, GraduationCap, Landmark } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Audience {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

/** Perfis atendidos pelo laboratório. */
export const audiences: readonly Audience[] = [
  {
    id: 'academia',
    title: 'Comunidade acadêmica',
    description:
      'Alunos, professores e pesquisadores da UFG e de outras instituições de ensino superior que precisam de suporte analítico para trabalhos, dissertações, teses e projetos.',
    icon: GraduationCap,
  },
  {
    id: 'instituicoes',
    title: 'Instituições de ensino',
    description:
      'Universidades, institutos federais e centros de pesquisa que necessitam de apoio analítico especializado e não dispõem de infraestrutura própria para determinados ensaios.',
    icon: Landmark,
  },
  {
    id: 'empresas',
    title: 'Empresas públicas e privadas',
    description:
      'Indústrias alimentícias, empresas de controle de qualidade e organizações do setor que buscam laudos, caracterização de produtos ou apoio à certificação de qualidade.',
    icon: Building2,
  },
] as const
