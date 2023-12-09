

import styles from './menuPage.module.css';
import LeftDblCheveronButton from '../../../../assets/icons/LeftDblCheveronButton';
import ListSeperator from '../../../ListSeperator/ListSeperator';


const Header = ({text,handler}) => {
  return (
    <div className={styles.menu_header}>        
      <LeftDblCheveronButton width={22} height={22} onClick={handler} type={"button"} className={styles.menu_header_btn} />
      <div className={styles.menu_title}>{text}</div>
      <div className={styles.menu_header_placeholder}></div>
    </div>
  )
}



const MenuPage = ({ ...props }) => {
  return (
    <div className={`${styles.menu_container} ${styles.assignee_menu} ${true ? "" : styles.show_menu}`}>

      <Header text={"Assignee"} />
      <div className={styles.menu_header}>        
        <LeftDblCheveronButton width={22} height={22} onClick={() => {}} type={"button"} className={styles.menu_header_btn} />
        <div className={styles.menu_title}>Assignees</div>
        <div className={styles.menu_header_placeholder}></div>
      </div>

      <ListSeperator />

      <div className={styles.search_row}>
        <input type={"text"} className={styles.search_input} value={""} onChange={() => {}} />
      </div>

      <div className={styles.list}>
        <ul>
          {/* <ListItem data={{id:"1",first_name:"ben",last_name:"klimo"}} onClick={() => {}} isSelected={false} /> */}
        </ul>
      </div>

    </div>
  );
}

export default MenuPage;