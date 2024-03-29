import { useState } from 'react';
import image from '../../assets/images/loginImage.png';

import styles from './loginView.module.css';


import Panel from './components/Panel';
import LoginForm from './forms/LoginForm';
import SignupForm from './forms/SignupForm';
import { useAuth } from '../../hooks/useAuth';

const LoginView = () => {
  const auth = useAuth();
  const [showLoginForm,setShowLoginForm] = useState(true);

  const handleCreateAccountClick = (e) => {    
    setShowLoginForm(!showLoginForm);
  }

  return (
    <div className={`${styles.view} ${styles.login}`}>       
      <div className={styles.login_form_wrapper}>

        <Panel className={styles.image_panel}>
          <img src={image} />
        </Panel>

        <Panel className={styles.form_panel}>
          
          <div className={styles.form_wrapper}>
            {showLoginForm ?
              <LoginForm onSubmit={auth.loginAction} /> :
              <SignupForm onSubmit={auth.signupAction} />            
            }            
          </div>

          <div className={styles.panel_btn_wrapper}>
            <button className={styles.basic_btn} type='button' onClick={handleCreateAccountClick}>
              {showLoginForm ? "Create an account" : "Log in"}
            </button>
          </div>
          
          
          
        </Panel>
        
      </div>
    </div>
  );
}

export default LoginView;