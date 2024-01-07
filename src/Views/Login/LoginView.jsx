import image from '../../assets/images/loginImage.png';

import styles from './loginView.module.css';

import useWEForm from '../../hooks/useWEForm';
import Panel from './components/Panel';
import LoginForm from './forms/LoginForm';

const LoginView = ({ onSubmit }) => {
  const {formData,registerFormInput,handleSubmit} = useWEForm({
    username: "",
    password: ""
  })


  const handleFormSubmit = (e,formData) => {
    
  }

  return (
    <div className={`${styles.view} ${styles.login}`}>       
      <div className={styles.login_form_wrapper}>

        <Panel className={styles.image_panel}>
          <img src={image} />
        </Panel>

        <Panel className={styles.form_panel}>
          <LoginForm onSubmit={onSubmit} />
        </Panel>
        
      </div>
    </div>
  );
}

export default LoginView;