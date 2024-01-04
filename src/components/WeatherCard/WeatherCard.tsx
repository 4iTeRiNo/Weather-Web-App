import styles from './WeatherCard.module.css';
interface WeatherCardProps {
  children: React.ReactNode;
}

export const WeatherCard = ({children}: WeatherCardProps) => {
  return <div className={styles.weatherCards}>{children}</div>;
};
