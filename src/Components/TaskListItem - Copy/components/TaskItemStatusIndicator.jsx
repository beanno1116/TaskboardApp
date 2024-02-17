import styles from '../taskListItem.module.css';

const statusLevels = [
  {
    id: 1,
    title:"new",
    color: "rgb(255, 255, 255)"
  },
  {
    id: 2,
    title:"seen",
    color: "rgba(0, 150, 255,1)"
  },
  {
    id: 3,
    title:"started",
    color: "rgba(255, 240, 31,1);"
  },
  {
    id: 4,
    title:"holding",
    color: "rgba(255,173,0,1)"
  },
  {
    id: 5,
    title:"complete",
    color: "rgba(68,214,44,1)"
  },
  {
    id: 6,
    title:"delayed",
    color: "rgba(255, 49, 49,1)"
  }
]

const TaskItemStatusIndicator = ({ status }) => {
  let level = statusLevels.filter(lvl => lvl.id === status)[0];
    
  return (
      <div title={`Task status: ${level?.title && level?.title}`} className={`${styles.taskitem_status_indicator} ${level?.title && styles[level.title]}`}></div>
  )
}

export default TaskItemStatusIndicator;