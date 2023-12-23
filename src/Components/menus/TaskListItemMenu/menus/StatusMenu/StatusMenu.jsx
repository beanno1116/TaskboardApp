import { useState } from 'react';
import styles from './statusMenu.module.css';
import { devFetchStatusTypes } from '../../../../../data/fakeApi';
import { capitalizeFirstLetter } from '../../../../../Utilities';
import ListMenu from '../../../ListMenu/ListMenu';



const ListItem = ({ data, onClick, isSelected }) => {  
  return (
    <li key={data.id} className={`${styles.list_item} ${styles.status} ${isSelected ? styles.selected : ""}`} onClick={() => onClick()}>
      <div className={`${styles.status_color}`} style={{backgroundColor:data.color}}></div>
      <div className={styles.title}>
        {capitalizeFirstLetter(data.title)}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}




const StatusMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const statusTypes = devFetchStatusTypes();
  

  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (status) => {
    onChange(task.id,{status:status});
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
        text={"Status"} 
        onClick={menuBack} 
      />

      <ListMenu.Seperator />

      {search && <ListMenu.SearchField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />}

      <ListMenu.List 
        items={renderListItems(statusTypes,task.status)} 
        onClick={selectListItemEvent} ListItem={ListItem} 
      />

    </ListMenu>

  );
}

export default StatusMenu;