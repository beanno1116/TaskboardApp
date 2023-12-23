import { useState } from 'react';



import styles from './taskListItemMenu.module.css';

import MainMenu from './menus/MainMenu/MainMenu';
import ListSeperator from '../../ListSeperator/ListSeperator';
import EditButton from '../../../assets/icons/EditButton';
import TrashButton from '../../../assets/icons/TrashButton';
import AssigneeMenu from './menus/AssigneeMenu/AssigneeMenu';
import StatusMenu from './menus/StatusMenu/StatusMenu';
import PrioritiesMenu from './menus/PriorityMenu/PriorityMenu';
import { devFetchListItemMainMenuItems } from '../../../data/fakeApi';


const TasklistItemMenu = ({task,deleteTask,updateTask,onChange}) => {
  const mainMenuItems = devFetchListItemMainMenuItems();
  const [showMenuView,setShowMenuView] = useState(false);
  const [currentMenu,setCurrentMenu] = useState("");

  const onNavChangeEvent = (e) => {
    setShowMenuView(false);
    setCurrentMenu("");
  }



  const setMenuView = (menuName) => {
    // debugger;
    switch (menuName.toLowerCase()) {
      case "assignee":                
    //       root.style.setProperty("--po-height","380px");
        return (<AssigneeMenu task={task} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={updateTask} search={true} />)
    //       return (<POAssigneeMenu onMenuBack={menuBackClickEvent} onChange={e => onChange(e,"assignee")} task={task} />)
      case "status":
    //       root.style.setProperty("--po-height","380px");    
          return (<StatusMenu task={task} isActive={showMenuView} menuBack={onNavChangeEvent} onChange={updateTask} search={false} />)
    //   case "due_date":
    //       root.style.setProperty("--po-height","380px");
    //       return (<PODueDateMenu onClick={menuBackClickEvent} onChange={e => onChange(e,"due_date")} task={task} />)
      case "priority":
    //       root.style.setProperty("--po-height","380px");        
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
    onChange("edit","");
  }

  

  return (
   <div className={styles.tasklist_item_menu_container}>
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