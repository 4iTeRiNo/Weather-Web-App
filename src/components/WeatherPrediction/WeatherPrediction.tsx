import styles from './WeatherPrediction.module.css';

import {
  CloudyIcon,
  SunnyIcon
} from '../SGVIcons';

// interface WeatherPredictionProps { }

export const WeatherPrediction = () => {
  return (
    <div className={styles.weatherPrediction}>
      <h2>Weather Prediction </h2>
      <div className={styles.wrapper}>
        <div className={styles.svg}>
          <CloudyIcon />
        </div>
        <span className={styles.weather}>
          <span>November 10</span>
          <span>Cloudy</span>
        </span>
        <span className={styles.temperature}>
          <span >26&#176; / 19&#176;</span>
        </span>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.svg}>
          <SunnyIcon />
        </div>
        <span className={styles.weather}>
          <span>November 11</span>
          <span>Sunny</span>
        </span>
        <span className={styles.temperature}>
          <span >26&#176; / 20&#176;</span>
        </span>
      </div>
    </div>
  )
};
