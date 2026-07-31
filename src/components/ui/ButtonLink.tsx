import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { cx } from '@/lib/cx'

import styles from './ButtonLink.module.css'

type Variant = 'primary' | 'outline' | 'outlineOnDark'
type Size = 'md' | 'sm'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

/**
 * Botão de ação renderizado como link.
 * Todas as ações do site levam a âncoras internas ou a mailto.
 */
export function ButtonLink({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonLinkProps) {
  return (
    <a className={cx(styles.button, styles[variant], size === 'sm' && styles.small, className)} {...rest}>
      {children}
    </a>
  )
}
