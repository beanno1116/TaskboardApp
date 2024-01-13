import LoginView from './Views/Login/LoginView';
import TaskboardToolbar from './Views/Taskboard/TaskboardToolbar';
import TaskboardView from './Views/Taskboard/TaskboardView';
import styles from './app.module.css';

import useLocalStorage from './hooks/useLocalStorage';

import { devFetchContacts } from './data/fakeApi';
import TaskboardApp from './Views/TaskboardApp/TaskboardApp';






function App() {
  const [isAuth,setAuth] = useLocalStorage('is-auth',false);
  const users = devFetchContacts();


  const TaskboardViewContainer = () => {

    return (
      <div className={styles.taskboard_view_container}>
        <TaskboardToolbar titleText="GLDS Dev Board" />
        <TaskboardView />
      </div>
    )
  }

  const handleLogin = (e,formData) => {
 

    let fd = new FormData();

    fd.append('username',formData.username);
    fd.append('password',formData.password);
    fd.append('action','login');

    fetch("http://172.105.4.73/api/taskboard/api.php",{
      method: 'POST',
      body: fd
    })
    .then((response) => response.json())
    .then(data => {
      //handle data
      if (data.success){
        localStorage.setItem("auth",JSON.stringify(data.data));
        setAuth(true);
      }
      
      console.log(data);
    })
    .catch(error => {
      //handle error
    });

  }

  return (
    
    <TaskboardApp>
      {isAuth ? <TaskboardViewContainer /> : <LoginView onSubmit={handleLogin} />}
    </TaskboardApp>
    
  )
}

export default App
