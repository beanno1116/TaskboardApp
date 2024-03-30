import styles from '../taskListItem.module.css';
import { useGetStatusLevels } from '../../../api/api';



const TaskItemStatusIndicator = ({ status }) => {
  const {status:reqStatus,data} = useGetStatusLevels();    
  let level = data ? data.results.filter(lvl => lvl.id === status)[0] : undefined;    
  return (
      <div title={`Task status: ${level?.description && level?.description}`} className={`${styles.taskitem_status_indicator} ${level?.description && styles[level.description]}`}></div>
  )
}

export default TaskItemStatusIndicator;