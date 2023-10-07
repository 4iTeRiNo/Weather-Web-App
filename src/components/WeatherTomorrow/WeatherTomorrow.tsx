import styles from './WeatherTomorrow.module.css';

// interface WeatherTomorrowProps { }

export const WeatherTomorrow = () => {
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
    wind_dir: 'W',
    air_quality: 257.0,
  };
  return (
  <div className={styles.weatherTomorrow}>
    <div className={styles.header}>
      <div className={styles.city}>
        <p>Tomorrow</p>
        <p>{location.name}</p>
      </div>
    </div>
    <div className={styles.temperature}>
      <span className={styles.day}>{location.temp_day}&#176;С</span>
      <span className={styles.weather}>{location.weather}</span>
    </div>
  </div>
)};
