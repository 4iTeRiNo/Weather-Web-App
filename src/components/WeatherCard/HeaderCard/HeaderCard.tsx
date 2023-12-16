import React from 'react';
import styles from './HeaderCard.module.css';

interface HeaderCardProps {
  image: React.ReactNode;
  someText: string;
  nameCity: string;
}

export const HeaderCard = ({image, nameCity, someText}: HeaderCardProps) => {
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
