import {useAppSelector} from '../../../hooks';
import {UKIndex} from '../../../types';

import styles from './RadiationUVI.module.css';

export const RadiationUVI: React.FC = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  const width = 50;
  const height = 50;

  return (
    <>
      {weatherValue.map((value, index) => {
        const UVIndex = value.current.uv;
        function getKey(UVIndex: number) {
          if (UVIndex <= 3) {
            return 1;
          }
          if (UVIndex <= 6) {
            return 4;
          }
          return UVIndex <= 9 ? 7 : UVIndex;
        }

        return (
          <div
            key={index}
            className={styles.radiationUvi}
          >
            <div className={styles.svg}>
              <img
                alt={value.current.condition.text}
                src={value.current.condition.icon}
                width={`${width}px`}
                height={`${height}px`}
              />
            </div>
            <div className={styles.wrapper}>
              <span className={styles.air}>
                <span className={styles.value}>{value.current.uv} UVI</span>
                <span className={styles.risk}>{UKIndex[getKey(UVIndex)]}</span>
              </span>
              <span className={styles.description}>
                <span>{UKIndex[getKey(UVIndex)]} risk of from UV rays</span>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
