import styles from './WeatherPrediction.module.css';

// import {CloudyIcon, SunnyIcon} from '../SGVIcons';
import {Predict} from './Predict';
import {useAppSelector} from '../../../hooks';
import {getValueByKey} from '../../../utils/getValueByIKey';
import {Month} from '../../../types';
interface WeatherPredictionProps {
  head: string;
}

export const WeatherPrediction = ({head}: WeatherPredictionProps) => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);

  return (
    <>
      <h2>{head}</h2>

      {weatherValue.map((value, index) => {
        const tomorrowDay = new Date(value.forecast.forecastday[1].date).getMonth();
        const afterTomorrowDay = new Date(value.forecast.forecastday[2].date).getMonth();
        return (
          <div
            key={index}
            className={styles.weatherPrediction}
          >
            <Predict
              imagePath={value.forecast.forecastday[1].day.condition.icon}
              weather={value.forecast.forecastday[1].day.condition.text}
              tempDay={value.forecast.forecastday[1].day.maxtemp_c}
              tempNight={value.forecast.forecastday[1].day.mintemp_c}
              day={`${getValueByKey(Month, tomorrowDay)} ${tomorrowDay}`}
            />
            <Predict
              imagePath={value.forecast.forecastday[2].day.condition.icon}
              weather={value.forecast.forecastday[2].day.condition.text}
              tempDay={value.forecast.forecastday[2].day.maxtemp_c}
              tempNight={value.forecast.forecastday[2].day.mintemp_c}
              day={`${getValueByKey(Month, afterTomorrowDay)} ${afterTomorrowDay}`}
            />
          </div>
        );
      })}
    </>
  );
};
