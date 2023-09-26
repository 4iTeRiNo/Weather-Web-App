import styles from './Footer.module.css';
import { Button } from '../Button';

// interface FooterProps { }

export const Footer = () => {
  return (
  
  <footer className={styles.footer}>
     <div className={styles.currentPoint}>
      <div className={styles.city}>
        <span className={styles.weather}>Sun</span>
        <span className={styles.currentCity}>Boston, UA</span>
      </div>
      <span className={styles.temp}>22&#176;С</span>
    </div>
    <Button/>
  </footer>
)};
