import { useState } from 'react';
import styles from './statusMenu.module.css';
import { devFetchStatusTypes } from '../../../../../data/fakeApi';
import { capitalizeFirstLetter } from '../../../../../Utilities';
import ListMenu from '../../../ListMenu/ListMenu';
import { useQuery } from 'react-query';
import { getStatuses } from '../../../../../appUtils';



const ListItem = ({ data, onClick, isSelected }) => {  
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




const StatusMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const {isLoading,isError,data} = useQuery({
    queryKey: ['getStatuses'],
    queryFn: () => getStatuses()
  })
  const statusTypes = devFetchStatusTypes();
  

  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (e,status) => {
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

      {data && <ListMenu.List 
        items={renderListItems(data,task.status)} 
        onClick={selectListItemEvent} 
        ListItem={ListItem}
      />}

    </ListMenu>

  );
}

export default StatusMenu;