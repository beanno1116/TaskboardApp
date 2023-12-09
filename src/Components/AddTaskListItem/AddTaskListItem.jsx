import React, { useState } from 'react';

import styles from './addTaskListItem.module.css';
import WELabelButton from '../WELabelButton/WELabelButton';
import AddTaskItemForm from './components/AddTaskItemForm/AddTaskItemForm';

const AddTaskListItem = ({ type,onAdd,...props }) => {
  const [isFormShowing,setIsFormShowing] = useState(false);
  
  // const [showForm,setShowForm] = useState(false);
  const handleFormSubmit = (e,formData) => {
    console.log(formData);
    onAdd(type,formData);
    debugger;
    let tmpAdd = add;

    debugger;
    console.log(e);
  }
  
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
        
        {isFormShowing && <AddTaskItemForm isFocused={isFormShowing} onSubmit={handleFormSubmit} />}
        {/* {isAdding && <AddTaskForm type={type} isFocused={isAdding} onSubmit={action}/>} */}

    </div>      
  );
}

export default AddTaskListItem;