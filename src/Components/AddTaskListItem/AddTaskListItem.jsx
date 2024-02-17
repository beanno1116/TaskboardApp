import { useState } from 'react';

import styles from './addTaskListItem.module.css';
import WELabelButton from '../WELabelButton/WELabelButton';
import AddTaskItemForm from './components/AddTaskItemForm/AddTaskItemForm';

const AddTaskListItem = ({ board,addTaskHandler }) => {
  const [isFormShowing,setIsFormShowing] = useState(false);
  
  const onCloseForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  
  return (
      
    <div className={`${styles.add_task_item} ${isFormShowing ? styles.display : ""}`}>

        
        {true && 
          <WELabelButton onClick={() => setIsFormShowing(!isFormShowing)}>
            <WELabelButton.Icon />
            <WELabelButton.Label>
              Add new task
            </WELabelButton.Label>
          </WELabelButton>
        }
        <AddTaskItemForm board={board} isFocused={isFormShowing} onSubmit={addTaskHandler} closeForm={() => setIsFormShowing(!isFormShowing)}/>
        
    </div>      
  );
}

export default AddTaskListItem;