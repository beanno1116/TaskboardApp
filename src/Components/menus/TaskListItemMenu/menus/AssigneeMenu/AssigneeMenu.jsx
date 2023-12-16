

import { useRef, useState } from 'react';
import LeftDblCheveronButton from '../../../../../assets/icons/LeftDblCheveronButton';
import ListSeperator from '../../../../ListSeperator/ListSeperator';
import styles from './assigneeMenu.module.css';
import { devFetchContacts } from '../../../../../data/fakeApi';

const ListItem = ({ data, onClick, isSelected }) => {
  return (
    <li key={data.id} className={`${isSelected ? styles.selected : ""}`} onClick={() => onClick()}>
      <div className={styles.initials}>
        {`${Array.from(data.first_name)[0]}${Array.from(data.last_name)[0]}`}
      </div>
      <div className={styles.name}>
        {`${data.first_name} ${data.last_name}`}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}




const AssigneeMenu = ({ task,isActive,menuBack,onChange }) => {
  const assignees = devFetchContacts();

  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (assigneeId) => {
    onChange(task.id,{contactId:assigneeId});
  }

  const listRef = useRef(null);

  return (
    <div className={`${styles.menu_container} ${styles.assignee_menu} ${!isActive ? "" : styles.show_menu}`}>

      <div className={styles.menu_header}>
        <LeftDblCheveronButton width={22} height={22} onClick={menuBack} type={"button"} className={styles.menu_header_btn} />
        <div className={styles.menu_title}>Assignees</div>
        <div className={styles.menu_header_placeholder}></div>
      </div>

      <ListSeperator />

      <div className={styles.search_row}>
        <input type={"text"} className={styles.search_input} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      </div>

      <div ref={listRef} className={styles.list}>
        <ul>
          {assignees.map(assignee => {            
            if (assignee.id === task.contactId.toString()) {
              return (
                <ListItem key={assignee.id} data={assignee} onClick={() => selectListItemEvent(assignee.id)} isSelected={true} />
              )
            }
            return (
              <ListItem key={assignee.id} data={assignee} onClick={() => selectListItemEvent(assignee.id)} isSelected={false} />
            )
          })}          
        </ul>
      </div>

    </div>
  );
}

export default AssigneeMenu;