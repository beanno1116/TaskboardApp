

import { useState } from 'react';
import Popover from '../../Components/Popover/Popover';
import AddBoardButton from '../../assets/icons/AddBoardButton';
import UserBadgeButton from '../../assets/icons/UserBadgeButton';
import styles from './taskboardView.module.css';
import ToolbarUserMenu from '../../Components/menus/ToolbarUserMenu/ToolbarUserMenu';

const TaskboardToolbar = ({ titleText }) => {
  const [userPOOpen,setUserPOOpen] = useState(false);

  const handleClick = () => {
    localStorage.setItem('is-auth',false);
    localStorage.setItem('auth',"");
  }

  return (
    <div className={styles.taskboard_toolbar}>
        <div className={styles.taskboard_toolbar_container}>Logo</div>
        <div className={styles.taskboard_toolbar_container}>
          <h1>
            {titleText}
          </h1>
          </div>
        <div className={styles.taskboard_toolbar_container}>
          
          {/* <Popover popover={<ToolbarUserMenu />} onClose={() => setUserPOOpen(false)} style={{top:"53px",right:"94px"}}>          
            <AddBoardButton width={30} height={30} className={styles.option_btn} title={"Add new board"} />
          </Popover> */}

          <Popover popover={<ToolbarUserMenu />} onClose={() => {}} position={"bottom"} style={{top:"53px",right:"46px"}}>
            <UserBadgeButton width={30} height={30} className={styles.option_btn} title={"Show user menu"} onClick={handleClick}/>
          </Popover>

        </div>
    </div>
  );
}

export default TaskboardToolbar;