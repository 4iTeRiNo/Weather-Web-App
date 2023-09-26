import styles from './Navigation.module.css';

import Statistic from '../../assets/svg/navigate/statistic.svg';
import Stats from '../../assets/svg/navigate/stats-chart-outline.svg';
import Point from '../../assets/svg/navigate/point.svg';
import Calendar from '../../assets/svg/navigate/calendar-outline.svg';
import Settings from '../../assets/svg/sunrise.svg';
import LogInOut from '../../assets/svg/sunrise.svg';


// interface NavigationProps { }

export const Navigation = () => {
  return(

  
  <div className={styles.navigation}>
    <nav className="navigate">
      <ul className="linkItems">
        <li className="linkItem">
          <Statistic />
        </li>
        <li className="linkItem">
          <Stats />
        </li>
        <li className="linkItem">
          <Calendar />
        </li>
        <li className="linkItem">
          <Point />
        </li>
        <li className="linkItem">
          <Settings />
        </li>
      </ul>

      <ul className="linkItems">
        <li className="linkItem">
          <LogInOut />
        </li>
      </ul>
    </nav>
  </div>
  )
  };
