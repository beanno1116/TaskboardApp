import { useEffect, useState } from "react";
import { devFetchTasks } from "../../../data/fakeApi";
import { Task } from "../../../data/models/task";
import axios from "axios";
import { API_ENDPOINT } from "../../../config";
import { createFormDataObj } from "../../../Utilities";
import { useAuth } from "../../../hooks/useAuth";
import { getTasks, swapIndex, toFormData } from "../../../appUtils";
import { useQuery,useQueryClient } from "react-query";

let history = [];

const ADD_TASK_ACTION = "addTask";
const SAVE_TASKS_ACTION = "saveTasks";
const UPDATE_TASK_ACTION = "updateTask"
const DEL_TASK_ACTION = "deleteTask";

const add = (task,handler) => {
  try {
    var fd = createFormDataObj(task);
    fd.append("action",ADD_TASK_ACTION);
    axios.post(API_ENDPOINT,fd,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {      
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");
      if (response.data.success) {
        handler();
      }
    })
    .catch((error) => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}
const del = (taskId,handler) => {
  try {
    var fd = createFormDataObj({taskId:taskId,action:DEL_TASK_ACTION});
    axios.post(API_ENDPOINT,fd,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");
      if (response.data.success) {
        handler();
      }
    })
    .catch((error) => {
      console.error(error);
    });
  } catch (error) {
    onsole.error(error);
  }
}
const upDate = (update,handler) => {
  try {
    var fd = createFormDataObj({update});
    fd.append("action",UPDATE_TASK_ACTION);
    axios.post(API_ENDPOINT,fd,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {      
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");
      if (response.data.success) {
        handler();
      }
    })
    .catch((error) => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}
const saveTasks = (tasks) => {
  try {    
    var fd = toFormData(tasks);      
    fd.append("action",SAVE_TASKS_ACTION);
    axios.get(API_ENDPOINT,{params:{action:"getTasks",boardId:1}}).then(response => {
      debugger;
      let tmp = response.data;
      

    })
    // axios.post(API_ENDPOINT,fd,{
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // })
    // .then(response => {      
    //   debugger;
    //   if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");
    //   if (response.data.success) {
    //     handler(oldTasks => [...oldTasks,response.data.data]);
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  } catch (error) {
    console.error(error);
  }
}

const useTaskList = (boardId) => {
  // debugger;
  const auth = useAuth();
  const [tasks,setTasks] = useState([]);  
  const { isLoading, error, data } = useQuery({
    queryKey: [`${boardId}`],
    queryFn: () => getTasks(boardId)
  })

  const queryClient = useQueryClient();




  const addTask = (task) => {
    try {      
      const newTask = new Task(boardId,task);
      newTask.authorId = auth.token;
      history = [...history,{event:"addtask",task}];     
      add(newTask,() => {        
        queryClient.setQueryData([`${task.type}`],tasks => [...tasks,newTask]);
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  const deleteTask = (taskId) => {   
    try {
      if (taskId.length === 0) throw new Error("Task id required");
      del(taskId,() => {
        queryClient.setQueryData([`${boardId}`],tasks => {                    
          return tasks.filter(t => t.id !== taskId);
        });
      });      
    } catch (error) {
      console.error(error.message);
    }
  }

  const updateTask = (taskId,update) => {
    
    const tasksCopy = [...data];    
    const newState = tasksCopy.map(t => {
      if (t.id === taskId) {        
        return {...t,...update};
      }
      return t;
    })    
    debugger;
    const mutatedTask = newState.filter(t => t.id === taskId)[0];
    queryClient.setQueryData([`${boardId}`],tasks => [...newState]);
    // upDate({taskId,update},() => {        
    //   queryClient.setQueryData([`${boardId}`],tasks => [...newState]);
    // });
    // setTasks([...newState])
  }

  const action = {
    add(task){

    },
    delete(taskId){

    },
    update(taskId,update){

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

  return {isLoading,data,tasks,addTask,deleteTask,updateTask,action,update};
}

export default useTaskList;