import Column from '../../Components/Column/Column';
import styles from './taskboardView.module.css'


import useTaskboardView from './hooks/useTaskboardView';





function TaskboardView(){
  console.log("TaskboardView Rendered");
  const {status,data} = useTaskboardView();
  
  const boards = data?.results ? [...data.results] : [];
   


 

    return (
      <div className={styles.taskboard}>

        {status.isLoading && <div>Loading...</div>}
        {status.isError && <div>ERROR</div>}

        {boards.map(board => {
          return (

            <Column key={board.id} id={board.id}>

              <Column.Header>{board.title}</Column.Header>

              <Column.TaskList boardId={board.id}/>
                            
            </Column>

          )

        })}

          
      </div>
    );
}

export default TaskboardView;