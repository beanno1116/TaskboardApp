import React from 'react';

import styles from '../tbForm.module.css';

const Button = ({ type='button',onClick,children,...props }) => {
  const {className,style} = props;
  return (
    <button type={type} className={`${styles.button} ${props.no_bg ? styles.no_bg  : ""}`}  onClick={onClick}>{children}</button>
  );
}

export default Button;