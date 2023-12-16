import { useEffect, useState } from "react";
import { devFetchTasks } from "../../../data/fakeApi";
import { Task } from "../../../data/models/task";

let history = [];

const useTaskList = (boardId) => {
  const [tasks,setTasks] = useState([]);

  
  useEffect(() => {
    setTasks(devFetchTasks(boardId));
  },[boardId]);



  const addTask = (e,task) => {
    const newTask = new Task(boardId,task);
    history = [...history,{event:"addtask",task}];
    setTasks(oldTasks => [...oldTasks,newTask]);  
  }

  const deleteTask = (taskId) => {
    if (taskId) {
      const tasksCopy = [...tasks];
      const results = tasksCopy.filter(s => s.id !== taskId);
      if (results.length > 0) {
        setTasks([...results]);
        return;
      }
      setTasks([]);
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