import useWEForm from '../../../hooks/useWEForm';

import styles from '../loginView.module.css';

const LoginForm = ({ onSubmit }) => {
  const {formData:loginFormData,registerFormInput,handleSubmit} = useWEForm({
    username: "",
    password: "",
  })
  return (
    <form className={styles.login_form}>

      <div className={styles.input_row}>
        <h1 className={styles.form_heading}>Login</h1>
      </div>
       
      <div className={styles.input_row}>
          <span className={styles.input_container}><input className={styles.login_form_input}  {...registerFormInput("username")} placeholder={"Username"} /></span>
      </div>

      <div className={styles.input_row}>
          <span className={styles.input_container}><input className={styles.login_form_input} type={"password"} {...registerFormInput("password")} placeholder={"Password"} /></span>
      </div>

      <div className={styles.input_row}>
        <a className={styles.reset_link}>Forgot password?</a>
      </div>

      <div className={styles.input_row}>
        <button type='submit' className={styles.add_btn} onClick={e => handleSubmit(e,onSubmit)}>Login</button>
        <button type='button' className={`${styles.add_btn} ${styles.no_bg}`}>Reset</button>
      </div>

    </form>
  );
}

export default LoginForm;