import { useState } from "react"



const getStorageByKey = (key,defaultValue) => {
  try {
    const value = localStorage.getItem(key);

    if (value){
      return JSON.parse(value);        
    }
    localStorage.setItem(key,JSON.stringify(defaultValue));      
    return defaultValue;
  } catch (error) {
    console.error(`[useLocalStorage][setState][ERROR]: ${error.message}`);
  }
}



const useLocalStorage = (key,defaultValue) => {

  const [value,setValue] = useState(getStorageByKey(key,defaultValue));
  
  const setValueState = (_value) => {
    let newValue;
    if (typeof _value === 'function'){
      const fn = _value;
      newValue = fn(value);
    }else{
      newValue = _value;
    }
    localStorage.setItem(key,JSON.stringify(newValue));
    setValue(newValue);
  }

  return [value,setValueState];

}

export default useLocalStorage;