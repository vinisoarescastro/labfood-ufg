import { Check } from 'lucide-react'

import { ButtonLink, IconBadge, Reveal, Section, SectionIntro } from '@/components/ui'
import { site } from '@/config/site'
import { serviceGroups } from '@/content/services'
import { cx } from '@/lib/cx'

import styles from './Services.module.css'

/** Catálogo de análises, com destaque para o grupo avançado. */
export function Services() {
  return (
    <Section id="servicos">
      <SectionIntro
        titleId="servicos-titulo"
        eyebrow="O que oferecemos"
        title="Nossos serviços"
        description="Análises especializadas com rigor científico e infraestrutura universitária de alto padrão."
      />

      <ul className={styles.grid}>
        {serviceGroups.map((group, index) => (
          <li key={group.id}>
            <Reveal delay={index * 100} className={cx(styles.card, group.featured && styles.featured)}>
              <IconBadge icon={group.icon} tone={group.featured ? 'onDark' : 'brand'} />
              <h3 className={styles.title}>{group.title}</h3>
              <p className={styles.description}>{group.description}</p>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <Check className={styles.itemIcon} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              {group.cta && (
                <ButtonLink href={`#${group.cta.targetId}`} variant="outline" size="sm" className={styles.cta}>
                  {group.cta.label}
                </ButtonLink>
              )}
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={200}>
        <p className={styles.note}>
          Não encontrou a análise que precisa? Nem toda a capacidade do laboratório está listada aqui. Escreva para{' '}
          <a href={`mailto:${site.email}`} className={styles.noteLink}>
            {site.email}
          </a>{' '}
          e consulte a disponibilidade.
        </p>
      </Reveal>
    </Section>
  )
}
