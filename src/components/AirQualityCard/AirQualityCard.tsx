import styles from './AirQualityCard.module.css';
import { WindyIcon } from '../SGVIcons';
import cn from 'classnames'

// interface AirQualityCardProps { }

export const AirQualityCard = () => {
  return (
    <div className={styles.airQualityCard}>
      <div className={styles.header}>
        <div className={styles.svg}>
          <WindyIcon />
        </div>
        <div className={styles.city}>
          <p>Weather</p>
          <p>what's the weather</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.valueAir}>
          <span className={styles.value}>390</span>
          <span className={styles.aqi}>AQI</span>
        </div>
        <p className={styles.direction}>West wind</p>
      </div>
      <div className={styles.infoMore}>
        <div className={styles.degree}>
          <div className={cn(styles.good, styles.active)}>Good</div>
          <div className={styles.standard}>Standard</div>
          <div className={styles.hazardous}>Hazardous</div>
        </div>
        <span className={styles.lineGradient}></span>
      </div>
    </div>
  )
};
