import Column from '../../Components/Column/Column';
import styles from './taskboardView.module.css'

import { devTasks,columnData } from '../../data/testData';
import AddTaskListItem from '../../Components/AddTaskListItem/AddTaskListItem';
import { useReducer, useState } from 'react';
import taskboardReducer from '../../reducers/taskboardReducer';



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
  const [boardData,setBoardData] = useState(columnData);

  const fetchBoardData = () => {

  }

  const updateBoard = () => {

  }


  const updateState = () => {

  }

  const addTask = (colId,taskdata) => {
    const tmpColId = colId;
    const tmpTaskData = taskdata;
    const tmpRes = columnData.filter(tl => tl.id === colId);
    debugger;
    console.log("");
  }



  return {boardState:state,updateState,addTask}
}



function TaskboardView(){
  const {boardState,updateState,addTask} = useTaskboard();
   
  const handleOnAddEvent = (e) => {

  }


    return (
      <div className={styles.taskboard}>        

        {boardState.map(column => {

          return (

            <Column key={column.id} id={column.id}>

              <Column.Header>{column.title}</Column.Header>

              <Column.TaskList listId={column.id} tasks={column.tasks} onChange={() => {}} />

              <AddTaskListItem type={column.id} onAdd={addTask}/>
                
            </Column>

          )

        })}

          
      </div>
    );
}

export default TaskboardView;