import styles from './WeatherTomorrow.module.css';

// interface WeatherTomorrowProps { }

export const WeatherTomorrow = () => {
  return (
  <div className={styles.weatherTomorrow}>
    <div className={styles.header}>
      <div className={styles.city}>
        <p>Tomorrow</p>
        <p>Kaliningrad</p>
      </div>
    </div>
    <div className={styles.temperature}>
      <span className={styles.day}>22&#176;С</span>
      <span className={styles.weather}>Rainy</span>
    </div>
  </div>
)};
