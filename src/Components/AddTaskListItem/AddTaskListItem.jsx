import { useState } from 'react';

import styles from './addTaskListItem.module.css';
import WELabelButton from '../WELabelButton/WELabelButton';
import AddTaskItemForm from './components/AddTaskItemForm/AddTaskItemForm';

const AddTaskListItem = ({ addTaskHandler }) => {
  const [isFormShowing,setIsFormShowing] = useState(false);
  
  

  
  return (
      
    <div className={`${styles.add_task_item} ${isFormShowing ? styles.display : ""}`}>

        {/* {!isAdding && <WELabelButton onClick={() => {}}>{"add a task"}</WELabelButton>} */}
        {!isFormShowing && 
          <WELabelButton onClick={() => setIsFormShowing(!isFormShowing)}>
            <WELabelButton.Icon />
            <WELabelButton.Label>
              Add new task
            </WELabelButton.Label>
          </WELabelButton>
        }
        
        {isFormShowing && <AddTaskItemForm isFocused={isFormShowing} onSubmit={addTaskHandler} closeForm={() => setIsFormShowing(!isFormShowing)}/>}
        {/* {isAdding && <AddTaskForm type={type} isFocused={isAdding} onSubmit={action}/>} */}

    </div>      
  );
}

export default AddTaskListItem;