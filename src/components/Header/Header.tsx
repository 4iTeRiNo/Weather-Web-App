import styles from './Header.module.css';

import {SearchIcon, NotificationIcon} from '../SGVIcons';

// interface HeaderProps { }

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.intro}>
        <div className={styles.user}>
          <div className={styles.welcome}>
            <h1>Hello,</h1>
            <span className={styles.name}>Username</span>
          </div>
        </div>
        <form
          autoComplete='on'
          className={styles.searchForm}
        >
          <div className={styles.search}>
            <input
              type='text'
              className={styles.text}
              name='cityName'
              id='search'
              placeholder='Search city'
            />
            <label
              htmlFor='search'
              className='label'
            >
              <SearchIcon />
            </label>
          </div>
          <div className={styles.border}>
            <NotificationIcon />
          </div>
        </form>
      </section>
    </header>
  );
};
