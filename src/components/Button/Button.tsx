import styles from './Button.module.css';

// interface ButtonProps { }

export const Button = () => {

  return (
    <div className={styles.button}>
      <span></span>
      <span className={styles.text}></span>
    </div>
  )
};
