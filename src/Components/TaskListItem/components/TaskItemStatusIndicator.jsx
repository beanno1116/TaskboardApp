import styles from '../taskListItem.module.css';
import { useQuery } from 'react-query';
import { getStatuses } from '../../../appUtils';



const TaskItemStatusIndicator = ({ status }) => {
  const {isLoading,isError,data} = useQuery({
    queryKey: ['getStatuses'],
    queryFn: () => getStatuses()
  })

  
  let level = data ? data.filter(lvl => lvl.id === status)[0] : undefined;
    
  return (
      <div title={`Task status: ${level?.description && level?.description}`} className={`${styles.taskitem_status_indicator} ${level?.description && styles[level.description]}`}></div>
  )
}

export default TaskItemStatusIndicator;