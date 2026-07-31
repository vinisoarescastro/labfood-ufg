import { useEffect } from 'react'

import { ContactFab, Footer, Header, SkipLink } from '@/components/layout'
import { sectionIds } from '@/config/site'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { About, Audiences, Contact, Graduates, Hero, Partnerships, Services, Team } from '@/sections'

/** Página única do LabFood: seções na ordem definida pelo conteúdo institucional. */
export default function App() {
  const activeId = useScrollSpy(sectionIds)

  // Deep links (ex.: /#servicos): o navegador tenta rolar para a âncora antes
  // de o React renderizar as seções, então a posição é restaurada após a montagem.
  useEffect(() => {
    const targetId = window.location.hash.slice(1)
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView()
    }
  }, [])

  return (
    <>
      <SkipLink />
      <Header activeId={activeId} />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Audiences />
        <Services />
        <Team />
        <Graduates />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
      <ContactFab activeId={activeId} />
    </>
  )
}
