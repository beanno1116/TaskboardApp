import { useState } from 'react';
import ListMenu from '../../../ListMenu/ListMenu';
import StatusListItem from '../../../../listItems/StatusListItem/StatusListItem';
import { useGetStatusLevels } from '../../../../../api/api';




const useStatusMenu = () => {
  const {status,data} = useGetStatusLevels();

  return {
    status,
    data
  }
}



const StatusMenu = ({ task,isActive,menuBack,onChange,search=false }) => {
  const {status,data} = useStatusMenu();  
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
  const menuItems = renderListItems(data?.results,task.status);

  
  const [searchValue,setSearchValue] = useState("");

  const selectListItemEvent = (e,status) => {    
    onChange(task.id,{status:status});
  }

  

  return (

    <ListMenu isActive={isActive}>

      <ListMenu.Header text={"Status"} onClick={menuBack} />

      <ListMenu.Seperator />

      {search && <ListMenu.SearchField value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />}

      {
        !status.isLoading && 

        <ListMenu.List>

          {!status.isLoading && menuItems.map(item => {
            return (
              <StatusListItem key={item.id} id={item.id} color={item.color} description={item.description} isSelected={item.selected} onClick={selectListItemEvent}/>              
            )
          })}

        </ListMenu.List>
      }

    </ListMenu>

  );
}

export default StatusMenu;