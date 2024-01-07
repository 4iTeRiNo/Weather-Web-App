import styles from './WeatherValueBoard.module.css';
import {GraphLine} from './GraphLine';
import {WeatherDataDay} from './WeatherDataDay';
import {timeOfDay} from '../../constant';
import {useAppSelector} from '../../hooks';

export const WeatherValueBoard = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);

  return (
    <div className={styles.weatherValueBoard}>
      <div className={styles.header}>
        <h2>How's the temperature today?</h2>
        <div></div>
      </div>
      <div className={styles.lineChart}>
        <GraphLine />
        <WeatherDataDay
          data={weatherValue}
          timeOfDay={timeOfDay}
        />
      </div>
    </div>
  );
};
