import {useState} from 'react';
import {Pressure, ThermometerIcon, UmbrellaIcon} from '../SGVIcons';
import {widthIcon} from '../../constant';
import classNames from 'classnames';
import styles from './WeatherValueBoard.module.css';

export const Button = () => {
  const [isPressed, setIsPressed] = useState('');

  const buttonsData = [
    {id: '0', button: <ThermometerIcon width={widthIcon} />},
    {id: '1', button: <UmbrellaIcon width={widthIcon} />},
    {id: '2', button: <Pressure width={widthIcon} />},
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsPressed(event.currentTarget.id);
  };

  return (
    <div className={styles.navigate}>
      {buttonsData.map((el) => {
        return (
          <button
            key={el.id}
            id={el.id}
            className={classNames(styles.linkItem, isPressed === el.id ? styles.active : '')}
            onClick={handleClick}
          >
            {el.button}
          </button>
        );
      })}
    </div>
  );
};
