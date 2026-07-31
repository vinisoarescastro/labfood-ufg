import ppgagroLogo from '@/assets/images/ppgagro-ea-ufg.png'
import { IconBadge, Reveal, Section, SectionIntro } from '@/components/ui'
import { site } from '@/config/site'
import { graduateLevels } from '@/content/graduates'

import styles from './Graduates.module.css'

/** Pesquisadores em formação no laboratório, apresentados por nível, sem citar nomes. */
export function Graduates() {
  return (
    <Section id="posgraduandos">
      <SectionIntro
        titleId="posgraduandos-titulo"
        eyebrow="Pesquisadores em formação"
        title="Pós-graduandos"
        description="O LabFood acolhe mestrandos, doutorandos e pós-doutorandos que desenvolvem suas pesquisas com a infraestrutura do laboratório e o acompanhamento da coordenação."
      />

      <ul className={styles.grid}>
        {graduateLevels.map((level, index) => (
          <li key={level.id}>
            <Reveal delay={index * 80} className={styles.card}>
              <IconBadge icon={level.icon} tone="accent" className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{level.title}</h3>
              <p className={styles.cardDescription}>{level.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={120}>
        <aside className={styles.affiliation} aria-label="Vínculo institucional">
          <img
            src={ppgagroLogo}
            alt="Programa de Pós-Graduação em Agronomia da Escola de Agronomia da UFG"
            className={styles.affiliationLogo}
            width="180"
            height="60"
          />
          <p className={styles.affiliationText}>
            O {site.name} atua junto aos programas de pós-graduação da {site.school} da {site.institution}.
          </p>
        </aside>
      </Reveal>
    </Section>
  )
}
