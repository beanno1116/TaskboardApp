
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
    // 
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
    return `${classNames}`
    // return `${classNames} ${styles[popoverConfig.position]}`
  }



  const onClickHandler = (e,handler) => {
    e.stopPropagation();
    e.preventDefault();
    const popoverStyles = getComputedStyle(popoverRef.current);
    let popoverWidth = popoverStyles.getPropertyValue("width").replace("px","");
    let popoverHeight = popoverStyles.getPropertyValue("height");
    let anchorRect = getDOMRectObj(e.currentTarget);

    let anchorRectX = anchorRect.x;

    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;
    let midX = viewWidth * .5;
    let midY = viewHeight * .5;

    // anchorRect.x > midX right side of middle
    // anchorRect.x < midX left side of middle
    // anchorRect.y > midY bottom side of middle
    // anchorRect.y < midY top side of middle

    if (anchorRect.x > midX && anchorRect.y > midY){
      console.log("Bottom Right Quadrant");
    }else if (anchorRect.x < midX && anchorRect.y > midY) {
      console.log("Bottom left quadrant");
    }else if (anchorRect.x < midX && anchorRect.y < midY) {
       console.log("Top left quandrant");
    }else if (anchorRect.x > midX && anchorRect.y < midY) {
      console.log("Top right quadrant");
    }
   
    let popoverRect = getDOMRectObj(popoverRef.current);
   
   let tmp = anchorRect.right + 5 + popoverWidth;
    setRight(anchorRect.width + 15);
    // setRight((anchorRect.width + 15) + popoverWidth);
    setTop(anchorRect.top - popoverRect.top);
    
    
    setIsVisible(!isVisible);
    handler && handler(e);
  }

  useLayoutEffect(() => {
    if (popoverRef.current){
      const popover = popoverRef.current;  
      let styleObj = getComputedStyle(popover);
      let height = styleObj.getPropertyValue("height");
      let width = styleObj.getPropertyValue("width");
      
      // popover.classList.add(styles.is_open);
      // popover.style.visibility = "hidden";
      // let tmpRect = getDOMRectObj(popover);      
      // debugger 
      // popover.classList.remove(styles.is_open);
      // popover.style.visibility = "visible";
      let tmp = popoverRef.current;
      let rect = getDOMRectObj(tmp);

      // 
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
        return cloneElement(child,{onClick},child.props.children);
      })}
      
    </div>
  );
}

export default Popover;