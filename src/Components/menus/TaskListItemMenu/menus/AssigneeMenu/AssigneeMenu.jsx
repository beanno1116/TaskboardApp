import { useState } from 'react';
import styles from './assigneeMenu.module.css';
import { devFetchContacts } from '../../../../../data/fakeApi';
import { capitalizeEachFirstLetter,capitalizeFirstLetter } from '../../../../../Utilities';
import ListMenu from '../../../ListMenu/ListMenu';

const ListItem = ({ data, onClick, isSelected }) => {
  const name = data.first_name + " " + data.last_name;

  return (
    <li key={data.id} className={`${styles.list_item} ${styles.assignee} ${isSelected ? styles.selected : ""}`} onClick={() => onClick()}>
      <div className={styles.initials}>
        {`${capitalizeFirstLetter(Array.from(data.first_name)[0])}${capitalizeFirstLetter(Array.from(data.last_name)[0])}`}
      </div>
      <div className={styles.name}>
        {capitalizeEachFirstLetter(name)}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}




const AssigneeMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const assignees = devFetchContacts();

  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (assigneeId) => {
    onChange(task.id,{contactId:assigneeId});
  }

  const renderListItems = (itemArr,selectedId) => {
    return itemArr.map(item => {
      if (item.id === selectedId){
        return {
          ...item,
          selected: true
        }
      }
      return {
        ...item,
        selected: false
      }
    })
  }

  // const listRef = useRef(null);

  return (
    
    <ListMenu isActive={isActive}>

      <ListMenu.Header
        text={"Asignees"}
        onClick={menuBack}
      />

      <ListMenu.Seperator />

      {search && <ListMenu.SearchField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />}

      <ListMenu.List
        items={renderListItems(assignees,task.contactId.toString())}
        onClick={selectListItemEvent}
        ListItem={ListItem}
      />

    </ListMenu>

    // <div className={`${styles.menu_container} ${styles.assignee_menu} ${!isActive ? "" : styles.show_menu}`}>

    //   <div className={styles.menu_header}>
    //     <LeftDblCheveronButton width={22} height={22} onClick={menuBack} type={"button"} className={styles.menu_header_btn} />
    //     <div className={styles.menu_title}>Assignees</div>
    //     <div className={styles.menu_header_placeholder}></div>
    //   </div>

    //   <ListSeperator />

    //   <div className={styles.search_row}>
    //     <input type={"text"} className={styles.search_input} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
    //   </div>

    //   <div ref={listRef} className={styles.list}>
    //     <ul>
    //       {assignees.map(assignee => {            
    //         var selectedStatus = (assignee.id === task.contactId.toString()) ? true : false;
    //         return (
    //           <ListItem key={assignee.id} data={assignee} onClick={() => selectListItemEvent(assignee.id)} isSelected={selectedStatus} />
    //         )
    //       })}          
    //     </ul>
    //   </div>

    // </div>
  );
}

export default AssigneeMenu;