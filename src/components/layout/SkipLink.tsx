import styles from './SkipLink.module.css'

/** Atalho de teclado que permite pular o menu e ir direto ao conteúdo. */
export function SkipLink() {
  return (
    <a href="#conteudo" className={styles.skipLink}>
      Pular para o conteúdo
    </a>
  )
}
