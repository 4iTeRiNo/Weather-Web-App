import styles from './WeatherValueBoard.module.css';
import cn from 'classnames';

interface WeatherDataDayProps {
  icon: string;
  value: string | number;
  text: string;
  timeOfDay: string[];
  index: number;
}

export const WeatherDataDay = ({icon, text, value, timeOfDay, index}: WeatherDataDayProps) => {
  return (
    <div className={styles.tick}>
      <span
        className={cn(styles.point, {
          [styles.pointMorning]: index === 0,
          [styles.pointAfternoon]: index === 1,
          [styles.pointEvening]: index === 2,
          [styles.pointNight]: index === 3,
        })}
      >
        <img
          src={icon}
          alt={text}
          className={styles.overlay}
        />
      </span>
      <span className={styles.value}>{value}</span>
      <span className={styles.name}>{timeOfDay}</span>
    </div>
  );
};
