import { useEffect, useState } from "react";
import { devFetchTasks } from "../../../data/fakeApi";


const useTaskList = (boardId) => {
  const [tasks,setTasks] = useState([]);
  
  useEffect(() => {
    setTasks(devFetchTasks(boardId));
  },[boardId]);

  const addTask = (task) => {
    debugger;
    setTasks(oldTasks => [...oldTasks,{
      id:9,
      title:"pocket dfggg",
      description:"work on dfgdfgdf pocket reports",
      contact:"Matt Spencer",
      type:1,
      status:2
    }])
  }

  return {tasks,addTask};
}

export default useTaskList;