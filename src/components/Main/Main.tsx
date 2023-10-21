import cn from 'classnames';
import {WeatherCard} from '../WeatherCard';
import {WeatherTomorrow} from '../WeatherTomorrow';
import {WeatherValueBoard} from '../WeatherValueBoard';
import {CloudyIcon, WindyIcon} from '../SGVIcons';
import {useAppSelector} from '../../hooks';
import {Title} from '../WeatherCard/Title';
import {WeatherMetrics} from '../WeatherCard/WeatherMetrics';
import {WeatherInfoOther} from '../WeatherCard/WeatherInfoOther';

import styles from './Main.module.css';
import {WeatherAqiGraphLine} from '../WeatherCard/WeatherAQIGraphLine';
import {getValueByKey} from '../../utils/getValueByKey';
import {usIndexEpa} from '../../types';

export const Main = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  return (
    <main className={styles.main}>
      <WeatherCard>
        {weatherValue.map((value, index) => {
          const getValue = getValueByKey(usIndexEpa, value.current.air_quality['us-epa-index']);
          console.log(getValue);

          return (
            <>
              <div className={cn(styles.weatherCard, styles.weather)}>
                <Title
                  image={<CloudyIcon />}
                  someText={'Weather'}
                  nameCity={value.location.name}
                />
                <WeatherMetrics
                  title={`${value.forecast.forecastday[0].day.maxtemp_c}°C`}
                  subtitle={`${value.forecast.forecastday[0].day.mintemp_c}°C`}
                  value={value.current.condition.text}
                />
                <WeatherInfoOther
                  titleP={'Pressure'}
                  pressure={value.current.pressure_mb}
                  titleV={'Visibility'}
                  visibility={value.current.vis_km}
                  titleH={'Humidity'}
                  humidity={value.current.humidity}
                />
              </div>
              <div
                key={index}
                className={cn(styles.weatherCard, styles.airQuality)}
              >
                <Title
                  image={<WindyIcon />}
                  someText={'Air Quality'}
                  nameCity={`Main pollution(2.5): ${value.current.air_quality.pm2_5}`}
                />
                <WeatherMetrics
                  title={value.current.air_quality.co}
                  subtitle={'AQI'}
                  value={value.current.wind_dir}
                />
                <WeatherAqiGraphLine value={getValue} />
              </div>
            </>
          );
        })}
      </WeatherCard>
      <WeatherValueBoard />
      <WeatherTomorrow />
    </main>
  );
};
