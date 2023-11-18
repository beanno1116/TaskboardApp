import { useState,useEffect,useRef,useReducer } from 'react';

import { AddTaskFormProvider } from './context/AddTaskFormContext';









import styles from './addTask.module.css';




function AddTaskItem({ type,isAdding,onClick,action }) {
    
    return (
       
      <div className={`${styles.add_task_item} ${isAdding ? styles.display : ""}`}>

          {/* {!isAdding && <WELabelButton onClick={onClick}>{"add a task"}</WELabelButton>} */}
          
          {/* {isAdding && <AddTaskForm isFocused={isAdding} onClick={onClick} action={action}/>} */}
          {/* {isAdding && <AddTaskForm type={type} isFocused={isAdding} onSubmit={action}/>} */}

      </div>
     
    );
}

export default AddTaskItem;