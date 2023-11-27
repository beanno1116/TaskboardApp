

import { optionMenuItems } from '../../data/optionMenuItems';
import RightChevronIcon from '../../assets/icons/RightChevron';


import styles from './popover.module.css';
import ListSeperator from '../ListSeperator/ListSeperator';
import EditButton from '../../assets/icons/EditButton';
import TrashButton from '../../assets/icons/TrashButton';
import AssigneePOMenu from './AssigneePOMenu';
import MainMenu from '../menus/TaskListItemMenu/menus/MainMenu/MainMenu';
import { useLayoutEffect, useRef } from 'react';

const Popover = ({ isOpen,content }) => {

  const popoverRef = useRef(null);

  useLayoutEffect(() => {
    // use mutation api to detect the children being removed and added
    const child = popoverRef.current.children;
    let acc = 0;
    for (let i = 0; i < child.length; i++) {
      const element = child[i];
      acc += element.offsetHeight;
      
    }
    let temp = acc;
    debugger;
  })


  return (
    <div ref={popoverRef} className={`${styles.popover} ${isOpen ? styles.is_open : ""}`} style={{height: "380px"}}>

      {content}

      {/* <div className={styles.body}>
        
        <MainMenu menuItems={optionMenuItems} />

        
      </div>
          
      <ListSeperator />

      <div className={styles.bottom_nav}>
          
        <EditButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={() => {}}/>
        <TrashButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={() => {}} />

      </div> */}

    </div>
  );
}

export default Popover;