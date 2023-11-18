import { Children, cloneElement, useState, useRef } from 'react';





import styles from './wePopup.module.css';


const defaultOptions = {
  position: 'center',
  arrow: false
}

// TODO: add inside flag
// TODO: add support for absolute position child by accepting a style prop that mirrors the child css styles



const WEPopup = ({ element, anchor}) => {



  return (
    <div style={{ position: 'relative', overflow: "visible" }}>
      <div style={{position:"absolute",right:"101%",backgroundColor:"red"}}>
        {element()}
      </div>      
      {anchor()}      
    </div>
  )
  
}

const useWEPopup = (Anchor,Element) => {

  return WEPopup(Element,Anchor);
}

export { WEPopup as default,useWEPopup};