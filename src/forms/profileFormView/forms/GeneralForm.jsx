

import TextField from '../../../Components/TextField/TextField';
import styles from '../profileFormView.module.css';
import useWEForm from '../../../hooks/useWEForm';
import { useAuth } from '../../../hooks/useAuth';
import { createFormDataObj } from '../../../Utilities';
import { updateRequest } from '../../../appUtils';
import { API_ENDPOINT } from '../../../config';
import { toast } from '../../../Components/WEToast/WEToast';



const useGeneralForm = (initialState={}) => {
  const auth = useAuth();  
  const {formData,handleSubmit,registerFormInput,updateFormData} = useWEForm({
    id: auth.user.id,
    firstName: auth.user.firstName,
    lastName: auth.user.lastName,
    color: auth.user.color,
    avatarImg: auth.user.avatarImg
  });  
  
  const handleInputClick = (e) => {

  }

  const handleFormSubmit = (e,args={}) => {
    const {args:formArgs,formData,validationStatus} = handleSubmit(e);      
    var fd = createFormDataObj({update:JSON.stringify({userId:formData.id,update:formData})});
    fd.append("action","updateUser");
    updateRequest(API_ENDPOINT,fd,()=> {
      auth.updateUser(formData);
      toast.success("Updated successfully",{
        position: toast.position.TOP_RIGHT,
        title: "Success"
      })  
    })
    return fd;
  }

  return {
    controller: {
      formData,
      handleFormSubmit,
      registerFormInput,      
      handleInputClick,
      updateFormData
    }
  }
}


const GeneralForm = () => {  
  const {controller} = useGeneralForm();
  

  

  return (
    <form className={styles.general_form}>

      <div className={styles.form_content}>

      <div className={styles.avatar}>

        <div className={styles.avatar_container}>

        </div>

        <div>
          <button>Add Profile Image</button>
        </div>

      </div>

        <div className={styles.fields}>
            <TextField {...controller.registerFormInput("firstName")} onClick={controller.handleTextFieldClick} placeholder='First Name' autoComplete={"off"}/>
            <TextField {...controller.registerFormInput("lastName")} onClick={controller.handleTextFieldClick} placeholder='Last Name' autoComplete={"off"} />
            <TextField {...controller.registerFormInput("color")} onClick={controller.handleTextFieldClick} placeholder='Color' autoComplete={"off"}/>
        </div>

          
      </div>

      <div className={styles.form_controls}>
        <button className={styles.main_button} type='button' onClick={(e) => controller.handleFormSubmit(e)}>Save</button>
        <button className={`${styles.main_button} ${styles.outline}`} type='button' onClick={(e) => {}}>Cancel</button>
      </div>

      </form>
  );
}

export default GeneralForm;