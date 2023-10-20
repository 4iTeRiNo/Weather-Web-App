import styles from './Footer.module.css';

import {GraphSun} from './GraphSun';
import {RadiationUVI} from './RadiationUVI';
import {WeatherPrediction} from './WeatherPrediction';
import {WeatherCity} from './WeatherCity';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <WeatherCity />
      <GraphSun />
      <RadiationUVI />
      <WeatherPrediction head='Weather Prediction'/>
    </footer>
  );
};
