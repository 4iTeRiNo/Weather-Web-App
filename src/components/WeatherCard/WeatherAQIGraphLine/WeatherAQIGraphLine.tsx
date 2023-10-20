import styles from './WeatherAqiGraphLine.module.css';
import cn from 'classnames';

interface WeatherAqiGraphLineProps {}

export const WeatherAqiGraphLine = ({}: WeatherAqiGraphLineProps) => {
  return (
    <div className={styles.weatherAqiGraphLine}>
      <div className={styles.degree}>
        <div className={cn(styles.good, styles.active)}>Good</div>
        <div className={styles.standard}>Standard</div>
        <div className={styles.hazardous}>Hazardous</div>
      </div>
      <span className={styles.lineGradient}></span>
    </div>
  );
};
