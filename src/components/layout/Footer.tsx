import eaUfgLogo from '@/assets/images/ea-ufg.png'
import logoFull from '@/assets/images/labfood-logo-full-branco.png'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/ui'
import { author, navItems, site } from '@/config/site'

import styles from './Footer.module.css'

/** Rodapé com as marcas institucionais, navegação completa e contato. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logos}>
              <a href="#home" className={styles.logoLink}>
                <img src={logoFull} alt={`${site.name}, voltar ao início`} className={styles.logoLabfood} width="165" height="44" />
              </a>
              <span className={styles.logoDivider} aria-hidden="true" />
              <img src={eaUfgLogo} alt="Escola de Agronomia da UFG" className={styles.logoUfg} width="120" height="48" />
            </div>
            <p className={styles.description}>
              {site.fullName} da {site.institution}, vinculado à {site.school}.
            </p>
          </div>

          <nav className={styles.column} aria-label="Navegação do rodapé">
            <h2 className={styles.columnTitle}>Navegação</h2>
            <ul className={styles.columnList}>
              <li>
                <a href="#home" className={styles.columnLink}>
                  Início
                </a>
              </li>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.columnLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Contato</h2>
            <ul className={styles.columnList}>
              <li>
                <a href={`mailto:${site.email}`} className={styles.columnLink}>
                  {site.email}
                </a>
              </li>
              <li>{site.institution}</li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name} | UFG. Todos os direitos reservados.
          </p>
          <p className={styles.tagline}>{site.tagline}</p>
        </div>
      </div>

      <div className={styles.credits}>
        <ul className={styles.socialList} aria-label={`Redes sociais de ${author.name}`}>
          <li>
            <a href={author.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <GithubIcon className={styles.socialIcon} />
              <span className="visually-hidden">GitHub de {author.name} (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <LinkedinIcon className={styles.socialIcon} />
              <span className="visually-hidden">LinkedIn de {author.name} (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a href={author.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <InstagramIcon className={styles.socialIcon} />
              <span className="visually-hidden">Instagram de {author.name} (abre em nova aba)</span>
            </a>
          </li>
        </ul>
        <p className={styles.creditsText}>Desenvolvido por {author.name}</p>
      </div>
    </footer>
  )
}
