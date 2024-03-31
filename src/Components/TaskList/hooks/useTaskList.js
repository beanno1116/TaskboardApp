import { Task } from "../../../data/models/task";

import { API_ENDPOINT } from "../../../config";
import { createFormDataObj } from "../../../Utilities";
import { useAuth } from "../../../hooks/useAuth";
import { swapIndex,deleteRequest,createRequest,updateRequest } from "../../../appUtils";
import { useQueryClient,useMutation } from "react-query";
import { toast } from "../../WEToast/WEToast";
import { useGetTasks } from "../../../api/api";

let history = [];

const ADD_TASK_ACTION = "addTask";
const SAVE_TASKS_ACTION = "saveTasks";
const UPDATE_TASK_ACTION = "updateTask"
const DEL_TASK_ACTION = "deleteTask";





const useTaskList = (boardId) => {  
  const auth = useAuth();
  const {status,data} = useGetTasks(boardId);  


  const queryClient = useQueryClient();
  

  const actions = {
    add(task){
      try {      
        const newTask = new Task(boardId,task);
        newTask.authorId = auth.token;
        var fd = createFormDataObj(newTask);

        fd.append("action",ADD_TASK_ACTION);

        history = [...history,{event:"addtask",newTask}];   

        createRequest(API_ENDPOINT,fd,(message) => {  
          queryClient.setQueryData([`board-${task.type}`],tasks => ({...tasks,results:[...tasks.results,newTask]}));
          toast.success(message,{
            position: toast.position.TOP_RIGHT,
            title: "Success"
          })                        
        })
        
      } catch (error) {
        console.error(error.message);
      }
    },
    delete(taskId){
      try {
        if (taskId.length === 0) throw new Error("Task id required");
        var fd = createFormDataObj({taskId:taskId,action:DEL_TASK_ACTION});        
        deleteRequest(API_ENDPOINT,fd,(message) => {
          toast.success(message,{
            position: toast.position.TOP_RIGHT,
            title: "Success"
          })                    
          queryClient.setQueryData([`board-${boardId}`],tasks => {                    
            return {...tasks,results:[...tasks.results.filter(t => t.id !== taskId)]};
          });
        });      
      } catch (error) {
        console.error(error.message);
      }
    },
    update(taskId,update){      
      const tasksCopy = [...data.results];    
      const newState = tasksCopy.map(t => {
        if (t.id === taskId) {        
          return {...t,...update};
        }
        return t;
      })
      var fd = createFormDataObj({update:JSON.stringify({taskId,update})});
      fd.append("action",UPDATE_TASK_ACTION);
      
      
      updateRequest(API_ENDPOINT,fd,() => {        
        queryClient.setQueryData([`board-${boardId}`],tasks => ({...tasks,results: [...newState]}));
        toast.success("Task updated successfully",{
          position: toast.position.TOP_RIGHT,
          title: "Success"
        })  
        
      })
    }
  }


  const update = {
    position(id,oldPosition,newPosition){
      let oldTasks = swapIndex(tasks,oldPosition,newPosition);      
      let newTasks = oldTasks.map((task,index) => {
        return {...task,position:index}
      })      
      setTasks([...newTasks]);
      saveTasks(newTasks);
      console.log(newTasks);
    }
  }

  return {status,data,actions,update};
}

export default useTaskList;