
import { useState } from 'react';
import GeneralProfileForm from './formViews/GeneralProfileForm';


import styles from './profileFormView.module.css';


const ProfileFormView = ({ ...props }) => {
  const [currentView,setCurrentView] = useState("general")

  const onTabItemClick = (e,tabName) => {
    console.log(e);
    console.log(tabName);
    setCurrentView(tabName);
  }

  const showProfileView = (view) => {
    switch (view) {
      case "general":
        return <GeneralProfileForm />        
      case "security":
        return <div>Security View</div>
      case "contact":
        return <div>Contact View</div>
    
      default:
        return <GeneralProfileForm />
    }
  }


  return (
    <div className={styles.profile_form_View}>
      
      <div className={styles.tab_menu}>
        <div className={styles.heading}>
          <h1>Profile Settings</h1>
        </div>
        <ul className={styles.tab_list} role='list'>
          <li className={`${styles.tab_list_item} ${styles.active}`} onClick={(e) => onTabItemClick(e,"general")}>General</li>
          <li className={styles.tab_list_item} onClick={(e) => onTabItemClick(e,"contact")}>Contact</li>
          <li className={styles.tab_list_item} onClick={(e) => onTabItemClick(e,"security")}>Security</li>
        </ul>
      </div>
      <div className={styles.form_container}>
        {showProfileView(currentView)}
        {/* <GeneralProfileForm /> */}
      </div>

       
    </div>
  );
}

export default ProfileFormView;