// import {CSSProperties} from 'react';
import styles from './WeatherInfoOther.module.css';
import cn from 'classnames';

interface WeatherInfoOtherProps {
  pressure: {
    title: string;
    value: number;
    // style: CSSProperties;
  };
  visibility: {
    title: string;
    value: number;
    // style: CSSProperties;
  };
  humidity: {
    title: string;
    value: number;
    // style: CSSProperties;
  };
}

export const WeatherInfoOther = (props: WeatherInfoOtherProps) => {
  return (
    <div className={styles.weatherInfoOther}>
      <div className={cn(styles.tile, styles.blue)}>
        <p className={styles.nameProp}>{props.pressure.title}</p>
        <p className={styles.valueProp}>{props.pressure.value}md</p>
      </div>
      <div className={cn(styles.tile, styles.green)}>
        <p className={styles.nameProp}>{props.visibility.title}</p>
        <p className={styles.valueProp}>{props.visibility.value}km</p>
      </div>
      <div className={cn(styles.tile, styles.white)}>
        <p className={styles.nameProp}>{props.humidity.title}</p>
        <p className={styles.valueProp}>{props.humidity.value}%</p>
      </div>
    </div>
  );
};
