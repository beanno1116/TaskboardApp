import React, { useContext, useState } from 'react';

import LoginView from '../Login/LoginView';

import styles from '../../app.module.css';

import TaskboardToolbar from '../Taskboard/TaskboardToolbar';
import TaskboardView from '../Taskboard/TaskboardView';
import {useAuth} from '../../hooks/useAuth';




const TaskboardViewContainer = () => {

  return (
    <div className={styles.taskboard_view_container}>        
      <TaskboardToolbar titleText="GLDS Dev Board" />
      <TaskboardView />
    </div>
  )
}

const TaskboardApp = () => {
  const auth = useAuth();

  return (
    <div className={styles.taskboard_app}>

       {!auth.token ?
        <LoginView /> :
        <TaskboardViewContainer />
       }
       
    </div>
  );
}

export default TaskboardApp;