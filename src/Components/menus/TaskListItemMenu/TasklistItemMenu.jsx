import { useState } from 'react';

import { optionMenuItems } from '../../../data/optionMenuItems';

import styles from './taskListItemMenu.module.css';

import MainMenu from './menus/MainMenu/MainMenu';
import ListSeperator from '../../ListSeperator/ListSeperator';
import EditButton from '../../../assets/icons/EditButton';
import TrashButton from '../../../assets/icons/TrashButton';
import AssigneeMenu from './menus/AssigneeMenu/AssigneeMenu';


const TasklistItemMenu = ({task}) => {
  const [showMenuView,setShowMenuView] = useState(false);
  const [currentMenu,setCurrentMenu] = useState();


  const menuViewShowing = (menuName) => {
    switch (menuName.toLowerCase()) {
      case "assignee":                
    //       root.style.setProperty("--po-height","380px");
        return (<AssigneeMenu isActive={true}/>)
    //       return (<POAssigneeMenu onMenuBack={menuBackClickEvent} onChange={e => onChange(e,"assignee")} task={task} />)
    //   case "status":
    //       root.style.setProperty("--po-height","380px");
    //       return (<POStatusMenu onMenuBack={menuBackClickEvent} onChange={e => onChange(e,"status")} task={task} />)
    //   case "due_date":
    //       root.style.setProperty("--po-height","380px");
    //       return (<PODueDateMenu onClick={menuBackClickEvent} onChange={e => onChange(e,"due_date")} task={task} />)
    //   case "priority":
    //       root.style.setProperty("--po-height","380px");                
    //       return (<POPriorityMenu onClick={menuBackClickEvent} onChange={e => onChange(e,"priority")} task={task} />)
      default:
        return (<div>NO MENU TO SHOW</div>);
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

  return (
   <>
    <div className={styles.body}>
        
      {showMenuView && menuViewShowing(currentMenu)}
                

      <MainMenu menuItems={optionMenuItems} isActive={showMenuView} onClick={onMenuItemClick}/>

        
    </div>
          
    <ListSeperator />

    <div className={styles.bottom_nav}>
        
      <EditButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={() => {}}/>
      <TrashButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={() => {}} />

    </div>
   </>
  );
}

export default TasklistItemMenu;