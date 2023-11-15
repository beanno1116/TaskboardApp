import React, { useState,useRef, useEffect } from 'react';

// import usePortal from '../../../../portals/hooks/usePortal';

// import { getClosestByElement,createFormDataObj,apiDataFetch } from '../../../../Utilities';

// import { icon } from '../../../../assets/Icon';

// import PopoverMenuPortal from '../../../../portals/PopoverMenuPortal';
// import TaskItemOptionPopover from '../../../../popovers/TaskItemOptionPopover/TaskItemOptionPopover';

import styles from './taskListItem.module.css';
import StatusIndicator from './components/TaskItemStatusIndicator';
import TaskItemContent from './components/TaskItemContent';
import TaskItemNav from './components/TaskItemNav';

// const statusLevels = [
//     {title:"new"},
//     {title:"seen"},
//     {title:"started"},
//     {title:"holding"},
//     {title:"complete"},
//     {title:"delayed"}
// ]

// const Title = ({ children }) => {
//     return (
//         <div title={children} className={styles.title}>
//                 <div>{children}</div>
//                 <h1>{"taskitem"}</h1>
            
//         </div>
//     )
// }

// const Body = ({ children }) => {
//     return (
//         <div className={styles.body}>
//             {children}
//         </div>
//     )
// }

// const OptionButton = ({ rowID,onClick }) => {
//     return (
//         <>
//             <button data-btype={"option"} name={rowID} className={styles.option_btn} onClick={onClick} >
//                 {icon(24,"snow").vThreeDots}
//             </button>
//         </>
//     )
// }

// const Contact = ({ contact }) => {
//     const getinitials = (_name) => {
//         if (!_name) return " ";
//         let nameArr = _name.split(" ");
//         let initials = `${nameArr[0].charAt(0)}${nameArr[1].charAt(0)}`;
//         return initials;
//     }
//     return (
//         <div title={contact ? contact : ""} className={styles.contact}>
//             {contact && getinitials(contact)}
//         </div>
//     )
// }

// const StatusIndicator = ({ status }) => {
//     let level = statusLevels[status];    
//     return (
//         <div title={`${level?.title && statusLevels[status].title}`} className={`${styles.status_indicator} ${level?.title && styles[statusLevels[status].title]}`}></div>
//     )
// }

// const Content = ({ children }) => {
//     return (
//         <div className={styles.content}>            
//             {children}            
//         </div>
//     )
// }

// const Nav = ({ children })  => {
//     return (
//         <nav className={styles.nav}>
//             {children}
//         </nav>
//     )
// }


const Title = ({ children }) => {
  return (
      <div title={children} className={styles.title}>
              <div>{children}</div>
              <h1>{"taskitem"}</h1>
          
      </div>
  )
}

const Body = ({ children }) => {
  return (
      <div className={styles.body}>
          {children}
      </div>
  )
}

const OptionButton = ({ rowID,onClick }) => {
  return (
      <>
          <button data-btype={"option"} name={rowID} className={styles.option_btn} onClick={onClick} >
              {/* {icon(24,"snow").vThreeDots} */}X
          </button>
      </>
  )
}

const Contact = ({ contact }) => {
  const getinitials = (_name) => {
      if (!_name) return " ";
      let nameArr = _name.split(" ");
      let initials = `${nameArr[0].charAt(0)}${nameArr[1].charAt(0)}`;
      return initials;
  }
  return (
      <div title={contact ? contact : ""} className={styles.contact}>
          {contact && getinitials(contact)}
      </div>
  )
}





function TaskListItem({ task,type,onClick,onDragStart,onDragEnter,onDrop,children,...props }) {
    
    
    // const [coords,updateCoordinates,portalState,togglePortal] = usePortal();

    // const activeButtonRef = useRef(null);


    // const onOptionsMenuBtnClick = (e) => {
    //   try {        
    //     if (portalState) return;
    //     let button = getClosestByElement(e.target,"button");        
    //     if (!button) return;
    //     activeButtonRef.current = button;
    //     updateCoordinates(button);    
    //     togglePortal();
    //   } catch (error) {
    //     console.log(`onOptionMenuBtnClick Event error ${error.message}`);
    //   }
    // }

    // const onTaskChange = (e,_action,_id) => {
        
    //     if (_action === "edit"){
    //         return;
    //     }
    //     togglePortal();
    //     onClick(e,_action,_id);
    //     return;
    // }

    // const onMenuClick = () => {

    // }

    return (
        <div className={styles.tasklist_item}>
          {children}
          {/* <StatusIndicator status={task.status} />
          <TaskItemContent>
            <Title>{task.title}</Title>
            <Body>{task.content}</Body>
          </TaskItemContent>
          <TaskItemNav>
            <OptionButton rowID={1} onClick={() => {}} />
            <Contact contact={"Ben Klimo"} />
          </TaskItemNav> */}
          {/* 
          {portalState && (
              <PopoverMenuPortal>
                  <TaskItemOptionPopover 
                      task={task}
                      height={"195"}
                      onChange={onTaskChange}
                      onClick={onMenuClick}
                      coords={coords}
                      updatePopoverCoords={() => updateCoordinates(activeButtonRef.current)}
                  />
              </PopoverMenuPortal>
          )} */}
        </div>
    );
}

TaskListItem.Status = StatusIndicator;
TaskListItem.Content = TaskItemContent;
TaskListItem.Nav = TaskItemNav;
TaskListItem.OptionButton = OptionButton;
TaskListItem.Contact = Contact;

export default TaskListItem;