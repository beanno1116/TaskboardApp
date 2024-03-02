import { useState } from 'react';
import {useQuery} from 'react-query';
import ListMenu from '../../../ListMenu/ListMenu';
import { getUsers } from '../../../../../appUtils';
import AssigneeListItem from '../../../../listItems/AssigneeListItem/AssigneeListItem';






const AssigneeMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`users`],
    queryFn: () => getUsers()
  })
  

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
        ListItem={AssigneeListItem}
      />}

    </ListMenu>

  );
}

export default AssigneeMenu;