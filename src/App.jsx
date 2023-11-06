import TaskboardView from './Views/Taskboard/TaskboardView';
import styles from './app.module.css';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [isAuth] = useLocalStorage('is-auth',{status: false});

  

  return (
    <div className={styles.taskboard_app}>
      {isAuth && <TaskboardView />}
        {/* <WETaskboardNav />
        <TaskboardAppProvider>
            <WETaskboard />            
        </TaskboardAppProvider> */}
    </div>
  )
}

export default App
