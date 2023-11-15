import styles from '../taskListItem.module.css';

const statusLevels = [
  {title:"new"},
  {title:"seen"},
  {title:"started"},
  {title:"holding"},
  {title:"complete"},
  {title:"delayed"}
]

const TaskItemStatusIndicator = ({ status }) => {
  let level = statusLevels[status];    
  return (
      <div title={`${level?.title && statusLevels[status].title}`} className={`${styles.taskitem_status_indicator} ${level?.title && styles[statusLevels[status].title]}`}></div>
  )
}

export default TaskItemStatusIndicator;