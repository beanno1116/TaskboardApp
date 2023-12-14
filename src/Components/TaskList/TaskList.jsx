
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './taskList.module.css';
// import ListItem from './ListItem';


import AddTaskListItem from '../AddTaskListItem/AddTaskListItem';
import useTaskList from './hooks/useTaskList';

const TaskList = ({listId}) => {
  const {tasks,addTask} = useTaskList(listId);   


  

  const onListItemDataChange = (e) => {
    console.log("onListItemDataChange");
    console.log(e);
  }

  return (
    <>
      <div className={styles.tasklist_body}>
        <div className={styles.tasklist}>
          
            {tasks.map(task => {
              return (
                <TaskListItem
                  key={task.id}
                  listId={listId}
                  task={task}
                  onClick={() => {}}
                  onChange={(e) => onListItemDataChange(e)}
                />
              )
            })}
          
          </div>        
      </div>
      <AddTaskListItem addTaskHandler={addTask} />
    </>
  );
}

// TaskList.Task = TaskListItem;

export default TaskList;