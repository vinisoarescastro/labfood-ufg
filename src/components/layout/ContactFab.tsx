import { Mail } from 'lucide-react'

import { useScrolledPast } from '@/hooks/useScrolledPast'
import { cx } from '@/lib/cx'

import styles from './ContactFab.module.css'

interface ContactFabProps {
  /** Id da seção em leitura; o botão some quando o contato já está visível. */
  activeId: string | null
}

/** Botão flutuante que leva à seção de contato após o início da rolagem. */
export function ContactFab({ activeId }: ContactFabProps) {
  const scrolled = useScrolledPast(480)
  const visible = scrolled && activeId !== 'contato'

  return (
    <a
      href="#contato"
      className={cx(styles.fab, visible && styles.visible)}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <Mail className={styles.icon} aria-hidden="true" />
      <span>Contato</span>
    </a>
  )
}
