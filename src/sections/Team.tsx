import { Mail } from 'lucide-react'

import cnpqLogo from '@/assets/images/cnpq-logo.png'
import { Reveal, Section, SectionIntro } from '@/components/ui'
import { teamMembers } from '@/content/team'
import { cx } from '@/lib/cx'

import styles from './Team.module.css'

/** Quadro do laboratório: coordenação em destaque e corpo técnico. */
export function Team() {
  return (
    <Section id="equipe" variant="tinted">
      <SectionIntro
        titleId="equipe-titulo"
        eyebrow="Quem somos"
        title="Nossa equipe"
        description="Coordenação e corpo técnico responsáveis pelas atividades de ensino, pesquisa e extensão do laboratório."
      />

      <ul className={styles.grid}>
        {teamMembers.map((member, index) => (
          <li key={member.id}>
            <Reveal delay={index * 80} className={styles.cardReveal}>
              <article className={styles.card}>
                <img src={member.photo} alt="" className={styles.photo} width="180" height="180" />

                <div className={styles.body}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={cx(styles.role, member.leadership && styles.roleLead)}>{member.role}</p>
                  <p className={styles.degree}>{member.degree}</p>
                </div>

                <div className={styles.contacts}>
                  <a href={`mailto:${member.email}`} className={styles.contactRow}>
                    <Mail className={styles.contactIcon} aria-hidden="true" />
                    <span className={styles.contactText}>{member.email}</span>
                  </a>
                  <a
                    href={member.lattesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactRow}
                    title="Currículo Lattes (CNPq)"
                  >
                    <img src={cnpqLogo} alt="" className={styles.cnpqLogo} width="250" height="109" />
                    <span className={styles.contactText}>Currículo Lattes</span>
                    <span className="visually-hidden">de {member.name} (abre em nova aba)</span>
                  </a>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
