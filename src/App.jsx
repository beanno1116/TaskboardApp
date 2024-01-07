import LoginView from './Views/Login/LoginView';
import TaskboardToolbar from './Views/Taskboard/TaskboardToolbar';
import TaskboardView from './Views/Taskboard/TaskboardView';
import styles from './app.module.css';

import useLocalStorage from './hooks/useLocalStorage';

import { devFetchContacts } from './data/fakeApi';

function App() {
  const [isAuth,setAuth] = useLocalStorage('is-auth',false);
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

    async function fetchData(_url,_options) {
      try {
          const res = await fetch(_url,_options);
          const json = await res.text();
          
          // const json = await res.json();
          return json;
      } catch (e) {
          console.log(e);
          return e;            
      }        
  }

  fetch("http://172.105.4.73/api/taskboard/api.php",{method:"GET"})
  .then((response) => response.text())
  .then(data => {
    //handle data
    debugger;
    console.log(data);
  })
  .catch(error => {
    //handle error
  });

  // fetchData("http://172.105.4.73/api/taskboard/api.php", {method:"GET",mode: 'no-cors'}).then(response => {
  //   debugger;
  //   console.log(response);
  // })

    // const {username,password} = formData;
    // const results = users.filter(u => u.email === username);
    // if (results.length > 0) {
    //   alert(`Welcome ${results[0].first_name} ${results[0].last_name}`)
    // }
    // let tmp = formData;
    // debugger;
    // console.log(formData);
    // setAuth(true);
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
