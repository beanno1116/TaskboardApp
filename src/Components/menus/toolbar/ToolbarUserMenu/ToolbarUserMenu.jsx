

import GearButton from '../../../assets/icons/GearButton';
import LogoutButton from '../../../assets/icons/LogoutButton';
import ProfileButton from '../../../assets/icons/ProfileButton';
import { useAuth } from '../../../hooks/useAuth';
import styles from './toolbarUserMenu.module.css';

const ToolbarUserMenu = ({ menuAction }) => {
  const auth = useAuth();
  
  return (
    <div className={styles.toolbar_usermenu}>

      <ul className={styles.usermenu_listview}>

        <li>
          <h5>{`${auth.user.firstName} ${auth.user.lastName}`}</h5>
        </li>

        <li>
          <ProfileButton width={24} height={24} className={styles.usermenu_list_btn} onClick={(e) => menuAction(e,"profile")}/>
        </li>

        <li>
          <GearButton width={24} height={24} className={styles.usermenu_list_btn} onClick={(e) => menuAction(e,"settings")} />          
        </li>

        <li>
          <LogoutButton width={24} height={24} className={styles.usermenu_list_btn} onClick={(e) => auth.logoutAction()}/>          
        </li>

      </ul>
       
    </div>
  );
}

export default ToolbarUserMenu;