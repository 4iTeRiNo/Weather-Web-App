import styles from './WeatherValueBoard.module.css';
import {Line} from 'react-chartjs-2';

import {Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
import {RainyIcon, SunnyIcon, CloudyIcon} from '../SGVIcons';
import cn from 'classnames';
import {useAppSelector} from '../../hooks';
import {BundleCurve} from 'react-svg-curve';

// interface WeatherValueBoardProps { }

export const WeatherValueBoard = () => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);
  console.log(weatherValue);

  const tempData = weatherValue
    .map((item) => {
      return item.forecast.forecastday[0].hour
        .filter((item, index) => {
          if (index === 8) return item;
          if (index === 12) return item;
          if (index === 17) return item;
          if (index === 21) return item;
        })
        .map((item) => item.temp_c);
    })
    .shift();

  console.log(tempData);

  // const data = {
  //   labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
  //   datasets: [
  //     {
  //       data: tempData,

  //       // backgroundColor: 'transparent',
  //       borderColor: '#f9822f',
  //       // pointBorderColor: 'transparent',
  //       pointBorderWidth: 4,
  //       tension: 0.5,
  //     },
  //   ],
  // };

  // const options = {
  //   plugins: {},
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //     },
  //     y: {
  //       ticks: {
  //         stepSize: 2,
  //       },
  //     },
  //   },
  // };
  return (
    <div className={styles.weatherValueBoard}>
      <div className={styles.header}>
        <h2>How's the temperature today?</h2>
        <div></div>
      </div>
      <div className={styles.lineChart}>
        <div className={styles.axis}>
          <svg
            className={styles.graphLine}
            xmlns='http://www.w3.org/2000/svg'
          >
            <BundleCurve
              data={[
                [25, 120],
                [70, 75],
                [100, 80],
                [190, 130],
                [210, 140],
                [330, 60],
                [470, 140],
                [490, 90],
              ]}
              // showPoints={false}
              stroke='#f9822f'
              strokeWidth={3}
            />
          </svg>
          {tempData?.map((value) => {
            return (
              <div className={styles.tick}>
                <span className={styles.value}>{value}</span>
                <span className={styles.name}>Morning</span>
              </div>
            );
          })}
          {/* <div className={styles.tick}>
            <RainyIcon className={cn(styles.overlay, styles.active)} />
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>Morning</span>
          </div>
          <div className={styles.tick}>
            <SunnyIcon className={cn(styles.overlay)} />
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>Afternoon</span>
          </div>
          <div className={styles.tick}>
            <CloudyIcon className={cn(styles.overlay)} />
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>Evening</span>
          </div>
          <div className={styles.tick}>
            <SunnyIcon className={cn(styles.overlay)} />
            <span className={styles.value}>26°C</span>
            <span className={styles.name}>Night</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
