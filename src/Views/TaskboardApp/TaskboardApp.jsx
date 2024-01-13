import React from 'react';

import styles from '../../app.module.css';

const TaskboardApp = ({ children }) => {
  return (
    <div className={styles.taskboard_app}>
       {children}
    </div>
  );
}

export default TaskboardApp;