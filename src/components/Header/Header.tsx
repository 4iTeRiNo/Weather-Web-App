import styles from './Header.module.css';

import Search from '../../assets/svg/search.svg?react'
import Notifications from '../../assets/svg/notifications.svg?react'

// interface HeaderProps { }

export const Header = () => {
  return (

    <header className={styles.header}>
      <section className={styles.intro}>
        <div>

        </div>
        <div className={styles.user}>
          <h1>Hello,</h1>
          <span className={styles.name}>Username</span>
        </div>
        <form autoComplete='on' className={styles.wrapperSearch}>
          <div className={styles.search}>
            <input type="text" className={styles.textField} name="cityName" id="search" placeholder="Search city" />
            <label htmlFor="search" className="label">
              <Search />
            </label>
          </div>
          <Notifications />
        </form>
      </section>
    </header>

  )
};
