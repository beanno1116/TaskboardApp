

import { useState } from 'react';
import Popover from '../../Components/Popover/Popover';
import AddBoardButton from '../../assets/icons/AddBoardButton';
import UserBadgeButton from '../../assets/icons/UserBadgeButton';
import styles from './taskboardView.module.css';
import ToolbarUserMenu from '../../Components/menus/ToolbarUserMenu/ToolbarUserMenu';
import WEModal from '../../Components/WEModal/WEModal';
import useModal from '../../Components/WEModal/hooks/useModal';
import ProfileFormView from '../../forms/profileFormView/ProfileFormView';

const TaskboardToolbar = ({ titleText }) => {
  const {modalState:profileModalState,toggleModal:toggleProfileModal} = useModal(true);

  const handleClick = () => {
    
    // localStorage.setItem('is-auth',false);
    // localStorage.setItem('auth',"");
  }

  const userMenuAction = (e,action) => {
    console.log(action);
    toggleProfileModal();
    debugger;
  }

  const temp = () => {
    toggleProfileModal();
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

          <Popover popover={<ToolbarUserMenu menuAction={userMenuAction} />} onClose={() => {}} position={"bottom"} style={{top:"53px",right:"46px"}}>
            <UserBadgeButton width={30} height={30} className={styles.option_btn} title={"Show user menu"} onClick={handleClick}/>
          </Popover>

          <WEModal isOpen={profileModalState} toggle={temp}>
            <ProfileFormView />
            
          </WEModal>

        </div>
    </div>
  );
}

export default TaskboardToolbar;