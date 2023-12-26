import classNames from 'classnames';
import {indexAQI} from '../../../types/';
import styles from './WeatherAQIGraphLine.module.css';

const cx = classNames.bind(styles);

interface WeatherAQIGraphLineProps {
  value: string;
}

export const WeatherAQIGraphLine = ({value}: WeatherAQIGraphLineProps) => {
  const widthIndex = indexAQI.indexOf(value) + 1;

  const currentValueIndex = indexAQI.map((item, index) => {
    const active = cx({
      [styles.active]: item === value,
    });
    return (
      <div
        key={index}
        className={active}
      >
        {item}
      </div>
    );
  });

  return (
    <div className={styles.weatherAqiGraphLine}>
      <div className={styles.degree}>{currentValueIndex}</div>
      <span
        className={styles.lineGradient}
        style={{width: `${widthIndex * 32}%`}}
      ></span>
    </div>
  );
};
