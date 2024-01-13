import styles from './WeatherValueBoard.module.css';
import {GraphLine} from './GraphLine';
import {WeatherDataDay} from './WeatherDataDay';
import {timeOfDay} from '../../constant';
import {useAppSelector} from '../../hooks';
import {Button} from './Button';
import {useState} from 'react';

export const WeatherValueBoard = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  const [isIndex, setIsIndex] = useState('0');
  console.log(isIndex);
  const time = timeOfDay.values();

  const tempData = weatherValue
    .map((item) => {
      return item.forecast.forecastday[0].hour.filter((item, index) => {
        if (index === 8) return item;
        if (index === 12) return item;
        if (index === 17) return item;
        if (index === 21) return item;
      });
    })
    .map((dataItem) =>
      dataItem.map((value, index) => {
        return (
          <WeatherDataDay
            value={value.temp_c}
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
        <h2>How's the temperature today?</h2>
        <Button isIndex={setIsIndex} />
      </div>
      <div className={styles.lineChart}>
        <GraphLine />
        <div className={styles.wrapperTick}>{tempData}</div>
      </div>
    </div>
  );
};
