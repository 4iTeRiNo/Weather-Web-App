import {indexAQI} from '../../../types/';
import styles from './WeatherAQIGraphLine.module.css';

interface WeatherAQIGraphLineProps {
  value: string;
}

export const WeatherAQIGraphLine = ({value}: WeatherAQIGraphLineProps) => {
  const widthIndex = indexAQI.indexOf(value) + 1;

  return (
    <div className={styles.weatherAqiGraphLine}>
      <div className={styles.degree}>
        {indexAQI.map((item, index) => {
          if (item === value) {
            return (
              <div
                key={index}
                className={styles.active}
              >
                {item}
              </div>
            );
          }
          return <div key={index}>{item}</div>;
        })}
      </div>
      {/* {indexAQI.indexOf(item => { */}
      <span
        className={styles.lineGradient}
        style={{width: `${widthIndex * 30}%`}}
      ></span>

      {/* })} */}
    </div>
  );
};
