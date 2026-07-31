import { ChevronDown } from 'lucide-react'

import logoFull from '@/assets/images/labfood-logo-full-branco.png'
import { ButtonLink, Reveal } from '@/components/ui'
import { site } from '@/config/site'
import { cx } from '@/lib/cx'

import styles from './Hero.module.css'

/** Tela de abertura: apresentação, ações principais e indicadores. */
export function Hero() {
  return (
    <section id="home" aria-labelledby="home-titulo" className={styles.hero}>
      <div className={cx('container', styles.content)}>
        <Reveal>
          <img
            src={logoFull}
            alt={`${site.name}, ${site.fullName}`}
            className={styles.logo}
            width="977"
            height="462"
          />
        </Reveal>

        <Reveal delay={80}>
          <h1 id="home-titulo" className={styles.title}>
            Qualidade e inovação em <span className={styles.titleAccent}>análise de alimentos</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className={styles.subtitle}>
            O {site.name} é o laboratório da UFG dedicado a análises físico-químicas e microbiológicas, a serviço da
            comunidade acadêmica, da pesquisa e da indústria de alimentos.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className={styles.actions}>
            <ButtonLink href="#sobre">Conheça o laboratório</ButtonLink>
            <ButtonLink href="#contato" variant="outlineOnDark">
              Solicitar orçamento
            </ButtonLink>
          </div>
        </Reveal>

      </div>

      <a href="#sobre" className={styles.scrollCue} aria-label="Ir para a seção Sobre">
        <ChevronDown aria-hidden="true" />
      </a>
    </section>
  )
}
