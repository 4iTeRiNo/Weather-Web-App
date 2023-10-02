import {AirQualityCard} from '../AirQualityCard';
import {WeatherCard} from '../WeatherCard';
import {WeatherTomorrow} from '../WeatherTomorrow';
import {WeatherValueBoard} from '../WeatherValueBoard';
import styles from './Main.module.css';

export const Main = () => (
  <main className={styles.main}>
    <WeatherCard />
    <AirQualityCard />
    <WeatherValueBoard />
    <WeatherTomorrow />
    <WeatherCard />
    <AirQualityCard />
  </main>
);
