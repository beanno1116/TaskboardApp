import { useState } from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import styles from './taskList.module.css';
// import ListItem from './ListItem';

const TaskList = ({listId,onChange,tasks=[]}) => {
  const [listItems, setListItems] = useState(tasks);

  const onListItemDataChange = (e) => {
    console.log("onListItemDataChange");
    console.log(e);
  }

  return (
    <div className={styles.tasklist_body}>
       <div className={styles.tasklist}>
        
          {listItems.map(task => {
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
  );
}

// TaskList.Task = TaskListItem;

export default TaskList;