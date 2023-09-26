import styles from './Navigation.module.css';

import { StatisticIcon, StatsIcon, CalendarIcon, PointIcon, SettingsIcon, LogInOutIcon  } from '../SGVIcons';

// interface NavigationProps { }

export const Navigation = () => {
  return (

    <aside className={styles.navigation}>
      <nav className="navigate">
        <ul className="linkItems">
          <li className={styles.linkItem}>
            <StatisticIcon className={styles.svgColor}/>
          </li>
          <li className={styles.linkItem}>
            <StatsIcon className={styles.svgColor}/>
          </li>
          <li className={styles.linkItem}>
            <CalendarIcon className={styles.svgColor} />
          </li>
          <li className={styles.linkItem}>
            <PointIcon className={styles.svgColor}/>
          </li>
          <li className={styles.linkItem}>
            <SettingsIcon className={styles.svgColor}/>
          </li>
        </ul>

        <ul className="linkItems">
          <li className={styles.linkItem}>
            <LogInOutIcon className={styles.svgColor}/>
          </li>
        </ul>
      </nav>
    </aside>
  )
};