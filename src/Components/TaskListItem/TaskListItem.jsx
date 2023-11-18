import { useState,useRef, useEffect } from 'react';
import { optionMenuItems } from '../../data/optionMenuItems';

// import usePortal from '../../../../portals/hooks/usePortal';

// import { getClosestByElement,createFormDataObj,apiDataFetch } from '../../../../Utilities';

// import { icon } from '../../../../assets/Icon';

// import PopoverMenuPortal from '../../../../portals/PopoverMenuPortal';
// import TaskItemOptionPopover from '../../../../popovers/TaskItemOptionPopover/TaskItemOptionPopover';

import styles from './taskListItem.module.css';
import StatusIndicator from './components/TaskItemStatusIndicator';
import TaskItemContent from './components/TaskItemContent';
import TaskItemNav from './components/TaskItemNav';
import SettingsIcon from '../../assets/icons/SettingsButton';
import SettingsButton from '../../assets/icons/SettingsButton';
import WEPopup, { useWEPopup } from '../WEPopup/WEPopup';
import ListSeperator from '../ListSeperator/ListSeperator';
import RightChevronButton from '../../assets/icons/RightChevron';
import RightChevronIcon from '../../assets/icons/RightChevron';
import TrashButton from '../../assets/icons/TrashButton';
import EditButton from '../../assets/icons/EditButton';
import Popover from '../Popover/Popover';

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




const OptionButton = ({onClick }) => {
  return (
      <>
        <SettingsButton className={styles.option_btn} width={25} height={25} onClick={onClick} />      
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
        <span className={styles.contact_initials}>
          {contact && getinitials(contact)}
        </span>
      </div>
  )
}

const TestComponent = () => {
  return (
    <div style={{position:"absolute",width:"100px",height:"100px",right:"101%",backgroundColor:"red"}}>

    </div>
  )
}



// function TaskListItem({ task,type,onClick,onDragStart,onDragEnter,onDrop,children,...props }) {
function TaskListItem({ task,onClick,onChange }) {
  const {id,title,content,contact,status} = task;
  const [isOpen,setIsOpen] = useState(false);
    
    
    // const [coords,updateCoordinates,portalState,togglePortal] = usePortal();

    // const activeButtonRef = useRef(null);


    const onItemOptionButtonClick = (e) => {
      try {        
        debugger;
        setIsOpen(!isOpen);
        let eventTarget = e.currentTarget;
        eventTarget.classList.toggle(styles.open);
        // if (portalState) return;
        // let button = getClosestByElement(e.target,"button");        
        // if (!button) return;
        // activeButtonRef.current = button;
        // updateCoordinates(button);    
        // togglePortal();
        // onTaskDataChange(e);
        // console.log(e);
      } catch (error) {
        console.log(`onOptionMenuBtnClick Event error ${error.message}`);
      }
    }

    const onTaskDataChange = (e) => {
      onChange(e);
    }

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
        <div className={styles.tasklist_item} id={id}>

          <StatusIndicator status={status} />

          <TaskItemContent title={title} content={content} />
            
          <TaskItemNav>
            
            <div>

              <Popover isOpen={isOpen}/>
              
              <OptionButton onClick={(e) => {
                  onItemOptionButtonClick(e);
                }} 
              />

            </div>

            
            <Contact contact={contact} />

          </TaskItemNav>

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