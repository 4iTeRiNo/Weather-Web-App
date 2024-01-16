import styles from './Header.module.css';

// import {SearchIcon} from '../SGVIcons';
import {Avatar} from '../Avatar';
import {Search} from './Search/Search';
import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {getSearchCity, getWatchPositionUser} from '../../store/action';
import {fetchCity} from '../../store/thunks';

// interface HeaderProps { }

export const Header = () => {
  const [searchText, setSearchText] = useState('');
  console.log(searchText);

  const dispatch = useAppDispatch();
  // console.log(searchText);

  useEffect(() => {
    console.log(dispatch(fetchCity(searchText)));
  }, [dispatch, searchText]);

  return (
    <header className={styles.header}>
      <section className={styles.intro}>
        <div className={styles.user}>
          <ul className={styles.linkItems}>
            <li>
              <Avatar />
            </li>
          </ul>
          <div className={styles.welcome}>
            <h1>Hello,</h1>
            <span className={styles.name}>Username</span>
          </div>
        </div>
        <Search
          onSubmit={setSearchText}
          hasError={false}
        />
      </section>
    </header>
  );
};
