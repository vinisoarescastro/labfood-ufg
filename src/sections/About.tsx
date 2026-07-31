import { CircleCheck } from 'lucide-react'

import logoLabfood from '@/assets/images/labfood-logo.png'
import { ButtonLink, InstagramIcon, Reveal, Section, SectionIntro } from '@/components/ui'
import { site } from '@/config/site'
import { aboutHighlights, instagramTopics } from '@/content/about'

import styles from './About.module.css'

/** História, missão e o perfil do laboratório no Instagram. */
export function About() {
  return (
    <Section id="sobre">
      <div className={styles.grid}>
        <Reveal className={styles.copy}>
          <SectionIntro
            titleId="sobre-titulo"
            align="start"
            eyebrow="Sobre o LabFood"
            title={
              <>
                Ciência a serviço da <span className={styles.accent}>qualidade alimentar</span>
              </>
            }
            className={styles.intro}
          />
          <p className={styles.paragraph}>
            Criado em {site.foundedYear}, o {site.name} é o {site.fullName} da {site.institution}, com atuação em{' '}
            <strong>ensino, pesquisa e extensão</strong> e foco em análises físico-químicas e microbiológicas de
            alimentos.
          </p>
          <p className={styles.paragraph}>
            Nosso propósito é facilitar o acesso a análises especializadas para alunos, pesquisadores e empresas,
            em parceria com instituições públicas e privadas, promovendo inovação e segurança alimentar.
          </p>
          <ul className={styles.highlights}>
            {aboutHighlights.map((highlight) => (
              <li key={highlight.id} className={styles.highlight}>
                <CircleCheck className={styles.highlightIcon} aria-hidden="true" />
                {highlight.text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className={styles.visual}>
          <aside className={styles.profileCard} aria-labelledby="sobre-instagram-titulo">
            <h3 id="sobre-instagram-titulo" className="visually-hidden">
              {site.name} no Instagram
            </h3>

            <div className={styles.profileHeader}>
              <span className={styles.profileRing}>
                <img src={logoLabfood} alt="" className={styles.profileAvatar} width="56" height="56" />
              </span>
              <div className={styles.profileIdentity}>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.profileHandle}
                >
                  {site.instagram.handle}
                  <span className="visually-hidden">(abre em nova aba)</span>
                </a>
                <p className={styles.profileName}>
                  {site.name} | UFG · Perfil oficial
                </p>
              </div>
              <InstagramIcon className={styles.profileGlyph} aria-hidden="true" strokeWidth={1.8} />
            </div>

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileMosaic}
              aria-label={`Temas publicados por ${site.instagram.handle}: abrir o perfil no Instagram (abre em nova aba)`}
            >
              {instagramTopics.map((topic) => (
                <span key={topic.id} className={styles.profileTile}>
                  <topic.icon className={styles.profileTileIcon} aria-hidden="true" strokeWidth={1.8} />
                  {topic.label}
                </span>
              ))}
            </a>
            <p className={styles.profileCaption}>
              Prévia ilustrativa dos temas do perfil. As publicações estão no Instagram.
            </p>

            <ButtonLink
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className={styles.profileCta}
            >
              <InstagramIcon className={styles.profileCtaIcon} aria-hidden="true" />
              Ver perfil no Instagram
              <span className="visually-hidden">(abre em nova aba)</span>
            </ButtonLink>
          </aside>
        </Reveal>
      </div>
    </Section>
  )
}
