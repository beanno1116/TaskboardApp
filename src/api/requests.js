import { API_ENDPOINT } from "../config";
import axios from "axios";

const GET_USERS = "getUsers"
const GET_TASKS = "getTasks"
const GET_MENU = "getMenu";
const GET_STATUS_LEVELS = "getStatusLevels";
const GET_CURRENT_USER = "getCurrentUser"

const getMenu = async ({signal,menu,name}) => {
  const response = await axios.get(API_ENDPOINT,{signal,params:{action:GET_MENU,menu:menu,name:name}});  
  return response.data;
}

const getStatusLevels = async ({signal}) => {  
  const response = await axios.get(API_ENDPOINT,{signal,params:{action:GET_STATUS_LEVELS}});  
  return response.data;
}

const getCurrentuser = async ({signal,token}) => {
  const response = await axios.get(API_ENDPOINT,{params:{action:GET_CURRENT_USER,token},signal});
  debugger;
  return response.data;
}

const getUsers = async ({signal}) => {
  const response = await axios.get(API_ENDPOINT,{params:{action:GET_USERS},signal});
  return response.data;
}

const getTasks = async ({signal,boardId}) => {  
  const response = await axios.get(API_ENDPOINT,{signal:signal,params:{action:GET_TASKS,boardId:boardId}});      
  return response.data;
}


export {
  getCurrentuser,
  getMenu,
  getStatusLevels,
  getUsers,
  getTasks
}