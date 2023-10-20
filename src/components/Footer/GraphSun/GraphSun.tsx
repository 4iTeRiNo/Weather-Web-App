import styles from './GraphSun.module.css';

// interface GraphSunProps { }

export const GraphSun = () => (
  <div className={styles.graphSun}>
    <div className={styles.forecastDay}>
    </div>
    <div className={styles.sunInfo}>
      <span className={styles.sunset}>
        <span>Sunset</span>
        <span>6:00 am</span>
        </span>
      <span className={styles.sunrise}>
        <span>Sunrise</span>
        <span>6:45 pm</span>
        </span>
    </div>
  </div>
);
