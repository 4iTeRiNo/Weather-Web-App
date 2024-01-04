import {useAppSelector} from '../../../hooks';
import styles from './GraphSun.module.css';
import {SunRiseIcon, SunSetIcon} from '../../SGVIcons';

export const GraphSun = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  const widthIcon = 32;

  return (
    <>
      {weatherValue.map((value, index) => {
        const [first] = value.forecast.forecastday;

        return (
          <div
            key={index}
            className={styles.graphSun}
          >
            <div className={styles.forecastDay}>
              <div className={styles.icon}>
                <SunRiseIcon width={`${widthIcon}px`} />
                <SunSetIcon width={`${widthIcon}px`} />
              </div>
            </div>
            <div className={styles.sunInfo}>
              <span className={styles.sunrise}>
                <span>Sunrise</span>
                <span>{first.astro.sunrise}</span>
              </span>
              <span className={styles.sunset}>
                <span>Sunset</span>
                <span>{first.astro.sunset}</span>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
