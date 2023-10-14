import styles from './Footer.module.css';

import {Button} from '../Button';
import {GraphSun} from '../GraphSun';
import {WeatherPrediction} from '../WeatherPrediction';
import {RadiationUVI} from '../RadiationUVI';
import {useAppSelector} from '../../hooks';

// interface FooterProps { }

export const Footer = () => {
  const [currentWeather] = useAppSelector((state) => state.defaultCities.list);
  const {location, current} = currentWeather;

  return (
    <footer className={styles.footer}>
      <div className={styles.currentPoint}>
        <div className={styles.city}>
          <span className={styles.weather}>{current.condition.text}</span>
          <span className={styles.currentCity}>{location.region }</span>
        </div>
        <span className={styles.temp}>{current.temp_c}&#176;C</span>
      </div>
      <GraphSun />
      <RadiationUVI />
      <WeatherPrediction />
      <Button />
    </footer>
  );
};
