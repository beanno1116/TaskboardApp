

import styles from '../profileFormView.module.css';
import FormViewHeader from './FormViewHeader';

const FormViewLayout = ({ children }) => {
  return (
    <div className={styles.profile_form}>
       {children}
    </div>
  );
}

FormViewLayout.Heading = FormViewHeader;

export default FormViewLayout;