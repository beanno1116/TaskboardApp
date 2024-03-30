import {
  getMenu,
  getStatusLevels,
  getUsers,
  getTasks
} from "./requests"
import { useQuery } from "react-query"




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

export {
  useGetMenu,
  useGetStatusLevels,
  useGetTasks,
  useGetUsers
}