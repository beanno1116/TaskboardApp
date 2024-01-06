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


const DEFAULT_HEIGHT = 175;
const DEFAULT_WIDTH = 225;
const MENU_HEIGHT = 380;




const TasklistItemMenu = ({task,deleteTask,updateTask,onChange}) => {
  const mainMenuItems = devFetchListItemMainMenuItems();
  const [showMenuView,setShowMenuView] = useState(false);
  const [currentMenu,setCurrentMenu] = useState("");
  
  
  const menuRef = useRef(null);
  
  
  
  const onNavChangeEvent = (e) => {
    debugger;
    menuRef.current.style.setProperty("--height",DEFAULT_HEIGHT + "px");
    menuRef.current.style.setProperty("--width",DEFAULT_WIDTH + "px");
    setShowMenuView(false);
    setCurrentMenu("");
  }



  const setMenuView = (menuName) => {
    // debugger;
    menuRef.current.style.setProperty("--height",MENU_HEIGHT + "px");
    switch (menuName.toLowerCase()) {
      case "assignee":                            
        return (<AssigneeMenu task={task} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={updateTask} search={true} />)    
      case "status":    
          return (<StatusMenu task={task} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={updateTask} search={false} />)
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

  

  return (
   <div ref={menuRef} className={styles.tasklist_item_menu_container} >
    <div className={styles.body}>
        
      {showMenuView && setMenuView(currentMenu)}
                

      <MainMenu menuItems={mainMenuItems} isActive={showMenuView} onClick={onMenuItemClick}/>

        
    </div>
          
    <ListSeperator />

    <div className={styles.bottom_nav}>
        
      <EditButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={(e) => onEditButtonClick(e)}/>

      <TrashButton width={24} height={24}  name={"trash_btn"} className={styles.nav_btn} type={"button"} onClick={() => deleteTask(task.id)} />

    </div>

   </div>
  );
}

export default TasklistItemMenu;