
import styles from './taskList.module.css';
// import ListItem from './ListItem';

const TaskList = ({children}) => {
  return (
    <div className={styles.tasklist_body}>
       <div className={styles.tasklist}>
        {children}
        {/* <ListItem></ListItem> */}
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