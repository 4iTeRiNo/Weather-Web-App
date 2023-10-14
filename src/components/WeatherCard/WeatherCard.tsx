import styles from './WeatherCard.module.css';
import cn from 'classnames';

import {CloudyIcon} from '../SGVIcons';
import {useAppSelector} from '../../hooks';

// interface WeatherCardProps { }

export const WeatherCard = () => {
  // ! обрати внимание 
  const { location } = useAppSelector((state) => state.cities.list);
 

  console.log(location);
  
  // const list = {
  //   name: 'Kaliningrad',
  //   region: 'Kaliningrad',
  //   country: 'Russia',
  //   weather: 'Partly cloudy',
  //   temp_day: 14.0,
  //   temp_night: 13.1,
  //   uv: 3.0,
  //   humidity: 82,
  //   cloud: 37,
  //   pressure: 1015.0,
  //   visibility: 10.0,
  //   wind_dir: 'W',
  //   air_quality: 257.0,
  // };

  return (
    <div className={styles.weatherCard}>
      <div className={styles.header}>
        <div className={styles.svg}>{<CloudyIcon />}</div>
        <div className={styles.city}>
          <p>
            Weather <br /> {}
          </p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.temperature}>
          <span className={styles.day}>{}&#176;С</span>
          <span className={styles.night}>{}&#176;C</span>
        </div>
        <p className={styles.weather}>{}</p>
      </div>
      <div className={styles.infoMore}>
        <div className={cn(styles.tile, styles.blue)}>
          <p className={styles.nameProp}>Preesure</p>
          <p className={styles.valueProp}>{}md</p>
        </div>
        <div className={cn(styles.tile, styles.green)}>
          <p className={styles.nameProp}>Visibility</p>
          <p className={styles.valueProp}>{}km</p>
        </div>
        <div className={cn(styles.tile, styles.white)}>
          <p className={styles.nameProp}>Humidity</p>
          <p className={styles.valueProp}>{}%</p>
        </div>
      </div>
    </div>
  );
};
