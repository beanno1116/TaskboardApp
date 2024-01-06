import Column from '../../Components/Column/Column';
import styles from './taskboardView.module.css'

import { devTasks,columnData } from '../../data/testData';
import AddTaskListItem from '../../Components/AddTaskListItem/AddTaskListItem';
import { useCallback, useEffect, useReducer, useState } from 'react';
import taskboardReducer from '../../reducers/taskboardReducer';

import * as actions from '../../reducers/actions';
import { Task } from '../../data/models/task';
import { devFetchBoards } from '../../data/fakeApi';



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
                            
            </Column>

          )

        })}

          
      </div>
    );
}

export default TaskboardView;