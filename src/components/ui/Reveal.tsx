import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

import { cx } from '@/lib/cx'

import styles from './Reveal.module.css'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Atraso da entrada, em milissegundos, para escalonar itens de uma grade. */
  delay?: number
}

/**
 * Revela o conteúdo com uma transição discreta quando ele entra na viewport.
 * A animação existe apenas sob `prefers-reduced-motion: no-preference`;
 * com movimento reduzido, o conteúdo é exibido de imediato.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cx(styles.reveal, visible && styles.visible, className)}
      style={delay > 0 ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
