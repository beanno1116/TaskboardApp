import { capitalizeEachFirstLetter,capitalizeFirstLetter } from '../../../Utilities';

import styles from './assigneeListItem.module.css';

const AssigneeListItem = ({ id,fullName,color,onClick,isSelected }) => {

  
  const initials = fullName.split(" ").map(n => `${capitalizeFirstLetter(Array.from(n)[0])}`).join("");

  const onListItemClick = (e,id) => {    
    (onClick && {}.toString.call(onClick) === '[object Function]') && onClick(e,id);
  }
  

  return (
    <li key={id} className={`${styles.list_item} ${styles.assignee} ${isSelected ? styles.selected : ""}`} onClick={e => onListItemClick(e,id)}>

      <div className={styles.initials} style={{backgroundColor:color}}>
        {initials}
      </div>

      <div className={styles.name}>
        {capitalizeEachFirstLetter(fullName)}
      </div>

      <div className={styles.checkbox}></div>

    </li>
  );
}

export default AssigneeListItem;