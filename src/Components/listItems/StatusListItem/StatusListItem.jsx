import { capitalizeFirstLetter } from '../../../Utilities';

import styles from './statusListItem.module.css';

const StatusListItem = ({ id,description,color, onClick, isSelected }) => {  
  return (
    <li key={id} className={`${styles.list_item} ${styles.status} ${isSelected ? styles.selected : ""}`} onClick={(e) => onClick(e,id)}>
      <div className={`${styles.status_color}`} style={{backgroundColor:color}}></div>
      <div className={styles.title}>
        {capitalizeFirstLetter(description)}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}

export default StatusListItem;