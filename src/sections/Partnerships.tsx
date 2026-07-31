import { ButtonLink, IconBadge, Reveal, Section, SectionIntro } from '@/components/ui'
import { partnerships } from '@/content/partnerships'

import styles from './Partnerships.module.css'

/** Formatos de colaboração com empresas, pesquisadores e comunidade. */
export function Partnerships() {
  return (
    <Section id="parcerias" variant="dark">
      <SectionIntro
        titleId="parcerias-titulo"
        tone="onDark"
        eyebrow="Colabore conosco"
        title="Parcerias e projetos"
        description="O LabFood está aberto a parcerias com empresas, instituições e pesquisadores. Juntos podemos avançar no desenvolvimento científico e na garantia da qualidade alimentar."
      />

      <ul className={styles.grid}>
        {partnerships.map((partnership, index) => (
          <li key={partnership.id}>
            <Reveal delay={index * 100} className={styles.card}>
              <IconBadge icon={partnership.icon} tone="onDark" />
              <h3 className={styles.title}>{partnership.title}</h3>
              <p className={styles.description}>{partnership.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={200} className={styles.action}>
        <ButtonLink href="#contato">Propor parceria</ButtonLink>
      </Reveal>
    </Section>
  )
}
