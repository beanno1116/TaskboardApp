import { forwardRef, useEffect } from 'react';
import styles from '../tbForm.module.css';

const Textarea = forwardRef(({ type="text",...props },ref) => {
  const {className,placeholder} = props;



  return (
    <>
      <textarea
        ref={ref}
        className={`${styles.textfield} ${className ? className : ""}`}         
        placeholder={placeholder}
        {...props} 
      >
      </textarea>      
    </>
  );
})


export default Textarea;