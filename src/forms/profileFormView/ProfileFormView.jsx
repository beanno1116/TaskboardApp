
import { useCallback, useState } from 'react';
import GeneralProfileForm from './formViews/GeneralProfileForm';
import { useGetCurrentUser,useGetMenu } from '../../api/api';
import * as menuTypes from '../../components/menus/menuTypes';


import styles from './profileFormView.module.css';




const useProfileFormView = (initialView) => {
  const {status,data} = useGetMenu(menuTypes.MAIN_MENU,menuTypes.PROFILE_FORM_MENU);   
  const [currentView,setCurrentView] = useState(initialView);

  const onTabItemClick = useCallback((e,tab) => {
    console.log(e);
    console.log(tab);
    setCurrentView(tab);
  },[setCurrentView])

  const showMenuView = useCallback(() => {
    switch (currentView) {
      case "general":
        return <GeneralProfileForm />        
      case "security":
        return <div>Security View</div>
      case "contact":
        return <div>Contact View</div>
    
      default:
        return <GeneralProfileForm />
    }
  },[currentView])

  return {
    controller: {
      currentView,
      onTabItemClick,
      showMenuView,
      menu: {
        status,
        data
      },

    }
  }
}


const ProfileFormView = ({ ...props }) => {  
  const {controller} = useProfileFormView("general");
  


  return (
    <div className={styles.profile_form_View}>
      
      <div className={styles.tab_menu}>

        <div className={styles.heading}>
          <h1>Profile Settings</h1>
        </div>
        
        <ul className={styles.tab_list} role='list'>
          {controller.menu.status.isLoading ? <div>Loading...</div> : controller.menu.data.results.map(item => {       
            return (              
              <li 
              key={item.id} 
              id={item.id} 
              className={`${styles.tab_list_item} ${controller.currentView === item.label ? styles.active : ""}`} 
              onClick={(e) => controller.onTabItemClick(e,item.label)}
              >             
                {item.label}                
              </li>              
            )
          })}
        </ul>

      </div>
      
      <div className={styles.tab_menu_view}>
        {controller.showMenuView()}        
      </div>

       
    </div>
  );
}

export default ProfileFormView;