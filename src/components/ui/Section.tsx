import type { ReactNode } from 'react'

import { cx } from '@/lib/cx'

import styles from './Section.module.css'

type Variant = 'default' | 'tinted' | 'dark'

interface SectionProps {
  /** Id da seção, usado como âncora de navegação (ex.: #servicos). */
  id: string
  variant?: Variant
  className?: string
  children: ReactNode
}

/**
 * Casca padrão das seções da página: espaçamento vertical, fundo e contêiner.
 * O título interno (via SectionIntro) deve usar o id `${id}-titulo` para que
 * a seção seja corretamente nomeada para leitores de tela.
 */
export function Section({ id, variant = 'default', className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={cx(styles.section, styles[variant], className)}>
      <div className="container">{children}</div>
    </section>
  )
}
