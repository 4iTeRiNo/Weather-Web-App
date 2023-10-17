import styles from './Footer.module.css';

import {Button} from '../Button';
import {GraphSun} from '../GraphSun';
import {RadiationUVI} from '../RadiationUVI';
import {WeatherPrediction} from '../WeatherPrediction';
import {useAppSelector} from '../../hooks';

// interface FooterProps { }

export const Footer = () => {
  const weatherValue = useAppSelector((state) => state?.defaultCities.list);

  const weatherCity = weatherValue.map((value, index) => {
    return (
      <div key={index} className={styles.currentPoint}>
        <div className={styles.city}>
          <span className={styles.weather}>{value.current.condition.text}</span>
          <span className={styles.weather}>{value.location.tz_id}</span>
        </div>
        <span className={styles.temp}>{value.current.temp_c}&#176;C</span>
      </div>
    );
  });

  return (
    <footer className={styles.footer}>
      {weatherCity}
      <GraphSun />
      <RadiationUVI />
      <WeatherPrediction />
      <Button />
    </footer>
  );
};
