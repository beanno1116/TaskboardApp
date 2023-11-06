import styles from '../column.module.css';
import ListItem from './ListItem';

const ColumnList = () => {
  return (
    <div className={styles.body}>
       <div className={styles.column_list}>
        <ListItem></ListItem>
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

export default ColumnList;