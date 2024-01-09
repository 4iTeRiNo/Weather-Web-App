import {TCity} from '../../types';
import styles from './WeatherValueBoard.module.css';
import cn from 'classnames';

interface WeatherDataDayProps {
  data: TCity[];
  timeOfDay: string[];
}

export const WeatherDataDay = ({data, timeOfDay}: WeatherDataDayProps) => {
  const tempData = data.map((item) => {
    return item.forecast.forecastday[0].hour.filter((item, index) => {
      if (index === 8) return item;
      if (index === 12) return item;
      if (index === 17) return item;
      if (index === 21) return item;
    });
  });
  const time = timeOfDay.values();

  return tempData?.map((value, index) => (
    <div
      key={index}
      className={styles.wrapperTick}
    >
      {value.map((item, index) => {
        const temperature = item.pressure_mb;

        return (
          <div
            key={index}
            className={styles.tick}
          >
            <span
              className={cn(styles.point, {
                [styles.pointMorning]: index === 0,
                [styles.pointAfternoon]: index === 1,
                [styles.pointEvening]: index === 2,
                [styles.pointNight]: index === 3,
              })}
            >
              <img
                src={item?.condition.icon}
                alt={item?.condition.text}
                className={styles.overlay}
              />
            </span>
            <span className={styles.value}>{temperature + ' mb'}</span>
            <span className={styles.name}>{time.next().value}</span>
          </div>
        );
      })}
    </div>
  ));
};

//
