import { useRef, useState,cloneElement } from 'react';


import styles from './taskListItem.module.css';

import StatusIndicator from './components/TaskItemStatusIndicator';
import TaskItemContent from './components/TaskItemContent';
import TaskItemNav from './components/TaskItemNav';
import TaskItemOptionButton from './components/TaskItemOptionButton';
import TaskItemContact from './components/TaskItemContact';

import Popover from '../Popover/Popover';
import NTTPopover,{positions,usePopover} from '../NTTPopover/NTTPopover';







function TaskListItem({ task,boardId,menu,...props}) {
  // 
  const {isShowing,close,open} = usePopover();
  const {id,title,description,contact,contactId,status} = task;
  const [isOpen,setIsOpen] = useState(false);

  const renderMenu = () => {
    // 
    const Comp = menu(close,open);
    return Comp;
  }
  
 
  const onItemOptionButtonClick = (e) => {
    e.stopPropagation();
    try {
      setIsOpen(!isOpen);
    } catch (error) {
      console.log(`onOptionMenuBtnClick Event error ${error.message}`);
    }
  }

  return (
    <div className={styles.tasklist_item} id={id} {...props}>
      
      <StatusIndicator status={status} />

      <TaskItemContent title={title} content={description} />
        
      <TaskItemNav>
        
      <NTTPopover popover={renderMenu()} close={close} open={open} show={isShowing} config={{position:positions.LEFT_CENTER}}>
          <TaskItemOptionButton onClick={e => onItemOptionButtonClick(e)} />
        </NTTPopover>

        {/* <Popover popover={menu} onClose={() => setIsOpen(false)} position={"left"}>
          <TaskItemOptionButton onClick={e => onItemOptionButtonClick(e)} />          
        </Popover> */}
        
        <TaskItemContact contact={contactId} />

      </TaskItemNav>

    </div>
  );
}

TaskListItem.Status = StatusIndicator;
TaskListItem.Content = TaskItemContent;
TaskListItem.Nav = TaskItemNav;
TaskListItem.OptionButton = TaskItemOptionButton;
TaskListItem.Contact = TaskItemContact;

export default TaskListItem;