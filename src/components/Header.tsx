import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Header.module.css'

export function Header () {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

  return (
    <header className={styles.container}>
      <div className={styles.experienceBar}>
        <span>0 xp</span>
        <div>
          <div style={{ width: `${percentToNextLevel}%` }} />

          <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
            {currentExperience} xp
          </span>
        </div>
        <span>{experienceToNextLevel} xp</span>
      </div>
    </header>
  )
}
