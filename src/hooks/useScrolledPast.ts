import { useEffect, useState } from 'react'

/** Indica se a página já rolou além do limite informado, em pixels. */
export function useScrolledPast(threshold: number): boolean {
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const update = () => setScrolledPast(window.scrollY > threshold)

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return scrolledPast
}
