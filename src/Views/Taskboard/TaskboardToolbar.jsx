

import styles from './taskboardView.module.css';

const TaskboardToolbar = ({ ...props }) => {
  return (
    <div className={styles.taskboard_toolbar}>
        <div className={styles.taskboard_toolbar_container}>Logo</div>
        <div className={styles.taskboard_toolbar_container}>Title</div>
        <div className={styles.taskboard_toolbar_container}>
          <span>0</span>
        </div>
    </div>
  );
}

export default TaskboardToolbar;