import {Dispatch, SetStateAction, useState} from 'react';
import {Pressure, ThermometerIcon, WindyIcon} from '../../SGVIcons';
import classNames from 'classnames';
import styles from './Button.module.css';
import {isValue} from '../../../utils/isValue';

interface ButtonProps {
  isIndex: Dispatch<SetStateAction<'pressure_mb' | 'wind_kph' | 'temp_c'>>;
}

export const Button = ({isIndex}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState('0');

  const buttonsData = [
    {id: '0', request: 'temp_c', button: <ThermometerIcon />},
    {id: '1', request: 'wind_kph', button: <WindyIcon />},
    {id: '2', request: 'pressure_mb', button: <Pressure />},
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.dataset.id) {
      setIsPressed(event.currentTarget.dataset.id);
    }
    if (isValue(event.currentTarget.dataset.request)) {
      isIndex(event.currentTarget.dataset.request);
    }
  };

  return (
    <div className={styles.navigate}>
      {buttonsData.map((el) => {
        return (
          <button
            type='submit'
            name={el.request}
            key={el.id}
            data-id={el.id}
            data-request={el.request}
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
