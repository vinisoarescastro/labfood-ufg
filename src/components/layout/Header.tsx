import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { navItems } from '@/config/site'
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { cx } from '@/lib/cx'

import styles from './Header.module.css'

interface HeaderProps {
  /** Id da seção em leitura, para destacar o item correspondente do menu. */
  activeId: string | null
}

/** Cabeçalho fixo com navegação de âncoras e menu lateral no celular. */
export function Header({ activeId }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolledPast(16)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLElement>(null)
  const drawerId = useId()

  useBodyScrollLock(menuOpen)

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) {
      drawerRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const renderLinks = (onNavigate?: () => void) =>
    navItems.map((item) => (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          className={styles.link}
          aria-current={activeId === item.id ? 'true' : undefined}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      </li>
    ))

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <div className={cx('container', styles.inner)}>
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <ul className={styles.linkList}>{renderLinks()}</ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls={drawerId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="visually-hidden">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
        </button>
      </div>

      <div
        className={cx(styles.backdrop, menuOpen && styles.backdropVisible)}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav
        ref={drawerRef}
        id={drawerId}
        className={cx(styles.drawer, menuOpen && styles.drawerOpen)}
        aria-label="Menu de navegação"
        inert={!menuOpen}
      >
        <ul className={styles.drawerList}>{renderLinks(closeMenu)}</ul>
      </nav>
    </header>
  )
}
