import styles from './Header.module.css';
import {Avatar} from '../Avatar';
import {Search} from './Search/Search';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCity} from '../../store/thunks';

export const Header = () => {
  const error = useAppSelector((state) => state.defaultCities.error);
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCity(searchText));
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
          hasError={error}
        />
      </section>
    </header>
  );
};
