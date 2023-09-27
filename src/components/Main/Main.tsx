import { Navigation } from '../Navigation';
import { WeatherCard } from '../WeatherCard';
import styles from './Main.module.css';


export const Main = () => (
  <main className={styles.main}>
    <Navigation/>
    <WeatherCard/>
  </main>
);
