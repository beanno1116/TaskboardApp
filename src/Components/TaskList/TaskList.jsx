import { useState } from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './taskList.module.css';
// import ListItem from './ListItem';

const TaskList = ({listId,tasks=[]}) => {
  const [listItems, setListItems] = useState(tasks);

  const onListItemDataChange = (e) => {
    console.log("onListItemDataChange");
    console.log(e);
  }

  return (
    <div className={styles.tasklist_body}>
       <div className={styles.tasklist}>
         {/* {children} */}
        
          {listItems.map(task => {
            return (
              <TaskListItem 
                key={task.id}
                task={task}
                onClick={() => {}}
                onChange={(e) => onListItemDataChange(e)}
              />
            )
          })}
        
       
        
            {/* <ul>
                {tasks.map(task => {                    
                    return (
                        <TaskItem 
                            key={task.id}                                             
                            task={task}
                            type={taskType}
                            onClick={taskListEventHandler}                            
                            onDragStart={e => onDragStartHandler(e,task.id)}
                            onDragEnter={e => onDragEnterHandler(e,task.id)}
                            onDrop={e => onDropHandler(e,task.id)}
                        />
                    )
                })}
            </ul>
            <AddTaskItem
                key={1}
                type={taskType}
                onClick={showAddTaskForm}
                isAdding={isAddTaskFormShowing}
                action={addTaskItem}
            /> */}
        </div>
    </div>
  );
}

// TaskList.Task = TaskListItem;

export default TaskList;