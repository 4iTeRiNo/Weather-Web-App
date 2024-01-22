import styles from './Navigation.module.css';

import {Avatar} from '../Avatar';

export const Navigation = () => {
  return (
    <aside className={styles.navigation}>
      <nav className={styles.navigate}>
        <ul className={styles.linkItems}>
          <li>
            <Avatar />
          </li>
        </ul>
        {/* <ul className={styles.linkItems}>
          <li className={styles.linkItem}>
            <StatisticIcon className={styles.svgColor} />
          </li>
          <li className={styles.linkItem}>
            <StatsIcon className={styles.svgColor} />
          </li>
          <li className={styles.linkItem}>
            <CalendarIcon className={styles.svgColor} />
          </li>
          <li className={styles.linkItem}>
            <PointIcon className={styles.svgColor} />
          </li>
          <li className={styles.linkItem}>
            <SettingsIcon className={styles.svgColor} />
          </li>
        </ul> */}

        {/* <ul className={styles.linkItems}>
          <li className={styles.linkItem}>
            <LogInOutIcon className={styles.svgColor} />
          </li>
        </ul> */}
      </nav>
    </aside>
  );
};
