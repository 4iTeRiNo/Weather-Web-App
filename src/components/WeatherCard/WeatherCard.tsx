import styles from './WeatherCard.module.css';
// import cn from 'classnames';

interface WeatherCardProps {
  children: React.ReactNode;
}

export const WeatherCard = ({children}: WeatherCardProps) => {
  return <div className={styles.weatherCards}>{children}</div>;
};
