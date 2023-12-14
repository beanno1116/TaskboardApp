import Column from '../../Components/Column/Column';
import styles from './taskboardView.module.css'

import { devTasks,columnData } from '../../data/testData';
import AddTaskListItem from '../../Components/AddTaskListItem/AddTaskListItem';
import { useCallback, useEffect, useReducer, useState } from 'react';
import taskboardReducer from '../../reducers/taskboardReducer';

import * as actions from '../../reducers/actions';
import { Task } from '../../data/models/task';
import { devFetchBoards } from '../../data/fakeApi';


// const addTaskItem = {
//     id:-420,
//     type: -420
// }

// const useTaskBoard = () => {
//     const [tasks,setTasks] = useState([addTaskItem]);    
    

//     const saveTask = (_task) => {
//         const updateObj = {
//             action: "update_task",
//             task: _task
//         }
//         let formData = createFormDataObj(updateObj);
//         apiDataFetch('https://taskboard.gldstools.com/api.php',{method:"POST",body:formData}).then(result => {            
//             let tmp = result;
//             debugger;
//             console.log(result);    
            
            
            
            
            
//         }).catch(error => {
//             console.error('Error:',error);
//         })
//     }


//     return [tasks,setTasks,saveTask];
// }


const useTaskboard = () => {
  const [state,dispatch] = useReducer(taskboardReducer,[...columnData]);
  

  const fetchBoardData = () => {

  }

  const updateBoard = () => {

  }


  const updateState = () => {

  }


  const addTask = (columnId) => (e,taskData) => {
    try {
      var boardIndex = -1;
      var taskIndex = -1;
      var task = new Task(columnId,taskData);
      var taskBoard;
      
      debugger;
      boardIndex = state.findIndex(col => col.id === columnId);
      if (boardIndex === -1) {
        return false;
      }
      taskBoard = state[boardIndex];
      taskIndex = taskBoard.tasks.findIndex(t => t.id === task.id);

      if (taskIndex !== -1) {
        return false;
      }
      
      
      dispatch({type:actions.ADD_NEW_TASK,task:{boardId:columnId,data:task}});
      return true;      
    } catch (error) {
      console.error();
    }    
  }

  return {boardState:state,updateState,addTask}
}



function TaskboardView(){
  console.log("TaskboardView Rendered");
  const [boards,setBoards] = useState([]);
  
   


  useEffect(() => {
    setBoards(devFetchBoards());
  },[]);


    return (
      <div className={styles.taskboard}>        

        {boards.map(column => {

          return (

            <Column key={column.id} id={column.id}>

              <Column.Header>{column.title}</Column.Header>

              <Column.TaskList listId={column.id} />

              {/* <AddTaskListItem addTaskHandler={addTask(column.id)}/> */}
                
            </Column>

          )

        })}

          
      </div>
    );
}

export default TaskboardView;