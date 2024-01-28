import { useEffect, useState } from "react";
import { devFetchTasks } from "../../../data/fakeApi";
import { Task } from "../../../data/models/task";
import axios from "axios";
import { API_ENDPOINT } from "../../../config";
import { createFormDataObj } from "../../../Utilities";
import { useAuth } from "../../../hooks/useAuth";

let history = [];

const ADD_TASK_ACTION = "addTask";
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

  return {tasks,addTask,deleteTask,updateTask};
}

export default useTaskList;