import React from 'react';
import styles from './Title.module.css';

interface TitleProps {
  image: React.ReactNode;
  someText: string;
  nameCity: string;
}

export const Title = ({image, nameCity, someText}: TitleProps) => {
  return (
    <div className={styles.title}>
      <div className={styles.svg}>{image}</div>
      <div className={styles.city}>
        <p>
          {someText} <br /> {nameCity}
        </p>
      </div>
    </div>
  );
};
