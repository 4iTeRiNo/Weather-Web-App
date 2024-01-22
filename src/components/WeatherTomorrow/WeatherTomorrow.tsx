import classnames from 'classnames';
import {useAppSelector} from '../../hooks';
import {getTemplateString} from '../../utils/getTemplateString';
import styles from './WeatherTomorrow.module.css';
import {getImage} from '../../utils/getImage';
import {codeBackground} from '../../types/codeIcon';

export const WeatherTomorrow = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);

  return weatherValue.map((i, index) => {
    const value = i.current;
    const name = i.location.name;
    const code = i.current.condition.code;
    const background = getImage(code, codeBackground);
    return (
      <div
        key={index}
        className={styles.weatherTomorrow}
        style={{background: `url(${background})`, backgroundSize: 'cover'}}
      >
        <div className={classnames(styles.header)}>
          <div className={styles.city}>
            <p>Tomorrow</p>
            <p>{name}</p>
          </div>
        </div>
        <div className={styles.temperature}>
          <span className={styles.day}>{getTemplateString(value.temp_c)}</span>
          <span className={styles.weather}>{value.condition.text}</span>
        </div>
      </div>
    );
  });
};
