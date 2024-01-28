import styles from '../addTaskItemForm.module.css';

const FormContent = ({ children,...props }) => {
  return (
    <div className={styles.form_content} {...props}>
       {children}
    </div>
  );
}

export default FormContent;