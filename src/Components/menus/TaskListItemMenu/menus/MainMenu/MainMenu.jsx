

import RightChevronIcon from '../../../../../assets/icons/RightChevron';
import styles from './mainMenu.module.css';

const MenuItem = ({id,name,onClick}) => {
  return (
    <li data-menu={"item"} id={id} name={name} className={styles.menuitem_li} onClick={(e) => onClick(e,name)}>
      <span>{name}</span>
      <span><RightChevronIcon width={20} height={20} /></span>
    </li>
  )
}

const MainMenu = ({ menuItems,onClick,isActive}) => {
  return (
    <div className={`${styles.tasklist_menu__main_menu} ${isActive ? styles.hide_menu : ""}`}>        
      <ul className={styles.tasklist_menu_ul} onClick={onClick}>

      {menuItems.map(item => {
        return (
          <MenuItem key={item.id} id={item.id} name={item.name} onClick={onClick} />          
        )
      })}

      </ul>       
    </div>
  );
}

export default MainMenu;