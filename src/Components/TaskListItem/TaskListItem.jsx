import { useRef, useState } from 'react';


import styles from './taskListItem.module.css';

import StatusIndicator from './components/TaskItemStatusIndicator';
import TaskItemContent from './components/TaskItemContent';
import TaskItemNav from './components/TaskItemNav';
import TaskItemOptionButton from './components/TaskItemOptionButton';
import TaskItemContact from './components/TaskItemContact';

import Popover from '../Popover/Popover';







function TaskListItem({ task,menu,onClick,listId,...props}) {
  const {id,title,description,contact,status} = task;
  const [isOpen,setIsOpen] = useState(false);

  
  
  
    
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
        

        <Popover popover={menu} onClose={() => setIsOpen(false)} position={"left"}>
          <TaskItemOptionButton isActive={isOpen} onClick={e => onItemOptionButtonClick(e)} />
        </Popover>
        
        <TaskItemContact contact={contact} />

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