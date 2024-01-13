import {Dispatch, SetStateAction, useState} from 'react';
import {Pressure, ThermometerIcon, UmbrellaIcon} from '../SGVIcons';
import {widthIcon} from '../../constant';
import classNames from 'classnames';
import styles from './WeatherValueBoard.module.css';

interface ButtonProps {
  isIndex: Dispatch<SetStateAction<string>>;
}

export const Button = ({isIndex}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState('0');

  const buttonsData = [
    {id: '0', request: 'temp_c', button: <ThermometerIcon width={widthIcon} />},
    {id: '1', request: 'value.wind_kph', button: <UmbrellaIcon width={widthIcon} />},
    {id: '2', request: 'value.pressure_mb', button: <Pressure width={widthIcon} />},
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsPressed(event.currentTarget.id);
    isIndex(event.currentTarget.id);
  };
  return (
    <div className={styles.navigate}>
      {buttonsData.map((el) => {
        return (
          <button
            type='submit'
            name={el.request}
            key={el.id}
            id={el.id}
            className={classNames(styles.linkItem, isPressed === el.id ? styles.active : '')}
            // onClick={() => isIndex(el.request)}
            onClick={handleClick}
          >
            {el.button}
          </button>
        );
      })}
    </div>
  );
};
