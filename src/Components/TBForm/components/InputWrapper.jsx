import styles from '../tbForm.module.css';

const InputWrapper = ({ children }) => {
  return (
    <span className={styles.input_wrapper}>
      {children}
    </span>
  );
}

export default InputWrapper;