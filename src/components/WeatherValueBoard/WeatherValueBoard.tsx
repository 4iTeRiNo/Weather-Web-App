import styles from './WeatherValueBoard.module.css';
import {
  RainyIcon,
  SunnyIcon,
  SnowyIcon
} from '../SGVIcons'
import cn from 'classnames'

// interface WeatherValueBoardProps { }

export const WeatherValueBoard = () => {
  return (
    <div className={styles.weatherValueBoard}>
      <div className={styles.header}>
        <h2>How's the temperature today?</h2>
        <div>

        </div>
      </div>
      <div className={styles.lineChart}>
        <div className={styles.axis}>
          <div className={styles.tick}>
            <RainyIcon className={cn(styles.overlay, styles.active)}/>
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>MON</span>
            <span className={styles.dayNumber}>10</span>
          </div>
          <div className={styles.tick}>
            <SunnyIcon className={cn(styles.overlay)}/>
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>MON</span>
            <span className={styles.dayNumber}>11</span>
          </div>
          <div className={styles.tick}>
            <SnowyIcon className={cn(styles.overlay)}/>
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>MON</span>
            <span className={styles.dayNumber}>12</span>
          </div>
          {/* <div className={styles.tick}>
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>MON</span>
            <span className={styles.dayNumber}>13</span>
          </div>
          <div className={styles.tick}>
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>MON</span>
            <span className={styles.dayNumber}>13</span>
          </div>
          <div className={styles.tick}>
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>MON</span>
            <span className={styles.dayNumber}>14</span>
          </div>
          <div className={styles.tick}>
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>MON</span>
            <span className={styles.dayNumber}>15</span>
          </div> */}
        </div>
      </div>
    </div>
  )
};
