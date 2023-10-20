import styles from './WeatherInfoOther.module.css';
import cn from 'classnames';

interface WeatherInfoOtherProps {
  titleP: string;
  pressure: number;
  titleV: string;
  visibility: number;
  titleH: string;
  humidity: number
}

export const WeatherInfoOther = (props: WeatherInfoOtherProps) => {
  return (
    <div className={styles.weatherInfoOther}>
      <div className={cn(styles.tile, styles.blue)}>
        <p className={styles.nameProp}>{props.titleP}</p>
        <p className={styles.valueProp}>{props.pressure}md</p>
      </div>
      <div className={cn(styles.tile, styles.green)}>
        <p className={styles.nameProp}>{props.titleV}</p>
        <p className={styles.valueProp}>{props.visibility}km</p>
      </div>
      <div className={cn(styles.tile, styles.white)}>
        <p className={styles.nameProp}>{props.titleH}</p>
        <p className={styles.valueProp}>{props.humidity}%</p>
      </div>
    </div>
  );
};
