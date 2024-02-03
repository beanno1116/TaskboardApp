import styles from './column.module.css';
import TaskList from '../TaskList/TaskList';
import ColumnHeader from './component/ColumnHeader';
import TaskListItem from '../TaskListItem/TaskListItem';



function Column({children}){
    
 

    return (
        <div className={styles.column}>
          {children}
        </div>
    );
}

Column.Header = ColumnHeader;
Column.TaskList = TaskList;
Column.TaskListItem = TaskListItem;

export default Column;