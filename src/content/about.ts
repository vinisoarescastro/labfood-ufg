import { CalendarDays, FlaskConical, GraduationCap, Megaphone, Microscope, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface AboutHighlight {
  id: string
  text: string
}

/** Diferenciais do laboratório, exibidos como lista rápida na apresentação. */
export const aboutHighlights: readonly AboutHighlight[] = [
  { id: 'vinculo', text: 'Vinculado à Escola de Agronomia da UFG' },
  { id: 'infraestrutura', text: 'Infraestrutura e equipe técnica especializada' },
  { id: 'abertura', text: 'Aberto a estudantes, pesquisadores e empresas' },
] as const

export interface InstagramTopic {
  id: string
  label: string
  icon: LucideIcon
}

/**
 * Temas publicados no perfil do laboratório no Instagram, exibidos como
 * prévia ilustrativa em grade no cartão de perfil. Substituem o feed real,
 * que o Instagram só disponibiliza via Graph API (token + backend).
 */
export const instagramTopics: readonly InstagramTopic[] = [
  { id: 'analises', label: 'Análises', icon: FlaskConical },
  { id: 'ciencia', label: 'Ciência', icon: Microscope },
  { id: 'eventos', label: 'Eventos', icon: CalendarDays },
  { id: 'equipe', label: 'Equipe', icon: Users },
  { id: 'oportunidades', label: 'Oportunidades', icon: GraduationCap },
  { id: 'novidades', label: 'Novidades', icon: Megaphone },
] as const
