import React from 'react';

import styles from '../profileFormView.module.css';
import TextField from '../../../Components/TextField/TextField';

const GeneralProfileForm = ({ ...props }) => {
  return (
    <div className={styles.general_profile_form}>
      
      <h1 className={styles.profile_form_heading}>General</h1>
      

      <form className={styles.profile_form}>

        <div className={styles.fields}>           
          <TextField name='firstName' placeholder='First Name' value={""} size={"sm"} disabled={true}/>
          <TextField name='lastName' placeholder='Last Name' value={""} size={"sm"} />                  
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