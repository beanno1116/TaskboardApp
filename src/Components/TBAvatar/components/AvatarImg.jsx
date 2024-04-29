import React from 'react';

import styles from '../tbAvatar.module.css';

const AvatarImg = ({ path='' }) => {

  if (path === '') {
    return (
      <div className={`${styles.avatar_img} ${styles.default}`}>
        <span></span>
      </div>
    )
  }
  return (
    <div className={styles.avatar_img}></div>
  );
}

export default AvatarImg;