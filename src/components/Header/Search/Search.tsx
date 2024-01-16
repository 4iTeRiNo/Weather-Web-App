import styles from './Search.module.css';
import {SearchIcon} from '../../SGVIcons';
// import {fetchCity} from '../../../store/thunks';

interface SearchProps {
  onSubmit: (value: string) => void;
  hasError: boolean;
}

type FormFields = {
  cityName: HTMLInputElement;
};

export const Search = ({onSubmit, hasError}: SearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.cityName.value;

    if (text.trim()) onSubmit(text);
    event.currentTarget.reset;
    console.log(text);
  };

  return (
    <form
      autoComplete='on'
      className={styles.searchForm}
      onSubmit={handleSubmit}
    >
      <div className={styles.search}>
        <label
          htmlFor='search'
          className='label'
        ></label>
        <input
          type='text'
          className={styles.text}
          name='cityName'
          id='search'
          placeholder='Search city'
        />
        {hasError ? (
          <div className={styles.error}> No Result </div>
        ) : (
          <button
            type='submit'
            className={styles.searchButton}
          >
            <SearchIcon />
          </button>
        )}
      </div>
    </form>
  );
};
