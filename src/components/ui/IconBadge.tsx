import type { LucideIcon } from 'lucide-react'

import { cx } from '@/lib/cx'

import styles from './IconBadge.module.css'

type Tone = 'brand' | 'accent' | 'onDark'

interface IconBadgeProps {
  icon: LucideIcon
  tone?: Tone
  className?: string
}

/** Moldura arredondada para ícones decorativos de cartões e listas. */
export function IconBadge({ icon: Icon, tone = 'brand', className }: IconBadgeProps) {
  return (
    <div className={cx(styles.badge, styles[tone], className)} aria-hidden="true">
      <Icon className={styles.icon} strokeWidth={1.8} />
    </div>
  )
}
