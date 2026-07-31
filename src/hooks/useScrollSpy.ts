import { useEffect, useState } from 'react'

/**
 * Observa as seções da página e devolve o id daquela em leitura.
 * A faixa central da viewport (entre 35% e 40% de margem) define a seção ativa,
 * alimentando o destaque automático do menu.
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [ids])

  return activeId
}
