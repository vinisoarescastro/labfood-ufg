import { IconBadge, Reveal, Section, SectionIntro } from '@/components/ui'
import { audiences } from '@/content/audiences'

import styles from './Audiences.module.css'

/** Perfis atendidos: academia, instituições de ensino e empresas. */
export function Audiences() {
  return (
    <Section id="publico" variant="tinted">
      <SectionIntro
        titleId="publico-titulo"
        eyebrow="Quem atendemos"
        title="Público-alvo"
        description="O atendimento é aberto à comunidade interna e externa à UFG. Confira se o seu caso se encaixa em um dos perfis."
      />

      <ul className={styles.grid}>
        {audiences.map((audience, index) => (
          <li key={audience.id}>
            <Reveal delay={index * 100} className={styles.card}>
              <IconBadge icon={audience.icon} />
              <h3 className={styles.title}>{audience.title}</h3>
              <p className={styles.description}>{audience.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
