import styles from './Predict.module.css';

export interface PredictProps {
  imagePath?: string;
  day?: string;
  weather?: string;
  tempDay?: string;
  tempNight?: string;
}

export const Predict = ({imagePath, day, weather, tempDay, tempNight}: PredictProps) => {
  const width = 50;
  const height = 50;

  return (
    <div className={styles.wrapper}>
      <div className={styles.svg}>
        <img
          src={imagePath}
          width={`${width}px`}
          height={`${height}px`}
        />
      </div>
      <span className={styles.weather}>
        <span>{day}</span>
        <span>{weather}</span>
      </span>
      <span className={styles.temperature}>
        <span>
          {tempDay}&#176;C / {tempNight}&#176;C
        </span>
      </span>
    </div>
  );
};
