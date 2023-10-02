import { SunnyIcon } from '../SGVIcons';
import styles from './RadiationUvi.module.css';

// interface RadiationUviProps { }

export const RadiationUVI = () => (
  <div className={styles.radiationUvi}>
        <div className={styles.svg}>
          <SunnyIcon />
        </div>
       <div className={styles.wrapper}>
        <span className={styles.air}>
          <span className={styles.value}>20 UVI</span>
          <span className={styles.risk}>Moderate</span>
        </span>
        <span className={styles.description}>
          <span>Moderate risk of from UV rays</span>
        </span>
      </div>
  </div>
);
