import styles from '../addTaskItemForm.module.css';

const FormNav = ({ children,...props }) => {
  return (
    <nav className={styles.nav} {...props}>
       {children}
    </nav>
  );
}

export default FormNav;