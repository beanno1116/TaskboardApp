import { capitalizeFirstLetter } from '../../../Utilities';

import styles from './statusListItem.module.css';

const StatusListItem = ({ data, onClick, isSelected }) => {  
  return (
    <li key={data.id} className={`${styles.list_item} ${styles.status} ${isSelected ? styles.selected : ""}`} onClick={(e) => onClick(e,data.id)}>
      <div className={`${styles.status_color}`} style={{backgroundColor:data.color}}></div>
      <div className={styles.title}>
        {capitalizeFirstLetter(data.description)}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}

export default StatusListItem;