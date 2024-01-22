import image from '../../assets/images/loginImage.png';

import styles from './loginView.module.css';

import useWEForm from '../../hooks/useWEForm';
import Panel from './components/Panel';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';

const LoginView = ({ onLogin,onSignup }) => {
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
          
          <div className={styles.form_wrapper}>
            <LoginForm onSubmit={onLogin} />
            {/* <SignupForm onSubmit={onSubmit} /> */}
          </div>

          <div className={styles.panel_btn_wrapper}>
            Create an account
          </div>
          
          
          
        </Panel>
        
      </div>
    </div>
  );
}

export default LoginView;