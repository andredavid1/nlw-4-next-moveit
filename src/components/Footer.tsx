import styles from '../styles/components/Footer.module.css';

export function Footer () {
  return (
    <footer className={styles.container}>
      <span>
        Desenvolvido por <a href="https://github.com/andredavid1" target="_blank">André David</a> durante a <strong>#nextLevelWeek4</strong> da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>
      </span>
    </footer>
  )
}
