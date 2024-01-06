


const isDomElement = (ele) => {
  try {
    if (ele === null || ele === undefined) throw new Error("Cannot find instance of null or undefined");    
    return ele instanceof HTMLElement;
  } catch (error) {
    console.error(error.message);
  }  
}


const getElementStyles = (ele) => {
  
}


const getDOMRectObj = (ele) => {
  try {
    if (!isDomElement(ele)) {      
      throw new Error("Cannot get rect of an instance of null or undefined");    
    }
    
    var rect = null;    
    
    rect = ele.getBoundingClientRect();
    
    if (rect === null) throw new Error("Unkown error; Could not get bounding client rect of element");

    return rect;
    
  } catch (error) {
    console.error(error.message);
    return {
      bottom: 0,
      height: 0,
      width: 0,
      top: 0,
      left: 0,
      right: 0,
      x: 0,
      y: 0
    }
  }
}


const getHiddenDOMRectObj = (ele, eleClass, relative = false) => {
  try {
    let positionOn = 'absolute';
    let positionOff = 'absolute';
    if (relative) {
      positionOn = 'relative';
      positionOff = 'absolute';
    }
    ele.style.position = positionOn;
    ele.style.visibility = 'hidden';
    ele.style.opacity = '0';
    ele.classList.add(eleClass);
    let retObj = getDOMRectObj(ele);
    ele.classList.remove(eleClass);
    ele.style.opacity = '1';
    ele.style.visibility = 'visible';
    ele.style.position = positionOff;
    return retObj;

  } catch (error) {
    console.error(error.message);
    return {
      bottom: 0,
      height: 0,
      width: 0,
      top: 0,
      left: 0,
      right: 0,
      x: 0,
      y: 0
    }
  }
  
}

const getWindowRect = () => {
  try {
    return {
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      bottom: window.innerHeight,
      right: window.innerWidth
    }
  } catch (error) {
    console.error(error.message);
  }
}

export {
  getDOMRectObj,
  isDomElement,
  getHiddenDOMRectObj,
  getWindowRect
}