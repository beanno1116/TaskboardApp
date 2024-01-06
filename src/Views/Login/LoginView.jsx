import image from '../../assets/images/loginImage.png';

import styles from './loginView.module.css';

import useWEForm from '../../hooks/useWEForm';

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

        <div className={`${styles.panel} ${styles.image}`}>
          <img src={image} />
        </div>

        <div className={`${styles.panel} ${styles.form}`}>

          <form className={styles.login_form}>

            <div className={styles.input_row}>
              <h1 className={styles.form_heading}>Login</h1>
            </div>

            <div className={styles.input_row}>
                <input className={styles.login_form_input}  {...registerFormInput("username")} placeholder={"Username"} />                  
            </div>
            <div className={styles.input_row}>
                <input className={styles.login_form_input} type={"password"} {...registerFormInput("password")} placeholder={"Password"} />                  
            </div>

            <div className={styles.input_row}>
              <a className={styles.reset_link}>Forgot password?</a>
            </div>

            <div className={styles.input_row}>
              <button type='submit' className={styles.add_btn} onClick={e => handleSubmit(e,onSubmit)}>Login</button>
              <button type='button' className={`${styles.add_btn} ${styles.no_bg}`}>Reset</button>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default LoginView;