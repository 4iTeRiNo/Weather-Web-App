import styles from './Button.module.css';

// import Calendar from '../../assets/svg/navigate/calendar-outline.svg?react'

// interface ButtonProps { }

export const Button = () => (
  <button className={styles.button}>
    <svg width="34px" height="34px" xmlns="http://www.w3.org/2000/svg" fill='#686d80' color='#686d80' className={styles.calendar} viewBox="0 0 512 512">
      <rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48" />
      <circle stroke="currentColor" cx="296" cy="232" r="24" />
      <circle cx="296" cy="312" r="24" />
      <circle cx="376" cy="232" r="24" />
      <circle cx="376" cy="312" r="24" />
      <circle cx="136" cy="312" r="24" />
      <circle cx="216" cy="312" r="24" />
      <circle cx="136" cy="392" r="24" />
      <circle cx="296" cy="392" r="24" />
      <circle cx="216" cy="392" r="24" />
      <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32" />
      <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M464 160H48" />
    </svg>
    <span className={styles.text}> Next 5 Days</span>
  </button>
);
