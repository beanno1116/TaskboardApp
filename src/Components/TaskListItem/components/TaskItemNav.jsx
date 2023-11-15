import styles from '../taskListItem.module.css';



const TaskItemNav = ({ children })  => {
  return (
      <nav className={styles.taskitem_nav}>
          {children}
      </nav>
  )
}

export default TaskItemNav;