import { capitalizeEachFirstLetter,capitalizeFirstLetter } from '../../../Utilities';

import styles from './assigneeListItem.module.css';

const AssigneeListItem = ({ data,onClick,isSelected }) => {

  const name = data.firstName + " " + data.lastName;

  return (
    <li key={data.id} className={`${styles.list_item} ${styles.assignee} ${isSelected ? styles.selected : ""}`} onClick={e => onClick(e,data.id)}>
      <div className={styles.initials} style={{backgroundColor:data.color}}>
        {`${capitalizeFirstLetter(Array.from(data.firstName)[0])}${capitalizeFirstLetter(Array.from(data.lastName)[0])}`}
      </div>
      <div className={styles.name}>
        {capitalizeEachFirstLetter(name)}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  );
}

export default AssigneeListItem;