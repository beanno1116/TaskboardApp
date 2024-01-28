import styles from '../tbForm.module.css';

const InputWrapper = ({ children,...props }) => {
  return (
    <span className={styles.input_wrapper} {...props}>
      {children}
    </span>
  );
}

export default InputWrapper;