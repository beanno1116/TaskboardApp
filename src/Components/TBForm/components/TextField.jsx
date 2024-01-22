import { forwardRef } from 'react';
import styles from '../tbForm.module.css';

const TextField = forwardRef(({ type="text",...props },ref) => {
  const {className,placeholder} = props;


  return (
    <>
      <input ref={ref} className={`${styles.textfield} ${className ? className : ""}`} type={type} placeholder={placeholder} />
    </>
  );
})


export default TextField;