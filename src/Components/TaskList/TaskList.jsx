
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './taskList.module.css';
import { CSSTransition,TransitionGroup,Transition } from 'react-transition-group';
// import ListItem from './ListItem';


import AddTaskListItem from '../AddTaskListItem/AddTaskListItem';
import useTaskList from './hooks/useTaskList';
import TasklistItemMenu from '../menus/TaskListItemMenu/TasklistItemMenu';
import { createRef, useEffect, useRef } from 'react';
import { sortTasksByPosition } from '../../appUtils';
import { useAuth } from '../../hooks/useAuth';


const DATA_TRANSFER_TEXT = "text/plain";






const TaskList = ({boardId}) => {
  console.log(`Task List ${boardId} rendered`);

  const auth = useAuth();
  const {status,data,update,actions} = useTaskList(boardId);   
  

  const prepareTasks = () => {
    let tmpTasks = data?.results ? data.results : [];
    return tmpTasks.map(t => ({...t,ref:createRef(null)}));
  }

  const tasks = prepareTasks();
  const meta = data?.meta ? data.meta : {};

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
                          
              <TransitionGroup>

                {tasks && tasks.filter(d => d.type === boardId).sort(sortTasksByPosition).map((task,index) => {
                
                  return (
                    <CSSTransition key={task.id} classNames={{
                      enter: styles.myEnter,
                      enterActive: styles.myEnterActive,
                      enterDone: styles.myEnterDone,
                      exit: styles.myExit,
                      exitActive: styles.myExitActive,
                      exitDone: styles.myExitDone
                    }} timeout={900} nodeRef={task.ref}>

                    <div ref={task.ref}>
                    <TaskListItem
                        key={task.id}                        
                        task={task}
                        boardId={boardId}
                        menu={(close,open) => <TasklistItemMenu 
                          task={task} 
                          onChange={() => {}} 
                          onClose={close}
                          onOpen={open}
                          deleteTask={actions.delete} 
                          updateTask={actions.update} 
                        />}
                        draggable
                        onDragOver={onDragOverEvent}
                        onDragStart={(e) => onDragStart(e,index)}
                        onDragEnter={(e) => onDragEnterEvent(e,index)}                
                        // onDrop={onDropEvent}
                      />
                    </div>
                      

                    </CSSTransition>
                  )
                })}

              </TransitionGroup>
                          
          </ul>
          


        </div>

        {auth.user.level > 0 ? <AddTaskListItem board={boardId} addTaskHandler={actions.add} /> : null}
      </div>
    </>
  );
}

// TaskList.Task = TaskListItem;

export default TaskList;