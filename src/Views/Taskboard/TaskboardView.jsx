import Column from '../../Components/Column/Column';
import styles from './taskboardView.module.css'





















// const addTaskItem = {
//     id:-420,
//     type: -420
// }

// const useTaskBoard = () => {
//     const [tasks,setTasks] = useState([addTaskItem]);    
    

//     const saveTask = (_task) => {
//         const updateObj = {
//             action: "update_task",
//             task: _task
//         }
//         let formData = createFormDataObj(updateObj);
//         apiDataFetch('https://taskboard.gldstools.com/api.php',{method:"POST",body:formData}).then(result => {            
//             let tmp = result;
//             debugger;
//             console.log(result);    
            
            
            
            
            
//         }).catch(error => {
//             console.error('Error:',error);
//         })
//     }


//     return [tasks,setTasks,saveTask];
// }



function TaskboardView(){
   


    return (
      <div className={styles.taskboard}>
        {/* <h1 style={{color:"limegreen"}}>Taskboard</h1> */}
        <Column>
          <Column.header>
            Column 1
          </Column.header>
          <Column.list></Column.list>
        </Column>

        <Column>
          <Column.header>
            Column 2
          </Column.header>
          <Column.list></Column.list>
        </Column>
        
        <Column>
          <Column.header>
            Column 3
          </Column.header>
          <Column.list></Column.list>
        </Column>

      </div>
        // <Taskboard>

        //     <Column heading={"What we are working on"} addGroupAction={e => addGroupButtonEvent(e,"dev")}>                
        //         <TaskList taskType={"dev"}/>
        //     </Column>


        //     <Column heading={"How can we help?"} addGroupAction={e => addGroupButtonEvent(e,"gen")}>
        //         {/* <TaskList taskType={"gen"}/>                 */}
        //     </Column>
    
        // </Taskboard>
    );
}

export default TaskboardView;