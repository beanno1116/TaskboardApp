import React, { useContext, useState } from 'react';

import LoginView from '../Login/LoginView';

import styles from '../../app.module.css';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import TaskboardToolbar from '../Taskboard/TaskboardToolbar';
import TaskboardView from '../Taskboard/TaskboardView';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { API_ENDPOINT } from '../../config';


const TaskboardViewContainer = () => {

  return (
    <div className={styles.taskboard_view_container}>        
      <TaskboardToolbar titleText="GLDS Dev Board" />
      <TaskboardView />
    </div>
  )
}

const TaskboardApp = () => {
  // const {handleLogin,handleLogout,isLoading,isError,isSuccess} = useAuth();

  const [isAuth,setIsAuth] = useState(false);

  const handleLogin = () => {
  //   debugger;
  //   axios
  // .post(API_ENDPOINT, {
  //   id: 11,
  //   name: "Tom Brady",
  //   username: "Brad",
  //   email: "tombrad@asd.com",
  // })
  // .then(function(response){
  //   let tmp = response;
  //   debugger;
  //   console.log(typeof tmp);
  //   // displayOutput(response))
  // }) 
  // .catch((err) => console.log(err));


    axios.post(API_ENDPOINT, {
      username: 'benk@glds.net',
      password: 'devUser',
      action: "login"
    },{headers:{'Content-Type': 'application/json'}})
    .then(function (response) {
      debugger;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


    // let fd = new FormData();

    // fd.append('username',"benk@glds.net");
    // fd.append('password',"devUser");
    // // fd.append('username',formData.username);
    // // fd.append('password',formData.password);
    // fd.append('action','login');
    // // debugger;
    // fetch("http://172.105.4.73/api/taskboard/api.php",{
    //   method: 'POST',
    //   body: fd
    // })
    // .then((response) => {
    //   debugger;
    //   return response.json();
    // })
    // .then(data => {
    //   debugger;
    //   //handle data
    //   if (data.success){
    //     localStorage.setItem("auth",JSON.stringify(data.data));
    //     // setAuth(true);
    //   }
      
    //   console.log(data);
    // })
    // .catch(error => {
    //   debugger;
    //   console.log(error);
    //   //handle error
    // });
    

  }

  const handleSignup = () => {

  }

  return (
    <div className={styles.taskboard_app}>

       {isAuth ? 
        <TaskboardViewContainer /> : 
        <LoginView onLogin={handleLogin} onSignup={handleSignup} />
       }
       
    </div>
  );
}

export default TaskboardApp;