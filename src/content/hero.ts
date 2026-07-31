export interface HeroStat {
  value: string
  label: string
}

/** Indicadores exibidos na tela de abertura. */
export const heroStats: readonly HeroStat[] = [
  { value: '2022', label: 'Fundação' },
  { value: '12+', label: 'Tipos de análise' },
  { value: '3', label: 'Frentes de atuação' },
] as const
