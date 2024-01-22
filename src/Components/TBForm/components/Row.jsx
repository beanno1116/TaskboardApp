

import styles from '../tbForm.module.css';

const Row = ({ children,...props }) => {
  const {className,style} = props;
  return (
    <div className={`${styles.input_row} ${className ? className : ""}`} style={{...style}}>
      {children}
    </div>
  );
}

export default Row;