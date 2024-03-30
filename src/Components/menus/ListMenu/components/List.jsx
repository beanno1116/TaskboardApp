


import styles from '../listMenu.module.css';

const List = ({ children}) => {
  
  return (
    <div className={styles.list}>
        <ul>
          {children}
        </ul>
      </div>
  );
}

export default List;