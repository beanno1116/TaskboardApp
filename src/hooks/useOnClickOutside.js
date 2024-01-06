import { useEffect } from "react";


const useOnClickOutside = (ref,handler) => {
  useEffect(() => {
    const containerEle = ref.current;

    const listener = (e) => {
      try {        
        if (!containerEle || containerEle.contains(e.target)){
          return;
        }
        handler && handler();
      } catch (error) {
        console.error(error.message);
      }      
    }

    document.addEventListener("mousedown",listener);
    document.addEventListener("touchstart",listener);

    return () => {
      document.removeEventListener("mousedown",listener);
      document.removeEventListener("touchstart",listener);
    }

  },[ref,handler])
}

export default useOnClickOutside;