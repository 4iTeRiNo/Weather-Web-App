import {useAppSelector} from '../../../hooks';
import {UKIndex} from '../../../types';
import {getValueByIndex} from '../../../utils/getValueByIndex';

import styles from './RadiationUvi.module.css';

export const RadiationUVI: React.FC = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  const width = 50;
  const height = 50;

  return (
    <>
      {weatherValue.map((value, index) => (
        <div
          key={index}
          className={styles.radiationUvi}
        >
          <div className={styles.svg}>
            <img
              src={value.current.condition.icon}
              width={`${width}px`}
              height={`${height}px`}
            />
          </div>
          <div className={styles.wrapper}>
            <span className={styles.air}>
              <span className={styles.value}>{value.current.uv} UVI</span>
              <span className={styles.risk}>{getValueByIndex(UKIndex, value.current.uv)}</span>
            </span>
            <span className={styles.description}>
              {/* Не могу придумать как сюда подставить значение из функции не вызывая ее тут в лоб */}
              <span>{getValueByIndex(UKIndex, value.current.uv)} risk of from UV rays</span>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
