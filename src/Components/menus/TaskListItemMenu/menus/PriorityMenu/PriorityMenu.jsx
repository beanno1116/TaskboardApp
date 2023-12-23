import { useState } from 'react';
import styles from './priorityMenu.module.css';
import { devFetchPriorities } from '../../../../../data/fakeApi';
import ListMenu from '../../../ListMenu/ListMenu';

const ListItem = ({ data, onClick, isSelected }) => {  
  return (
    <li key={data.id} className={`${styles.list_item} ${styles.priority} ${isSelected ? styles.selected : ""}`} onClick={() => onClick()}>
      <div className={styles.initials}>
        {data.level}
      </div>
      <div className={styles.name}>
        {"Level " + data.level}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}




const PrioritiesMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const priorities = devFetchPriorities();

  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (priorityId) => {
    onChange(task.id,{priority:priorityId});
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

  

  return (
    
    <ListMenu isActive={isActive}>

      <ListMenu.Header
        text={"Priority"}
        onClick={menuBack}
      />

      <ListMenu.Seperator />

      {search && <ListMenu.SearchField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />}

      <ListMenu.List
        items={renderListItems(priorities,task.priority)}
        onClick={selectListItemEvent}
        ListItem={ListItem}
      />

    </ListMenu>    
  );
}

export default PrioritiesMenu;