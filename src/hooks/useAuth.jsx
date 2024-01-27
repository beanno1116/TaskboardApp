import { useContext,createContext, useState } from "react";
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


const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(store.getValue("app")?.user || {});
  const [token,setToken] = useState(store.getValue("app")?.token || "");

  const loginAction = (e,formData,isValid) => {    
    if (!isValid) return;
  
    const {username,password} = formData;

    let fd = new FormData();

    // fd.append('email',"benk@glds.net");
    // fd.append('password',"devUser");
    fd.append('email',username);
    fd.append('password',password);
    fd.append('action','login');
    

    fetch(API_ENDPOINT,{
      method: 'POST',
      body: fd
    })
    .then((response) => {
      return response.json();
    })
    .then(data => {
      if (data.success){
        const {id,firstName,lastName,color} = data.data;
        setToken(id);
        debugger;
        setUser({firstName:firstName,lastName:lastName,color:color});
        store.setValue("app",{token:id,user:{firstName:firstName,lastName:lastName,color:color}});
        let tmp = store.getValue("app");
        console.log(data);
      }      
      console.log(data);
    })
    .catch(error => {
      debugger;
      console.log(error);
      //handle error
    });
    

  }

  const logoutAction = (e) => {
    setToken("");
    setUser({})
    store.setValue("app",{token:"",user:{}});
  }

  const signupAction = (e,formData,isValid) => {
    
    if (!isValid) return;
  
    const {username,password,passwordConfirm} = formData;

    let fd = new FormData();

    fd.append('email',"abc@glds.net");
    fd.append('password',"newUser");
    // fd.append('passwordConfirm',"devUser");
    // fd.append('email',username);
    // fd.append('password',password);
    
    fd.append('action','signup');
    

    fetch(API_ENDPOINT,{
      method: 'POST',
      body: fd
    })
    .then((response) => {      
      return response.text();
    })
    .then(data => {
      debugger;      
      if (data.success){
        const {id,firstName,lastName,color} = data.data;
        setToken(id);
        setUser({firstName,lastName,color});
        store.setValue("app",{token:id,user:{firstName,lastName,color}});
        let tmp = store.getValue("app");
        console.log(data);
      }      
      console.log(data);
    })
    .catch(error => {
      debugger;
      console.log(error);
      //handle error
    });
  }


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

