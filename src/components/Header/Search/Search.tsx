import styles from './Search.module.css';
interface SearchProps {
  onSubmit: (value: string) => void;
  hasError: string | null;
}

type FormFields = {
  cityName: HTMLInputElement;
};

export const Search = ({onSubmit, hasError}: SearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.cityName.value;

    if (text.trim()) onSubmit(text);
    event.currentTarget.reset();
  };

  return (
    <form
      autoComplete='off'
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
          placeholder='Search city on EN'
        />
        {hasError !== null ? (
          <div className={styles.error}> No Result </div>
        ) : (
          <button
            type='submit'
            className={styles.searchButton}
          ></button>
        )}
      </div>
    </form>
  );
};
