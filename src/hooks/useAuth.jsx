import { useContext,createContext, useState, useCallback } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../config";
import { useMutation, useQuery } from "react-query";
import { createFormDataObj } from "../Utilities";
import { toast } from "../Components/WEToast/WEToast";


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

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded' 
}


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(store.getValue("app")?.user || {});
  const [token,setToken] = useState(store.getValue("app")?.token || "");

  const loginAction = useCallback((e,formData,isValid) => {
    if (!isValid) return;
      
    let fd = createFormDataObj({...formData,action:"login"});
    
    axios.post(API_ENDPOINT,fd,{headers})
    .then((response) => {      
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");              
      const {success,data,message} = response.data;
      if (success){
        const {id,firstName,lastName,color,level} = data;
        setToken(id);        
        setUser({firstName:firstName,lastName:lastName,color:color,level:level});
        store.setValue("app",{token:id,user:{firstName:firstName,lastName:lastName,color:color,level:level}});
        return;
      }
      toast.error("Unable to login user",{
        position: toast.position.TOP_RIGHT,
        title: "Error"
      })
    })
    .catch((error) => {
      toast.error("Unable to login user",{
        position: toast.position.TOP_RIGHT,
        title: "Error"
      })      
    });    
  },[setToken,setUser])

  const logoutAction = useCallback((e) => {
    setToken("");
    setUser({})
    store.setValue("app",{token:"",user:{}});
  },[setToken,setUser])

  const signupAction = useCallback((e,formData,isValid) => {
    if (!isValid) return;
      
    let fd = createFormDataObj({...formData,action:"signup"});    

    axios.post(API_ENDPOINT,fd,{headers})
    .then((response) => {
      if (response.status !== 200 && response.statusText !== "OK") throw new Error("Error with request");              
      const {success,data,message} = response.data;
      if (success){
        const {id,firstName,lastName,color} = data;
        setToken(id);        
        setUser({firstName:firstName,lastName:lastName,color:color});
        store.setValue("app",{token:id,user:{firstName:firstName,lastName:lastName,color:color}}); 
        return;               
      }
      toast.error("Unable to signup user",{
        position: toast.position.TOP_RIGHT,
        title: "Error"
      }) 
    })
    .catch((error) => {
      toast.error("Unable to signup user",{
        position: toast.position.TOP_RIGHT,
        title: "Error"
      }) 
      console.error(error);
    }); 
            
  },[setToken,setUser])


  return  <AuthContext.Provider 
            value={{token,user,loginAction,logoutAction,signupAction}}
          >
            {children}
          </AuthContext.Provider>
}





export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);  
}

