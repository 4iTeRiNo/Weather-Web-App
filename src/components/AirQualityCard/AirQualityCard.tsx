import styles from './AirQualityCard.module.css';
import { WindyIcon } from '../SGVIcons';
import cn from 'classnames'

// interface AirQualityCardProps { }

export const AirQualityCard = () => {
  const location = {
    name: 'Kaliningrad',
    region: 'Kaliningrad',
    country: 'Russia',
    weather: 'Partly cloudy',
    temp_day: 14.0,
    temp_night: 13.1,
    uv: 3.0,
    humidity: 82,
    cloud: 37,
    pressure: 1015.0,
    visibility: 10.0,
    wind_dir: 'West',
    air_quality: 257.0,
  };
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
          <span className={styles.value}>{location.air_quality}</span>
          <span className={styles.aqi}>AQI</span>
        </div>
        <p className={styles.direction}>{location.wind_dir}</p>
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
