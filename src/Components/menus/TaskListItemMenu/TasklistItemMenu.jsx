import { useRef, useState } from 'react';



import styles from './taskListItemMenu.module.css';

import MainMenu from './menus/MainMenu/MainMenu';
import ListSeperator from '../../ListSeperator/ListSeperator';
import EditButton from '../../../assets/icons/EditButton';
import TrashButton from '../../../assets/icons/TrashButton';
import AssigneeMenu from './menus/AssigneeMenu/AssigneeMenu';
import StatusMenu from './menus/StatusMenu/StatusMenu';
import PrioritiesMenu from './menus/PriorityMenu/PriorityMenu';
import { devFetchListItemMainMenuItems } from '../../../data/fakeApi';
import { useQuery } from 'react-query';
import { getMenuItems } from '../../../appUtils';
import { useGetMenu } from '../../../api/api';
import * as menuTypes from "../menuTypes";


const DEFAULT_HEIGHT = 200;
const DEFAULT_WIDTH = 225;
const MENU_HEIGHT = 380;






const TasklistItemMenu = ({task,onClose,onOpen,deleteTask,updateTask,onChange}) => {
  const {status,data} = useGetMenu(menuTypes.MAIN_MENU,menuTypes.LIST_ITEM_MENU);
  const mainMenuItems = data?.results ? data.results : [];
  
  const [showMenuView,setShowMenuView] = useState(false);
  const [currentMenu,setCurrentMenu] = useState("");
  
  const menuRef = useRef(null);
  

  const onNavChangeEvent = (e) => {
    
    menuRef.current.style.setProperty("--height",DEFAULT_HEIGHT + "px");
    menuRef.current.style.setProperty("--width",DEFAULT_WIDTH + "px");
    setShowMenuView(false);
    setCurrentMenu("");
  }

  const menuOnChangeEvent = (taskId,changeObj) => {     
    updateTask(taskId,changeObj);
    menuRef.current.style.setProperty("--height",DEFAULT_HEIGHT + "px");
    menuRef.current.style.setProperty("--width",DEFAULT_WIDTH + "px");
    setShowMenuView(false);
    setCurrentMenu("");
    onClose();
  }



  const setMenuView = (menuName) => {
    
    menuRef.current.style.setProperty("--height",MENU_HEIGHT + "px");
    switch (menuName.toLowerCase()) {
      case "assignee":                            
        return (<AssigneeMenu task={{id:task.id,contactId:task.contactId}} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={menuOnChangeEvent} search={true} />)    
      case "status":    
          return (<StatusMenu task={{id:task.id,status:task.status}} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={menuOnChangeEvent} search={false} />)
    //   case "due_date":
    //       root.style.setProperty("--po-height","380px");
    //       return (<PODueDateMenu onClick={menuBackClickEvent} onChange={e => onChange(e,"due_date")} task={task} />)
      case "priority":        
          return (<PrioritiesMenu task={task} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={updateTask} />)
      case "edit":
          menuRef.current.style.setProperty("--width","350px");
          return (<PrioritiesMenu task={task} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={updateTask} />)
      default:
        return "";
        // return (<div>NO MENU TO SHOW</div>);
    }
  }

  const onMenuItemClick = (e,name) => {
    const {currentTarget} = e;
    
    
    if (currentTarget.localName === "li" && currentTarget.dataset.menu === "item" && name.length > 0) {
      
      setCurrentMenu(name);
      setShowMenuView(true);
      console.log("set new menu to: " + name);  
      return;
    }
    
    
    
    console.log("hll")

  }

  const onEditButtonClick = (e) => {
    setCurrentMenu("edit");
    setShowMenuView(true);
  }

  const deleteTaskClickHandler = (e) => {    
    onClose();
    deleteTask(task.id);    
  }

  

  return (
   <div ref={menuRef} className={styles.tasklist_item_menu_container} >
    <div className={styles.body}>
        
      {showMenuView && setMenuView(currentMenu)}
                

      <MainMenu menuItems={status.isLoading ? [] : mainMenuItems} isActive={showMenuView} onClick={onMenuItemClick}/>

        
    </div>
          
    <ListSeperator />

    <div className={styles.bottom_nav}>
        
      <EditButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={(e) => onEditButtonClick(e)}/>

      <TrashButton width={24} height={24}  name={"trash_btn"} className={styles.nav_btn} type={"button"} onClick={(e) => deleteTaskClickHandler(e)} />

    </div>

   </div>
  );
}

export default TasklistItemMenu;