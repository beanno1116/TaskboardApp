




import styles from './listMenu.module.css';


import Header from './components/Header';
import SearchField from './components/SearchField';
import ListSeperator from '../../ListSeperator/ListSeperator';
import List from './components/List';






const ListMenu = ({ isActive,children }) => {  
  return (
    <div className={`${styles.menu} ${styles.list_container} ${!isActive ? "" : styles.show_menu}`}>
      {children}
    </div>
    // <div className={`${styles.menu_container} ${styles.assignee_menu} ${!isActive ? "" : styles.show_menu}`}>

    //   <div className={styles.menu_header}>
    //     <LeftDblCheveronButton width={22} height={22} onClick={menuBack} type={"button"} className={styles.menu_header_btn} />
    //     <div className={styles.menu_title}>Status</div>
    //     <div className={styles.menu_header_placeholder}></div>
    //   </div>

    //   <ListSeperator />

    //   <div className={styles.search_row}>
    //     <input type={"text"} className={styles.search_input} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
    //   </div>

    //   <div ref={listRef} className={styles.list}>
    //     <ul>
    //       {statusTypes.map(type => {            
    //         var selectedStatus = (type.id === task.status) ? true : false;
    //         return (
    //           <ListItem key={type.id} data={type} onClick={() => selectListItemEvent(type.id)} isSelected={selectedStatus} />
    //         )
    //       })}          
    //     </ul>
    //   </div>

    // </div>
  );
}

ListMenu.Header = Header
ListMenu.Seperator = ListSeperator;
ListMenu.SearchField = SearchField;
ListMenu.List = List;


export default ListMenu;