import { useEffect } from 'react'

/** Bloqueia a rolagem do documento enquanto `locked` for verdadeiro. */
export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [locked])
}
