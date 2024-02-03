import { useEffect, useState } from "react";
import { devFetchTasks } from "../../../data/fakeApi";
import { Task } from "../../../data/models/task";
import axios from "axios";
import { API_ENDPOINT } from "../../../config";
import { createFormDataObj } from "../../../Utilities";
import { useAuth } from "../../../hooks/useAuth";
import { indexOfObjectInArray, sortTasksByPosition, swapIndex, toFormData } from "../../../appUtils";

let history = [];

const ADD_TASK_ACTION = "addTask";
const SAVE_TASKS_ACTION = "saveTasks";
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
        handler(oldTasks => [...oldTasks,response.data.data]);
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
        handler(oldTasks => [...oldTasks.filter(task => task.id !== taskId)]);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  } catch (error) {
    onsole.error(error);
  }
}
const saveTasks = (tasks) => {
  try {    
    var fd = toFormData(tasks);      
    fd.append("action",SAVE_TASKS_ACTION);
    axios.post(API_ENDPOINT,fd,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {      
      debugger;
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");
      if (response.data.success) {
        handler(oldTasks => [...oldTasks,response.data.data]);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

const useTaskList = (boardId) => {
  const auth = useAuth();
  const [tasks,setTasks] = useState([]);

  
  useEffect(() => {
    setTasks(devFetchTasks(boardId));
  },[boardId]);



  const addTask = (e,task) => {
    try {
      const newTask = new Task(boardId,task);
      newTask.authorId = auth.token;
      history = [...history,{event:"addtask",task}];      
      add(newTask,setTasks);
    } catch (error) {
      console.error(error.message);
    }
  }

  const deleteTask = (taskId) => {
    try {
      if (taskId.length === 0) throw new Error("Task id required");
      del(taskId,setTasks);      
    } catch (error) {
      console.error(error.message);
    }
  }

  const updateTask = (taskId,update) => {
    const tasksCopy = [...tasks];    
    const newState = tasksCopy.map(t => {
      if (t.id === taskId) {        
        return {...t,...update};
      }
      return t;
    })    
    setTasks([...newState])
  }

  const action = {
    add(e,task){

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

  return {tasks,addTask,deleteTask,updateTask,action,update};
}

export default useTaskList;