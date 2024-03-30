




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

  );
}

ListMenu.Header = Header
ListMenu.Seperator = ListSeperator;
ListMenu.SearchField = SearchField;
ListMenu.List = List;


export default ListMenu;