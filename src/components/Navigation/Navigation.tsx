import styles from './Navigation.module.css';

import Statistic from '../../assets/svg/navigate/statistic.svg?react';
import Stats from '../../assets/svg/navigate/stats-chart-outline.svg?react';
import Point from '../../assets/svg/navigate/point.svg?react';
import Calendar from '../../assets/svg/navigate/calendar-outline.svg?react';
import Settings from '../../assets/svg/navigate/settings.svg?react';
import LogInOut from '../../assets/svg/navigate/gg_log-off.svg?react';


// interface NavigationProps { }

export const Navigation = () => {
  return (

    <div className={styles.navigation}>
      <nav className="navigate">
        <ul className="linkItems">
          <li className={styles.linkItem}>
            <Statistic className={styles.svgColor}/>
          </li>
          <li className={styles.linkItem}>
            <Stats className={styles.svgColor}/>
          </li>
          <li className={styles.linkItem}>
            <Calendar className={styles.svgColor} />
          </li>
          <li className={styles.linkItem}>
            <Point className={styles.svgColor}/>
          </li>
          <li className={styles.linkItem}>
            <Settings className={styles.svgColor}/>
          </li>
        </ul>

        <ul className="linkItems">
          <li className={styles.linkItem}>
            <LogInOut className={styles.svgColor}/>
          </li>
        </ul>
      </nav>
    </div>
  )
};
