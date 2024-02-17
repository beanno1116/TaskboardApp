import styles from '../taskListItem.module.css';

const Title = ({ children }) => {
  return (
    <div title={children} className={styles.title}>
      <div>{children}</div>
      <h1>{"taskitem"}</h1>          
    </div>
  )
}

const Body = ({ children }) => {
  return (
    <div className={styles.body}>
        {children}
    </div>
  )
}





const TaskItemContent = ({ title,content }) => {
  return (
      <div className={styles.taskitem_content}>            
          <Title>{title}</Title>
          <Body>{content}</Body>
      </div>
  )
}

export default TaskItemContent;