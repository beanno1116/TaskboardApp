import React from 'react';

import styles from '../profileFormView.module.css';

const GeneralProfileForm = ({ ...props }) => {
  return (
    <div className={styles.general_profile_form}>
      
      <h1 className={styles.profile_form_heading}>General</h1>
      

      <form className={styles.profile_form}>

        <div className={styles.fields}> 
          <input type='text' name='firstName' placeholder='First name' />
          <input type='text' name='lastName' placeholder='Last name' />
        </div>

        <div className={styles.avatar}>
          <div className={styles.avatar_container}>

          </div>
          <div>
            <button>Add Profile Image</button>
          </div>
        </div>

      </form>
       
    </div>
  );
}

export default GeneralProfileForm;