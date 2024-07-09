import styles from "./SearchInput.module.css";

const SearchInput = () => {
  return (
    <label className={styles.search__label}>
      <input
        type="search"
        className={styles.search__input}
        placeholder="Search by title"
      />
    </label>
  );
};

export { SearchInput };
