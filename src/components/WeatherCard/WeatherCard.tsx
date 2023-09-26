import styles from './WeatherCard.module.css';
import cn from 'classnames'

import Icon from '../../assets/cloudy/cloudy.svg?react'

// interface WeatherCardProps { }

export const WeatherCard = () => {
  return (

    <div className={styles.weatherCard}>
      <div className={styles.header}>
        <div className={styles.svg}>
          <Icon />
        </div>
        <div className={styles.city}>
          <p>Weather</p>
          <p>what's the weather</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.temperature}>
          <span className={styles.day}>22&#176;С</span>
          <span className={styles.night}>11&#176;C</span>
        </div>
        <p className={styles.weather}>Sunny</p>
      </div>
      <div className={styles.infoMore}>
        <div className={cn(styles.tile, styles.blue)}>
          <p className={styles.nameprop}>Preesure</p>
          <p className={styles.valueprop}>800md</p>
        </div>
        <div className={cn(styles.tile, styles.green)}>
          <p className={styles.nameprop}>Visibility</p>
          <p className={styles.valueprop}>4.3km</p>
        </div>
        <div className={cn(styles.tile, styles.white)}>
          <p className={styles.nameprop}>Humidity</p>
          <p className={styles.valueprop}>87%</p>
        </div>
      </div>
    </div>
  )
};

