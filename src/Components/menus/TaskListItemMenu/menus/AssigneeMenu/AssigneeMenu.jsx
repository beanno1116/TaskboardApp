import { useState } from 'react';
import styles from './assigneeMenu.module.css';
import {useQuery} from 'react-query';
import { devFetchContacts } from '../../../../../data/fakeApi';
import { capitalizeEachFirstLetter,capitalizeFirstLetter } from '../../../../../Utilities';
import ListMenu from '../../../ListMenu/ListMenu';
import { getUsers } from '../../../../../appUtils';

const ListItem = ({ data, onClick, isSelected }) => {
  
  const name = data.firstName + " " + data.lastName;

  return (
    <li key={data.id} className={`${styles.list_item} ${styles.assignee} ${isSelected ? styles.selected : ""}`} onClick={e => onClick(e,data.id)}>
      <div className={styles.initials}>
        {`${capitalizeFirstLetter(Array.from(data.firstName)[0])}${capitalizeFirstLetter(Array.from(data.lastName)[0])}`}
      </div>
      <div className={styles.name}>
        {capitalizeEachFirstLetter(name)}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}




const AssigneeMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`users`],
    queryFn: () => getUsers()
  })
  const assignees = devFetchContacts();

  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (e,assigneeId) => {    
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



      {data && <ListMenu.List
        items={renderListItems(data,task.contactId.toString())}
        onClick={selectListItemEvent}
        ListItem={ListItem}
      />}

    </ListMenu>

  );
}

export default AssigneeMenu;