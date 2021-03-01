import { FiHome, FiList, FiTrendingUp } from 'react-icons/fi'

import styles from '../styles/components/Sidebar.module.css';

export function Sidebar () {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <a href="/">
            <FiHome />
          </a>
        </li>
        <li>
          <a href="/">
            <FiTrendingUp />            
          </a>
        </li>
        <li>
          <a href="/">
            <FiList />
          </a>
        </li>
      </ul>
    </div>
  )
}
