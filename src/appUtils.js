import axios from "axios";
import { API_ENDPOINT } from "./config";

const GET_TASKS = "getTasks";
const GET_USERS = "getUsers";
const GET_USER = "getUser";
const GET_STATUSES = "getStatuses";
const GET_MENU_ITEMS = "getMenuItems";

export const sortTasksByPosition = (a,b) => parseInt(a.position) - parseInt(b.position);

export const indexOfObjectInArray = (array,id) => {
  return array.findIndex(el => el.id === id);
};

export const swapIndex = (array,current,finished) => {
  
  const element = array[current];  
  array.splice(finished, 0, ...array.splice(current, 1));
  return array.map(a => a);
}

export const isObject = (obj) => {
  try {
    debugger;
    if (typeof obj === 'object' && obj instanceof Object) {
      return true;
    }
    return false;    
  } catch (error) {
    
  }
}
export const isArray = (arr) => {
  try {
    if (typeof arr === 'object' && arr instanceof Array) {
      return true;
    }
    return false;    
  } catch (error) {
    
  }
}
export const isString = (str) => {
  try {
    if (typeof str === 'string' || str instanceof String) {
      return true;
    }
    return false;    
  } catch (error) {
    
  }
}



const objectToFormData = (obj) => {
  try {
    const fd = new FormData();
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const item = obj[key];      
        fd.append(key, item);
      }
    }
    return fd; 
  } catch (error) {
    console.error(`[FN]objectToFormData()[ERROR]-${error.message}\n\r [STACK]-${error.stack}`);
  }
}
const arrayToFormData = (arr,key="array") => {
  try {
    const fd = new FormData();    
    fd.append("type",key);
    fd.append("count",arr.length);
    fd.append("data",JSON.stringify(arr));    
    return fd;
  } catch (error) {
    
  }
}
const stringToFormData = (str,key="array") => {
  try {
    const fd = new FormData();
    fd.append("type","string");
    fd.append("count",str.length);
    fd.append("string",str);
    return fd;
  } catch (error) {
    
  }
}
export const isEmpty = (val) => {
  try {    
    if (isString(val)) {
      if (val === null || val === undefined || val.length === 0){
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`[FNC][isEmpty][ERROR]-${error.message}`);
  }
}


export const toFormData = (data,key="") => {
  try {
    var fd;    
    var type = isArray(data)? 
                "array" :
                isObject(data) ?
                "object" :
                isString(data) ?
                "string" : "";

    switch (type) {
      case "object":
        fd = objectToFormData(data);
        break;
      case "array":        
        let arrKey = key.length === 0 ? type : key;
        fd = arrayToFormData(data,arrKey);
        break;
      case "string":
        let strKey = key.length === 0 ? type : key;
        fd = stringToFormData(data,strKey);
        break;
      
      default:
        fd = new FormData();
        break;
    }        
    return fd;
    
  } catch (error) {
    
  }
}


export const getTasks = async (boardId) => {

  const response = await axios.get(API_ENDPOINT,{params:{action:GET_TASKS,boardId:boardId}});
  // debugger;
  let tmp = response.data;
  return response.data;
}

export const getUsers = async () => {
  const response = await axios.get(API_ENDPOINT,{params:{action:GET_USERS}});
  return response.data;
}
export const getUser = async (userId) => {
  const response = await axios.get(API_ENDPOINT,{params:{action:GET_USER,id:userId}});
  // debugger;
  let tmp = response.data;
  return response.data;
}
export const getStatuses = async () => {  
  const response = await axios.get(API_ENDPOINT,{params:{action:GET_STATUSES}});
  // debugger;
  let tmp = response.data;
  return response.data.data;
}

export const getMenuItems = async (menu,name) => {
  const response = await axios.get(API_ENDPOINT,{params:{action:GET_MENU_ITEMS,menu:menu,name:name}});
  // debugger;
  let tmp = response.data;
  return response.data.data;
}
