

import { optionMenuItems } from '../../data/optionMenuItems';
import RightChevronIcon from '../../assets/icons/RightChevron';


import styles from './popover.module.css';
import ListSeperator from '../ListSeperator/ListSeperator';
import EditButton from '../../assets/icons/EditButton';
import TrashButton from '../../assets/icons/TrashButton';
import AssigneePOMenu from './AssigneePOMenu';

const Popover = ({ isOpen }) => {
  return (
    <div className={`${styles.popover} ${isOpen ? styles.is_open : ""}`}>

      <div className={styles.body}>

        <div className={`${styles.menu_list}`}>
          <AssigneePOMenu />
          {/* <ul>

          {optionMenuItems.map(item => {
            return (
              <li key={item.id} name={item.name}>
                <span>{item.name}</span>
                <span><RightChevronIcon width={20} height={20} /></span>
              </li>
            )
          })}

          </ul> */}

        </div>

      </div>
          
      <ListSeperator />

      <div className={styles.bottom_nav}>
          
        <EditButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={() => {}}/>
        <TrashButton width={24} height={24}  name={"edit_btn"} className={styles.nav_btn} type={"button"} onClick={() => {}} />

      </div>

    </div>
  );
}

export default Popover;