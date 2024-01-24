import axios from "axios";
import { API_ENDPOINT } from "../config";
import { useMutation, useQuery } from "react-query";


const loginUser = async (email,password) => {
  const response = await axios.post(API_ENDPOINT,{email,password},{headers:{'Content-Type':'application/json'}});
  return response.data;
};

const store = {
  getValue(key){
    try {
      if (key.length === 0) throw new Error("No key provided");
      let value = localStorage.getItem(key);
      if (value){
        return JSON.parse(value);
      }  
      return {}
    } catch (error) {
      console.error(error.message);
    }
  },
  setValue(key,value){
    try {
      if (key.length === 0 || !value) throw new Error("No key or value provided");
      localStorage.setItem(key,JSON.stringify(value));
    } catch (error) {
      console.error(error.message);
    }
  }
}

const useAuth = () => {
  

  const loginUser = (id,name) => {
    debugger;
    const authObj = {
      id,
      name,
      loginDate: new Date()
    }
    store.setValue("auth",JSON.stringify(authObj));
  }
  const handleLogout = () => {
    store.setValue("auth",JSON.stringify({}));
  }
  return {
    loginUser,
    handleLogout
  }
}

export default useAuth;