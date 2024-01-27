import { useEffect } from 'react';
import TBForm from '../../../Components/TBForm/TBForm';
import useWEForm from '../../../hooks/useWEForm';

import styles from '../loginView.module.css';

const LoginForm = ({ onSubmit }) => {
  const {formData:loginFormData,registerFormInput,handleFormReset,handleSubmit} = useWEForm({
    username: "",
    password: "",
  })



 

  return (
      <TBForm>

        {/* Form header row */}
        <TBForm.Row>
          <TBForm.Header text={"Login"} />
        </TBForm.Row>

        {/* Email text input row */}
        <TBForm.Row>
          <TBForm.InputWrapper>
            <TBForm.TextField  type={"email"} {...registerFormInput("username",{required:true,submitOnly:true,validator:"email"})} placeholder={"Username"} />          
          </TBForm.InputWrapper>
        </TBForm.Row>

        {/* Password text input row */}
        <TBForm.Row>
          <TBForm.InputWrapper>
            <TBForm.TextField  type={"password"} {...registerFormInput("password",{required:true,submitOnly:true})} placeholder={"Password"} />
          </TBForm.InputWrapper>
        </TBForm.Row>

        {/* Forgot password anchor row */}
        <TBForm.Row>
          <TBForm.Link text={"Forgot password?"}/>
        </TBForm.Row>

        {/* Form login and reset button row */}
        <TBForm.Row>
          <TBForm.Button type="submit" onClick={e => handleSubmit(e,onSubmit)} >Login</TBForm.Button>
          <TBForm.Button no_bg onClick={handleFormReset}>Reset</TBForm.Button>
        </TBForm.Row>

      </TBForm>
  );
}

export default LoginForm;