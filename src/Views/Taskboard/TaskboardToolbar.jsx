

import { useState } from 'react';
import Popover from '../../Components/Popover/Popover';
import AddBoardButton from '../../assets/icons/AddBoardButton';
import UserBadgeButton from '../../assets/icons/UserBadgeButton';
import styles from './taskboardView.module.css';
import ToolbarUserMenu from '../../Components/menus/ToolbarUserMenu/ToolbarUserMenu';
import WEModal from '../../Components/WEModal/WEModal';
import useModal from '../../Components/WEModal/hooks/useModal';
import ProfileFormView from '../../forms/profileFormView/ProfileFormView';
import NTTPopover,{positions,usePopover} from '../../Components/NTTPopover/NTTPopover';
import NotificationButton from '../../assets/icons/NotificationButton';
import ToolbarNotificationMenu from '../../Components/menus/toolbar/ToolbarNotificationMenu/ToolbarNotificationMenu';


const Logo = ({logo}) => <div className={styles.taskboard_toolbar_container}>{logo}</div>;
const Header = ({text}) => <div className={styles.taskboard_toolbar_container}><h1>{text}</h1></div>
const NavMenu = ({children}) => <div className={styles.taskboard_toolbar_container}>{children}</div>


const profileFormModalOptions = {
  type: "modal",
  size: "md",
  opacity: ""
}


const useTaskboardToolbar = () => {
  const {modalState:profileModalState,toggleModal:toggleProfileModal} = useModal(true);
  const {modalState:addBoardModalState,toggleModal:toggleAddBoardModal} = useModal(true);
  const {isShowing,close,open} = usePopover();
  const {isShowing:messageIsShowing,close:messageClose,open:messageOpen} = usePopover();  

  const onButtonClick = (e,menu) => {

  }

  const onMenuAction = (e,action) => {
    console.log(action);
    toggleProfileModal();
    close();
  }



  

  return {
    controller: {
      profileModalState,
      addBoardModalState,
      toggleProfileModal,
      toggleAddBoardModal,
      messageIsShowing,
      messageClose,
      messageOpen,
      isShowing,
      close,
      open,
      onButtonClick,
      onMenuAction,
    }
  }
}


const TaskboardToolbar = ({ text,logoPath }) => {
  const {controller} = useTaskboardToolbar();

  
  

  return (
    <div className={styles.taskboard_toolbar}>

      <Logo logo={logoPath} />
        
      <Header text={text} />

      <NavMenu>
        
        <NTTPopover popover={<ToolbarNotificationMenu menuAction={controller.onMenuAction} />} close={controller.messageClose} open={controller.messageOpen} show={controller.messageIsShowing} config={{position:positions.BOTTOM_RIGHT}}>          
          <NotificationButton width={30} height={30} className={styles.option_btn} title={"Show user menu"} onClick={controller.onButtonClick}/>             
        </NTTPopover>

        <NTTPopover popover={<ToolbarUserMenu menuAction={controller.onMenuAction} />} close={controller.close} open={controller.open} show={controller.isShowing} config={{position:positions.BOTTOM_RIGHT}}>
          <UserBadgeButton width={30} height={30} className={styles.option_btn} title={"Show user menu"} onClick={controller.onButtonClick}/>             
        </NTTPopover>

        <WEModal isOpen={controller.profileModalState} toggle={() => controller.toggleProfileModal()}  style={{padding:"5% 20%"}}>

          <ProfileFormView />

        </WEModal>

        <WEModal isOpen={controller.addBoardModalState} toggle={() => controller.toggleAddBoardModal()}  style={{padding:"5% 20%"}}>

          <div>
            <div>
              <h1>Create Task Board</h1>              
            </div>
            <div>
              <input type='text' placeholder='Board Name'></input>
              <input type='text' placeholder='Board Description'></input>
              <input type='text' placeholder='Board Color'></input>
            </div>
          </div>

        </WEModal>

      </NavMenu>
        
    </div>
  );
}



export default TaskboardToolbar;