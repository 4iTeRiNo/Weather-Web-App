import {CSSProperties} from 'react';
import styles from './WeatherAqiGraphLine.module.css';
import cn from 'classnames';

interface WeatherAqiGraphLineProps {
  good?: string;
  standard?: string;
  hazardous?: string;
  style?: CSSProperties;
  value: string;
}

export const WeatherAqiGraphLine = ({
  good = 'Good',
  standard = 'Standard',
  hazardous = 'Hazardous',
}: WeatherAqiGraphLineProps) => {
  return (
    <>
      <div className={styles.weatherAqiGraphLine}>
        <div className={styles.degree}>
          <div className={cn(styles.active)}>{good}</div>
          <div className={cn(styles.active)}>{standard}</div>
          <div className={cn(styles.active)}>{hazardous}</div>
        </div>
        <span className={styles.lineGradient}></span>
      </div>
    </>
  );
};
