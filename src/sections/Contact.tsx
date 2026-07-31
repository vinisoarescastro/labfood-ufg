import { Clock, Mail, MapPin } from 'lucide-react'

import { ButtonLink, Reveal, Section, SectionIntro } from '@/components/ui'
import { site } from '@/config/site'
import { contactLocation } from '@/content/contact'

import styles from './Contact.module.css'

/** Localização e canais oficiais, direto ao ponto. */
export function Contact() {
  return (
    <Section id="contato" variant="tinted">
      <SectionIntro
        titleId="contato-titulo"
        eyebrow="Fale conosco"
        title="Entre em contato"
        description="Solicite uma análise, tire dúvidas ou proponha uma parceria com o laboratório."
      />

      <div className={styles.layout}>
        <Reveal className={styles.mapCard}>
          <iframe
            src={contactLocation.mapsEmbedUrl}
            title="Mapa com a localização do LabFood na Escola de Agronomia da UFG"
            className={styles.map}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Reveal delay={100} className={styles.infoReveal}>
          <div className={styles.info}>
            <a
              href={contactLocation.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.row}
            >
              <MapPin className={styles.rowIcon} aria-hidden="true" />
              <span className={styles.rowBody}>
                <span className={styles.rowLabel}>Endereço:</span>
                <span>
                  {contactLocation.address}
                  <span className="visually-hidden">(abre o Google Maps em nova aba)</span>
                </span>
              </span>
            </a>

            <p className={styles.row}>
              <Clock className={styles.rowIcon} aria-hidden="true" />
              <span className={styles.rowBody}>
                <span className={styles.rowLabel}>Horário:</span>
                <span>{site.officeHours}</span>
              </span>
            </p>

            <a href={`mailto:${site.email}`} className={styles.row}>
              <Mail className={styles.rowIcon} aria-hidden="true" />
              <span className={styles.rowBody}>
                <span className={styles.rowLabel}>E-mail:</span>
                <span>{site.email}</span>
              </span>
            </a>

            <ButtonLink href={`mailto:${site.email}`} className={styles.cta}>
              Enviar e-mail
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
