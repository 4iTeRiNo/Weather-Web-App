import styles from './WeatherMetrics.module.css';
// import cn from 'classnames'

interface WeatherMetricsProps {
  title: string | number;
  subtitle: string;
  weather: string;
}

export const WeatherMetrics = ({title, subtitle, weather}: WeatherMetricsProps) => (
  <div className={styles.weatherMetrics}>
    <div className={styles.temperature}>
      <span className={styles.day}>{title}</span>
      <span className={styles.night}>{subtitle}</span>
    </div>
    <p className={styles.weather}>{weather}</p>
  </div>
);
