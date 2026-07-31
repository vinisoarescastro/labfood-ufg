import type { ReactNode } from 'react'

import { cx } from '@/lib/cx'

import styles from './SectionIntro.module.css'

interface SectionIntroProps {
  /** Deve ser `${idDaSecao}-titulo` para casar com o aria-labelledby da Section. */
  titleId: string
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'start' | 'center'
  tone?: 'default' | 'onDark'
  className?: string
}

/** Cabeçalho padrão de seção: rótulo, título e descrição opcional. */
export function SectionIntro({
  titleId,
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
  className,
}: SectionIntroProps) {
  return (
    <header
      className={cx(styles.intro, align === 'center' && styles.center, tone === 'onDark' && styles.onDark, className)}
    >
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}
