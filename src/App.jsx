import LoginView from './Views/Login/LoginView';
import TaskboardToolbar from './Views/Taskboard/TaskboardToolbar';
import TaskboardView from './Views/Taskboard/TaskboardView';
import styles from './app.module.css';

import useLocalStorage from './hooks/useLocalStorage';

import { devFetchContacts } from './data/fakeApi';

function App() {
  const [isAuth,setAuth] = useLocalStorage('is-auth',{status: false});
  const users = devFetchContacts();
  // setAuth(false);

  const TaskboardViewContainer = ({children}) => {

    return (
      <div className={styles.taskboard_view_container}>
        {children}
      </div>
    )
  }

  const handleLogin = (e,formData) => {
    const {username,password} = formData;
    const results = users.filter(u => u.email === username);
    if (results.length > 0) {
      alert(`Welcome ${results[0].first_name} ${results[0].last_name}`)
    }
    let tmp = formData;
    debugger;
    console.log(formData);
    setAuth(true);
  }

  

  return (
    <div className={styles.taskboard_app}>
      
      

      {isAuth &&
        <TaskboardViewContainer>
          <TaskboardToolbar titleText="GLDS Dev Board"/>
          <TaskboardView />
        </TaskboardViewContainer>
      }

      {!isAuth && <LoginView onSubmit={handleLogin} />}

    </div>
  )
}

export default App
