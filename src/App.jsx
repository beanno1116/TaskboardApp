import TaskboardToolbar from './Views/Taskboard/TaskboardToolbar';
import TaskboardView from './Views/Taskboard/TaskboardView';
import styles from './app.module.css';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isAuth] = useLocalStorage('is-auth',{status: false});

  const TaskboardViewContainer = ({children}) => {

    return (
      <div className={styles.taskboard_view_container}>
        {children}
      </div>
    )
  }

  

  return (
    <div className={styles.taskboard_app}>
      {isAuth && 
        <TaskboardViewContainer>
          <TaskboardToolbar />
          <TaskboardView />
        </TaskboardViewContainer>        
      }
        {/* <WETaskboardNav />
        <TaskboardAppProvider>
            <WETaskboard />            
        </TaskboardAppProvider> */}
    </div>
  )
}

export default App
