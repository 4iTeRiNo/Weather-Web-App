import styles from './WeatherPrediction.module.css';

// import {CloudyIcon, SunnyIcon} from '../SGVIcons';
import {Predict} from './Predict';
import {useAppSelector} from '../../../hooks';
import {options} from '../../../types';
interface WeatherPredictionProps {
  head: string;
}

export const WeatherPrediction = ({head}: WeatherPredictionProps) => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);

  return (
    <>
      <h2>{head}</h2>

      {weatherValue.map((value, index) => {
        const [, second, third] = value.forecast.forecastday;

        const tomorrowDay = new Intl.DateTimeFormat('en-US', options).format(new Date(second.date));

        const afterTomorrowDay = new Intl.DateTimeFormat('en-US', options).format(new Date(third.date));

        return (
          <div
            key={index}
            className={styles.weatherPrediction}
          >
            <Predict
              imagePath={second.day.condition.icon}
              weather={second.day.condition.text}
              tempDay={second.day.maxtemp_c}
              tempNight={second.day.mintemp_c}
              day={tomorrowDay}
            />
            <Predict
              imagePath={third.day.condition.icon}
              weather={third.day.condition.text}
              tempDay={third.day.maxtemp_c}
              tempNight={third.day.mintemp_c}
              day={afterTomorrowDay}
            />
          </div>
        );
      })}
    </>
  );
};
