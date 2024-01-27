import TBForm from '../../../Components/TBForm/TBForm';
import useWEForm from '../../../hooks/useWEForm';

import styles from '../loginView.module.css';

const SignupForm = ({ onSubmit }) => {

  const {formData:loginFormData,registerFormInput,handleFormReset,handleSubmit} = useWEForm({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  return (
    <TBForm>
      {/* Form header row */}
      <TBForm.Row>
          <TBForm.Header text={"Create Account"} />
        </TBForm.Row>

        {/* Email text input row */}
        <TBForm.Row>
          <TBForm.InputWrapper>
            <TBForm.TextField  type={"email"} {...registerFormInput("email",{required:true,submitOnly:true})} placeholder={"Email"} />          
          </TBForm.InputWrapper>
        </TBForm.Row>

        {/* Password text input row */}
        <TBForm.Row>
          <TBForm.InputWrapper>
            <TBForm.TextField  type={"password"} {...registerFormInput("password",{required:true,submitOnly:true})} placeholder={"New Password"} />
          </TBForm.InputWrapper>
        </TBForm.Row>

         {/* Password text input row */}
         <TBForm.Row>
          <TBForm.InputWrapper>
            <TBForm.TextField  type={"password"} {...registerFormInput("passwordConfirm",{required:true,submitOnly:true})} placeholder={"Confirm password"} />
          </TBForm.InputWrapper>
        </TBForm.Row>

     
        {/* Form login and reset button row */}
        <TBForm.Row>
          <TBForm.Button type='submit' onClick={e => handleSubmit(e,onSubmit)} >Create</TBForm.Button>
          <TBForm.Button no_bg onClick={handleFormReset}>Reset</TBForm.Button>
        </TBForm.Row>
    </TBForm>    
  );
}

export default SignupForm;