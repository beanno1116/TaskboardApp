
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './taskList.module.css';
// import ListItem from './ListItem';


import AddTaskListItem from '../AddTaskListItem/AddTaskListItem';
import useTaskList from './hooks/useTaskList';
import TasklistItemMenu from '../menus/TaskListItemMenu/TasklistItemMenu';
import { useEffect, useRef } from 'react';
import { sortTasksByPosition } from '../../appUtils';
import { useAuth } from '../../hooks/useAuth';


const DATA_TRANSFER_TEXT = "text/plain";

const TaskList = ({listId}) => {
  const auth = useAuth();
  console.log(`Task List ${listId} rendered`);
  const {isLoading,data,tasks,addTask,deleteTask,updateTask,update} = useTaskList(listId);   

  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragOverItemOld = useRef();
  const dragItemDrop = useRef();

  const onDragOverEvent = (e,id) => {
    if (auth.user.level < 1) return;
    e.preventDefault();
    console.log("Drag over event");
    // dragOverItemOld.current = dragOverItem.current;
    // dragOverItem.current = id;
  }

  const onDragEnterEvent = (e,id) => {
    if (auth.user.level < 1) return;
    console.log("Drag enter event. Entered item: " + data[id].title );
    dragOverItem.current = id;
  }

  const onDropEvent = (e) => {
    if (auth.user.level < 1) return;
    var dragItem = JSON.parse(e.dataTransfer.getData(DATA_TRANSFER_TEXT));    
    let doItem = dragOverItem.current;
    let tasksCopy = [...data];
    let taskDropped = tasksCopy[dragItem.from];
    let taskOver = tasksCopy[doItem];
    let newPosition = parseInt(taskOver.position);

    update.position(dragItem.id,dragItem.from,newPosition);    
    
    console.log("Drop event");
  }

  const onDragStart = (e,id) => {
    if (auth.user.level < 1) return;
    console.log("Drag started");    
    let task = data[id];
    dragItem.current = task;
    let dt = JSON.stringify({id:task.id,from:id});
    e.dataTransfer.setData(DATA_TRANSFER_TEXT,dt);
    e.dataTransfer.effectAllowed = 'move'; 
  }


  return (
    <>
      <div className={styles.tasklist_body}   onDrop={onDropEvent}>

        <div className={styles.tasklist_wrapper}>

          <ul className={styles.tasklist}>
            
              {/* {isLoading && <h1>Loading...</h1>} */}
            
              {data && data.filter(d => d.type === listId).sort(sortTasksByPosition).map((task,index) => {                                
                return (
                 
                  <TaskListItem
                    key={task.id}
                    task={task}
                    boardId={listId}
                    menu={<TasklistItemMenu task={task} onChange={() => {}} deleteTask={deleteTask} updateTask={updateTask} />}
                    draggable
                    onDragOver={onDragOverEvent}
                    onDragStart={(e) => onDragStart(e,index)}
                    onDragEnter={(e) => onDragEnterEvent(e,index)}                
                    // onDrop={onDropEvent}
                  />
                )
              })}
                          
          </ul>

        </div>

        {auth.user.level > 0 ? <AddTaskListItem board={listId} addTaskHandler={addTask} /> : null}
      </div>
    </>
  );
}

// TaskList.Task = TaskListItem;

export default TaskList;