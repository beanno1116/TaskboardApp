import { useState } from 'react';
import ListMenu from '../../../ListMenu/ListMenu';
import AssigneeListItem from '../../../../listItems/AssigneeListItem/AssigneeListItem';
import { useGetUsers } from '../../../../../api/api';



const useAssigneeMenu = () => {
  const {status,data} = useGetUsers();

  return {
    status,
    data
  }
}




const AssigneeMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const {status,data} = useAssigneeMenu();
  const renderListItems = (itemArr,selectedId) => {
    if (!itemArr) return;
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
  const menuItems = renderListItems(data.results,task.contactId.toString());

  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (e,assigneeId) => {
    onChange(task.id,{contactId:assigneeId});
  }


  
  return (
    
    <ListMenu isActive={isActive}>

      <ListMenu.Header text={"Assignees"} onClick={menuBack} />
        
      <ListMenu.Seperator />

      {search && <ListMenu.SearchField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />}

      {
        !status.isLoading && 

        <ListMenu.List>

          {!status.isLoading && menuItems.map(user => {
            return (
              <AssigneeListItem key={user.id} id={user.id} fullName={`${user.firstName} ${user.lastName}`} onClick={selectListItemEvent} isSelected={user.selected} color={user.color}/>
            )
          })}

        </ListMenu.List>
      }

    </ListMenu>

  );
}

export default AssigneeMenu;