import Column from '../../Components/Column/Column';
import styles from './taskboardView.module.css'

import { devTasks,columnData } from '../../data/testData';





















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

        {columnData.map(column => {

          return (

            <Column key={column.id} id={column.id}>

              <Column.Header>{column.title}</Column.Header>

              <Column.TaskList listId={column.id} tasks={column.tasks} />

                {/* {column.tasks.map((task,index) => {

                  return (

                    <Column.TaskListItem key={`${task.id}-${index}`} task={task}>

                    <Column.TaskListItem.Status status={task.status} />

                    <Column.TaskListItem.Content title={task.title} content={task.content} />   

                    <Column.TaskListItem.Nav>

                      <Column.TaskListItem.OptionButton rowID={1} onClick={() => {}} />

                      <Column.TaskListItem.Contact contact={"Ben Klimo"} />

                    </Column.TaskListItem.Nav>

                  </Column.TaskListItem>

                  )

                })}

              </Column.TaskList> */}

            </Column>

          )

        })}

          {/* <Column>
            <Column.Header>Active Development</Column.Header>
            <Column.TaskList>
              {devTasks.map((task,index) => {
                return (
                  <Column.TaskListItem key={`${task.id}-${index}`} task={task}>
                    <Column.TaskListItem.Status status={task.status} />
                    <Column.TaskListItem.Content title={task.title} content={task.content} />                                                            
                    <Column.TaskListItem.Nav>
                      <Column.TaskListItem.OptionButton rowID={1} onClick={() => {}} />
                      <Column.TaskListItem.Contact contact={"Ben Klimo"} />
                    </Column.TaskListItem.Nav>
                  </Column.TaskListItem>
                )
              })}
            </Column.TaskList>
          </Column> */}
    

        {/* <Column>
          <Column.Header>
            Column 1
          </Column.Header>
          <Column.TaskList>
            <Column.TaskListItem></Column.TaskListItem>
          </Column.TaskList>
        </Column>

        <Column>
          <Column.Header>
            Column 2
          </Column.Header>
          <Column.TaskList></Column.TaskList>
        </Column>
        
        <Column>
          <Column.Header>
            Column 3
          </Column.Header>
          <Column.TaskList></Column.TaskList>
        </Column> */}

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