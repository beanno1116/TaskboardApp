

import { optionMenuItems } from '../../data/optionMenuItems';
import RightChevronIcon from '../../assets/icons/RightChevron';


import styles from './popover.module.css';
import ListSeperator from '../ListSeperator/ListSeperator';
import EditButton from '../../assets/icons/EditButton';
import TrashButton from '../../assets/icons/TrashButton';
import AssigneePOMenu from './AssigneePOMenu';
import MainMenu from '../menus/TaskListItemMenu/menus/MainMenu/MainMenu';

const Popover = ({ isOpen,content }) => {
  return (
    <div className={`${styles.popover} ${isOpen ? styles.is_open : ""}`}>

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