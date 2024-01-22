import styles from './WeatherValueBoard.module.css';
import {GraphLine} from './GraphLine/GraphLine';
import {WeatherDataDay} from './WeatherDataDay';
import {timeOfDay} from '../../constant';
import {useAppSelector} from '../../hooks';
import {Button} from './Button/Button';
import {useState} from 'react';

export const WeatherValueBoard = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  const [isIndex, setIsIndex] = useState<'temp_c' | 'wind_kph' | 'pressure_mb'>('temp_c');
  const time = timeOfDay.values();
  const getStringWeather = (value: string) => {
    return value === 'temp_c' ? 'temperature' : value === 'wind_kph' ? 'wind' : 'pressure';
  };
  const valueWeather = getStringWeather(isIndex);

  const tempData = weatherValue
    .map((item) => {
      return item.forecast.forecastday[0].hour.filter((_, index) => {
        return [8, 12, 17, 21].some((hour) => index === hour);
      });
    })
    .map((dataItem) =>
      dataItem.map((value, index) => {
        return (
          <WeatherDataDay
            value={value[isIndex]}
            key={index}
            index={index}
            text={value.condition.text}
            icon={value.condition.icon}
            timeOfDay={time.next().value}
          />
        );
      }),
    );

  return (
    <div className={styles.weatherValueBoard}>
      <div className={styles.header}>
        <h2>How's the {valueWeather} today?</h2>
        <Button isIndex={setIsIndex} />
      </div>
      <div className={styles.lineChart}>
        <GraphLine />
        <div className={styles.wrapperTick}>{tempData}</div>
      </div>
    </div>
  );
};
