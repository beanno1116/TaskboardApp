import React from 'react';

import styles from '../weLabelButton.module.css';

const ButtonLabel = ({ children }) => {
  return (
    <span className={styles.btn_label}>{children}</span>
  );
}

export default ButtonLabel;