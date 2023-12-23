
import { useEffect, useRef, useState } from 'react';
import styles from './popover.module.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';


const observerConfig = {
  attributes: true,
  childList: true,
  subtree: true
}


const Popover = ({isOpen,onClose,popover,children}) => {
  const [height,setHeight] = useState();

  const popoverRef = useRef(null);
  const containerRef = useRef(null);
  
  useOnClickOutside(containerRef,onClose);

  const popoverMutationEvent = (mutationList,observer) => {
    
    const tmpML = mutationList;
    const tmpOB = observer;

    if (mutationList.filter(mutation => mutation.type === "childList").length === 0) {
      return;
    }
    
    const children = popoverRef.current.children;
    let rheight = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      // if (child.children.length > 0) {
      //   for (let l = 0; l < child.children.length; l++) {
      //     const c = child.children[l];
      //     rheight += c.offsetHeight;          
      //   }
      // }else{
        rheight += child.offsetHeight;
      // }
    }
    let newHeight = rheight;
    if (rheight > height) {
      newHeight = (height - rheight) + height;
    }
      
    
    
    
    let poh = newHeight;
    

    // let popoverHeight = [].slice.call(children).reduce((acc,cur) => {
    //   let tacc = acc;
    //   let tcur = cur.offsetHeight;
    //   return acc + cur.offsetHeight;
    // },0);


    // debugger;      
      setHeight(poh);
    
    console.log("Mutation Event");
  }

  useEffect(() => {
    const mutationObserver = new MutationObserver(popoverMutationEvent);
    // var th;
    // if (popoverRef.current && popoverRef.current?.children?.length > 0) {
    //   debugger;
    //   let h = popoverRef.current.children[0];
      
    //   th = h?.clientHeight;

    // }
    mutationObserver.observe(popoverRef.current,observerConfig);
    return () => {
      mutationObserver.disconnect();
    }
  },[])

  

  
 

  return (
    <div ref={containerRef}>
      <div ref={popoverRef} data-open={isOpen} className={`${styles.popover} ${isOpen ? styles.is_open : ""}`}>
        {isOpen ? popover : null}
      </div>      
      {children}    
    </div>
  );
}

export default Popover;