

import LeftDblCheveronButton from '../../../../../assets/icons/LeftDblCheveronButton';
import ListSeperator from '../../../../ListSeperator/ListSeperator';
import styles from './assigneeMenu.module.css';

const ListItem = ({ data, onClick, isSelected }) => {
  return (
    <li key={data.id} className={`${isSelected ? styles.selected : ""}`} onClick={onClick}>
      <div className={styles.initials}>
        {`${Array.from(data.first_name)[0]}${Array.from(data.last_name)[0]}`}
      </div>
      <div className={styles.name}>
        {`${data.first_name} ${data.last_name}`}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}

const AssigneeMenu = ({ isActive,onClick }) => {
  return (
    <div className={`${styles.menu_container} ${!isActive ? "" : styles.show_menu}`}>
      <div className={styles.menu_header}>
        <LeftDblCheveronButton width={22} height={22} onClick={onClick} type={"button"} className={styles.menu_header_btn} />
        {/* <button className={styles.menu_header_btn} type={'button'} onClick={() => {}}>
          HB
        </button> */}
        <div className={styles.menu_title}>Assignees</div>
        <div className={styles.menu_header_placeholder}></div>
      </div>

      <ListSeperator />

      <div className={styles.search_row}>
        <input type={"text"} className={styles.search_input} value={""} onChange={() => {}} />
      </div>

      <div className={styles.list}>
        <ul>
          <ListItem data={{id:"1",first_name:"ben",last_name:"klimo"}} onClick={() => {}} isSelected={false} />
        </ul>
      </div>

    </div>
  );
}

export default AssigneeMenu;