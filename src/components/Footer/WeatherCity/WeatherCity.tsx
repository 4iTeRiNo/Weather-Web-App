import {useAppSelector} from '../../../hooks';
import {getTemplateString} from '../../../utils/getTemplateString';
import styles from './WeatherCity.module.css';

export const WeatherCity: React.FC = () => {
  const weatherValue = useAppSelector((state) => state?.defaultCities.list);

  return weatherValue.map((value, index) => {
    return (
      <div
        key={index}
        className={styles.currentPoint}
      >
        <div className={styles.city}>
          <span className={styles.weather}>{value.current.condition.text}</span>
          <span className={styles.weather}>{value.location.tz_id}</span>
        </div>
        <span className={styles.temp}>{getTemplateString(value.current.temp_c)}</span>
      </div>
    );
  });
};
