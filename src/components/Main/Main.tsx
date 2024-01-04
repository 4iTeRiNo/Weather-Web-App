import cn from 'classnames';
import {WeatherCard} from '../WeatherCard';
import {WeatherTomorrow} from '../WeatherTomorrow';
import {WeatherValueBoard} from '../WeatherValueBoard';
import {CloudyIcon, WindyIcon} from '../SGVIcons';
import {useAppSelector} from '../../hooks';
import {HeaderCard} from '../WeatherCard/HeaderCard';
import {WeatherMetrics} from '../WeatherCard/WeatherMetrics';
import {WeatherInfoOther} from '../WeatherCard/WeatherInfoOther';
import styles from './Main.module.css';
import {WeatherAQIGraphLine} from '../WeatherCard/WeatherAQIGraphLine';
import {usIndexEpa} from '../../types';
import {getTemplateString} from '../../utils/getTemplateString';

export const Main = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  return (
    <main className={styles.main}>
      <WeatherCard>
        {weatherValue.map((value) => {
          const [first] = value.forecast.forecastday;
          const getValueIndex = Object.getOwnPropertyDescriptor(usIndexEpa, value.current.air_quality['us-epa-index']);
          return (
            <>
              <div className={cn(styles.weatherCard, styles.weather)}>
                <HeaderCard
                  image={<CloudyIcon />}
                  someText={'Weather'}
                  nameCity={value.location.name}
                />
                <WeatherMetrics
                  title={getTemplateString(first.day.maxtemp_c)}
                  subtitle={getTemplateString(first.day.mintemp_c)}
                  value={value.current.condition.text}
                />
                <WeatherInfoOther
                  pressure={{
                    title: 'Pressure',
                    value: value.current.pressure_mb,
                  }}
                  visibility={{
                    title: 'Visibility',
                    value: value.current.vis_km,
                  }}
                  humidity={{
                    title: 'Humidity',
                    value: value.current.humidity,
                  }}
                />
              </div>
              <div className={cn(styles.weatherCard, styles.airQuality)}>
                <HeaderCard
                  image={<WindyIcon />}
                  someText={'Air Quality'}
                  nameCity={`Main pollution(2.5): ${value.current.air_quality.pm2_5}`}
                />
                <WeatherMetrics
                  title={value.current.air_quality.co}
                  subtitle={'AQI'}
                  value={value.current.wind_dir}
                />
                <WeatherAQIGraphLine value={getValueIndex?.value} />
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
