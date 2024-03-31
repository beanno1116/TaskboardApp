import {
  getMenu,
  getStatusLevels,
  getUsers,
  getTasks
} from "./requests"
import { useQuery } from "react-query"
import { API_ENDPOINT } from "../config"




const useGetMenu = (menu,name) => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: [`menu-${name}`],
    queryFn: ({signal}) => getMenu({signal,menu,name}),
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const useGetUsers = () => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: [`users`],
    queryFn: ({signal}) => getUsers({signal}),
    staleTime: 60000,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const useGetTasks = (boardId) => {  
  // debugger;
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: [`board-${boardId}`],
    queryFn: ({signal}) => getTasks({signal,boardId})
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const useGetStatusLevels = () => {
  const { isLoading, isError,isSuccess,isIdle, data,error } = useQuery({
    queryKey: [`getStatusLevels`],
    queryFn: ({signal}) => getStatusLevels({signal}),
    staleTime: Infinity,
    keepPreviousData: true
  })

  const status = {
    isLoading,
    isError,
    isSuccess,
    isIdle
  }

  return {
    status,
    data,
    error
  };
}

const useApi = () => {
  
  const post = (data,config) => {
    axios.post(API_ENDPOINT,data,{...config})
    .then(response => {      
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");
      if (response.data.success) {
        console.log(response);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return {
    post
  }
}

export {
  useApi,
  useGetMenu,
  useGetStatusLevels,
  useGetTasks,
  useGetUsers
}