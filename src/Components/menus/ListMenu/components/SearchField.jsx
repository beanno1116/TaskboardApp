

import styles from '../listMenu.module.css';

const SearchField = ({ value,onChange }) => {
  return (
    <div className={styles.search_row}>
      <input type={"text"} className={styles.search_input} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
}

export default SearchField;