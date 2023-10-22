import {useAppSelector} from '../../../hooks';
import {UKIndex} from '../../../types';

import styles from './RadiationUvi.module.css';

export const RadiationUVI: React.FC = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  const width = 50;
  const height = 50;

  return (
    <>
      {weatherValue.map((value, index) => {
        const UVIndex = value.current.uv;
        const key = UVIndex <= 3 ? 1 : UVIndex <= 6 ? 4 : UVIndex <= 9 ? 7 : UVIndex;

        return (
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
                <span className={styles.risk}>{UKIndex[key]}</span>
              </span>
              <span className={styles.description}>
                <span>{UKIndex[key]} risk of from UV rays</span>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
