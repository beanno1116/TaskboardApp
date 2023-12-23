import { useRef, useState } from 'react';


import styles from './taskListItem.module.css';
import StatusIndicator from './components/TaskItemStatusIndicator';
import TaskItemContent from './components/TaskItemContent';
import TaskItemNav from './components/TaskItemNav';
import SettingsButton from '../../assets/icons/SettingsButton';
import Popover from '../Popover/Popover';
import TasklistItemMenu from '../menus/TaskListItemMenu/TasklistItemMenu';
import VerticalDotsButton from '../../assets/icons/VerticalDotsButton';

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
      <VerticalDotsButton className={styles.option_btn} width={25} height={25} onClick={onClick} /> 
        {/* <SettingsButton className={styles.option_btn} width={25} height={25} onClick={onClick} />       */}
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





function TaskListItem({ task,menu}) {
  const {id,title,description,contact,status} = task;
  const [isOpen,setIsOpen] = useState(false);
    
  const popoverRef = useRef();
  
    const onItemOptionButtonClick = (e) => {
      debugger;
      try {
        e.currentTarget.classList.toggle(styles.open);
        if (isOpen) {
          setIsOpen(false);
        }else {
          setIsOpen(true);
        }
        // setIsOpen(!isOpen);

      } catch (error) {

        console.log(`onOptionMenuBtnClick Event error ${error.message}`);

      }
    }

   


    return (
      <div className={styles.tasklist_item} id={id}>
        
        <StatusIndicator status={status} />

        <TaskItemContent title={title} content={description} />
          
        <TaskItemNav>
          

          <Popover popover={menu} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <OptionButton onClick={onItemOptionButtonClick} />
          </Popover>
          
          <Contact contact={contact} />

        </TaskItemNav>

      </div>
    );
}

TaskListItem.Status = StatusIndicator;
TaskListItem.Content = TaskItemContent;
TaskListItem.Nav = TaskItemNav;
TaskListItem.OptionButton = OptionButton;
TaskListItem.Contact = Contact;

export default TaskListItem;