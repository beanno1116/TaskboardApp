
import GeneralProfileForm from './formViews/GeneralProfileForm';


import styles from './profileFormView.module.css';


const ProfileFormView = ({ ...props }) => {


  const onTabItemClick = (e,tabName) => {
    console.log(e);
    console.log(tabName);
  }


  return (
    <div className={styles.profile_form_View}>
      
      <div className={styles.tab_menu}>
        <div className={styles.heading}>
          <h1>Profile</h1>
        </div>
        <ul className={styles.tab_list} role='list'>
          <li className={styles.tab_list_item} onClick={(e) => onTabItemClick(e,"general")}>General</li>
          <li className={styles.tab_list_item} onClick={(e) => onTabItemClick(e,"contact")}>Contact</li>
          <li className={styles.tab_list_item} onClick={(e) => onTabItemClick(e,"security")}>Security</li>
        </ul>
      </div>
      <div className={styles.form_container}>
        <GeneralProfileForm />
      </div>

       
    </div>
  );
}

export default ProfileFormView;