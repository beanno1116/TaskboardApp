import React from 'react';

import styles from './tbAvatar.module.css';
import AvatarImg from './components/AvatarImg';
import AddAvatarButton from './components/AddAvatarButton';

const TBAvatarForm = ({ path='' }) => {

  const handleAddAvatarButtonClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.avatar_form}>

      <AvatarImg path={path}/>
      <AddAvatarButton type="button" className={styles.add_avatar_button} width={32} height={32} onClick={handleAddAvatarButtonClick} />
      

        {/* <div>
          <button>Add Profile Image</button>
        </div> */}

      </div>
  );
}

export default TBAvatarForm;