import {SunnyIcon} from '../SGVIcons';

import styles from './RadiationUvi.module.css';

// interface RadiationUviProps { }

export const RadiationUVI = () => {
  const location = {
    name: 'Kaliningrad',
    region: 'Kaliningrad',
    country: 'Russia',
    weather: 'Partly cloudy',
    temp_day: 14.0,
    temp_night: 13.1,
    uv: 3.0,
    humidity: 82,
    cloud: 37,
    pressure: 1015.0,
    visibility: 10.0,
    wind_dir: 'W',
    air_quality: 257.0,
  };
  return (
    <div className={styles.radiationUvi}>
      <div className={styles.svg}>
        <SunnyIcon
          width='50px'
          height='50px'
        />
      </div>
      <div className={styles.wrapper}>
        <span className={styles.air}>
          <span className={styles.value}>{location.uv} UVI</span>
          <span className={styles.risk}>Moderate</span>
        </span>
        <span className={styles.description}>
          <span>Moderate risk of from UV rays</span>
        </span>
      </div>
    </div>
  );
};
