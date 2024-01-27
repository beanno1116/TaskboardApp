
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './taskList.module.css';
// import ListItem from './ListItem';


import AddTaskListItem from '../AddTaskListItem/AddTaskListItem';
import useTaskList from './hooks/useTaskList';
import TasklistItemMenu from '../menus/TaskListItemMenu/TasklistItemMenu';
import { useEffect } from 'react';

const TaskList = ({listId}) => {
  const {tasks,addTask,deleteTask,updateTask} = useTaskList(listId);   


  

 

  return (
    <>
      <div className={styles.tasklist_body}>

        <div className={styles.tasklist_wrapper}>

          <ul className={styles.tasklist}>
            
              {tasks.map(task => {
                return (
                  <TaskListItem
                    key={task.id}
                    listId={listId}
                    task={task}
                    menu={<TasklistItemMenu task={task} onChange={() => {}} deleteTask={deleteTask} updateTask={updateTask} />}
                    onClick={updateTask}                
                  />
                )
              })}
            
          </ul>

        </div>

        <AddTaskListItem addTaskHandler={addTask} />
      </div>
    </>
  );
}

// TaskList.Task = TaskListItem;

export default TaskList;