import useWEForm from '../../../hooks/useWEForm';

import styles from '../loginView.module.css';

const SignupForm = ({ onSubmit }) => {

  const {formData:loginFormData,registerFormInput,handleFormReset,handleSubmit} = useWEForm({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  return (
    <form className={styles.signup_form}>

      <div className={styles.input_row}>
        <h1 className={styles.form_heading}>Create Login</h1>
      </div>
       
      <div className={styles.input_row}>
        <span className={styles.input_container}>
          <input className={styles.signup_form_input} type="email"  {...registerFormInput("email",{required:true,submitOnly:true})} placeholder={"Email Address"} />
        </span>
      </div>

      <div className={styles.input_row}>
        <span className={styles.input_container}>
          <input className={styles.signup_form_input} type={"password"} {...registerFormInput("password",{required:true,submitOnly:true})} placeholder={"New Password"} />
        </span>
      </div>

      <div className={styles.input_row}>
        <span className={styles.input_container}>
          <input className={styles.signup_form_input} type={"password"} {...registerFormInput("passwordConfirm",{required:true,submitOnly:true})} placeholder={"Confirm Password"} />
        </span>
      </div>

      
      <div className={styles.input_row}>
        <button type='button' className={styles.add_btn} onClick={e => handleSubmit(e,onSubmit)}>Login</button>
        <button type='button' className={`${styles.add_btn} ${styles.no_bg}`} onClick={e => handleFormReset(e)}>Reset</button>
      </div>

    </form>
  );
}

export default SignupForm;