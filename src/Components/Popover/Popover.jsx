
import { Children,cloneElement,useState,useRef, useLayoutEffect, useEffect} from 'react';
import { publish } from '../../events';
import styles from './popover.module.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { getDOMRectObj, isDomElement } from '../../WEDomUtilities';





// const observerConfig = {
//   attributes: true,
//   childList: true,
//   subtree: true
// }

const config = {
  onClose: () => {},
  onOpen: () => {},
  position: "auto",
}

const positioning = {
  auto: "",
  left: {

  },
  top: "",
  right: "",
  bottom: ""
}


const Popover = ({popover,onClose,onOpen,position="auto",children,...props}) => {
  const childArray = Children.toArray(children);
  const [isVisible,setIsVisible] = useState(false);
  

  const compRef = useRef(null);

  const Component = () => {
    let props = {...popover.props};
    let children = {...popover.props.children};
    // debugger;
    let ref = compRef;
    const onClose = () => setIsVisible(false);
    return (
      cloneElement(popover,{onClose},popover.props.children)
    )
  }

  const popoverConfig = {...config,onClose:onClose,onOpen:onOpen,position:position};
  const [right,setRight] = useState(0);
  const [top, setTop] = useState(0);
  

  const popoverRef = useRef(null);
  const containerRef = useRef(null);

  const popoverClassNames = () => {
    let classNames = styles.popover;
    if (popoverConfig.position === "auto") {
      return classNames;
    }
    return `${classNames} ${styles[popoverConfig.position]}`
  }



  const onClickHandler = (e,handler) => {
    e.stopPropagation();
    e.preventDefault();
debugger;
    let anchorRect = getDOMRectObj(e.currentTarget);
   
    let popoverRect = getDOMRectObj(popoverRef.current);
   
    setRight(anchorRect.width + 15);
    setTop(anchorRect.top - popoverRect.top);
    
    
    setIsVisible(!isVisible);
    handler && handler(e);
  }

  useLayoutEffect(() => {
    if (popoverRef.current){
      const popover = popoverRef.current;      
      // popover.classList.add(styles.is_open);
      // popover.style.visibility = "hidden";
      // let tmpRect = getDOMRectObj(popover);      
      // debugger 
      // popover.classList.remove(styles.is_open);
      // popover.style.visibility = "visible";
      let tmp = popoverRef.current;
      let rect = getDOMRectObj(tmp);

      // debugger;
    }
    // let style = getComputedStyle(tmp);
    // let h = style.height.replace("px","");
    // let w = style.width.replace("px","");
  })

  useOnClickOutside(containerRef,() => {
    if (isVisible) {
      setIsVisible(false);
      onClose && onClose();
    }
    isVisible && setIsVisible(false);
  });

  useEffect(() => {

    const handleTransitionEnd = (e) => {
      const ele = e.target;
      if (e.target.localName === "button") return;

      if (ele.dataset?.open){
        publish("didclose",{target:ele,evt:e});
        return;
      }  
      publish("didopen",{target:ele,evt:e});
                  
    }
    

    window.addEventListener("transitionend",handleTransitionEnd);
    
    return () => {
      window.removeEventListener("transitionend",handleTransitionEnd);
    }
  })

  const onTransitionEndEvent = (e) => {
    let tmp = e;
    debugger;
    console.log(e);
  }

  return (
    <div className={styles.popover_container} ref={containerRef}>

      <div ref={popoverRef} data-open={isVisible} onTransitionEnd={onTransitionEndEvent} className={`${popoverClassNames()} ${isVisible ? styles.is_open : ""}`} style={{right:right + "px"}} {...props}>
        {/* {isVisible ? popover : null} */}
        <Component />
        
      </div>
      {Children.map(childArray,(child) => {
        let childOnClickEvent = child.props.onClick;
        let onClick = (e) => onClickHandler(e,childOnClickEvent);
        let isActive = isVisible;
        let ref = compRef;
        return cloneElement(child,{onClick,isActive},child.props.children);
      })}
      
    </div>
  );
}

export default Popover;