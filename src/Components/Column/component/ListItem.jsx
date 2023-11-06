import React, { useState,useRef, useEffect } from 'react';

// import usePortal from '../../../../portals/hooks/usePortal';

// import { getClosestByElement,createFormDataObj,apiDataFetch } from '../../../../Utilities';

// import { icon } from '../../../../assets/Icon';

// import PopoverMenuPortal from '../../../../portals/PopoverMenuPortal';
// import TaskItemOptionPopover from '../../../../popovers/TaskItemOptionPopover/TaskItemOptionPopover';

import styles from '../column.module.css';

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








function ListItem({ task,type,onClick,onDragStart,onDragEnter,onDrop,...props }) {
    
    
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
        <div className={styles.list_item}>
          <h1>List Item</h1>
          {/* <StatusIndicator status={task.status}/>
          <Content>
              <Title>{task.title}</Title>
              <Body>{task.description}</Body>
          </Content>
          <Nav>
              <OptionButton rowID={task.id} onClick={onOptionsMenuBtnClick} />
              <Contact contact={`${task?.first_name ? task.first_name : ""} ${task?.last_name ? task.last_name : ""}`} />
          </Nav>
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

export default ListItem;