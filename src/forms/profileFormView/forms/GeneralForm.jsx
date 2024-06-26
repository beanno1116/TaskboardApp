

import TextField from '../../../Components/TextField/TextField';
import styles from '../profileFormView.module.css';
import useWEForm from '../../../hooks/useWEForm';
import { useAuth } from '../../../hooks/useAuth';
import { createFormDataObj } from '../../../Utilities';
import { updateRequest } from '../../../appUtils';
import { API_ENDPOINT } from '../../../config';
import { toast } from '../../../Components/WEToast/WEToast';
import TBButton from '../../../Components/TBButton/TBButton';
import TBAvatarForm from '../../../Components/TBAvatar/TBAvatarForm';



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

  const handleFormCancel = (e) => {
    const event = new CustomEvent("closemodal", { detail: {modalKey:"profileFormView"} });
    document.dispatchEvent(event);
  }

  return {
    controller: {
      formData,
      handleFormSubmit,
      registerFormInput, 
      handleFormCancel,     
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
        <TBAvatarForm />
      </div>

      <div className={styles.fields}>
          <TextField {...controller.registerFormInput("firstName")} onClick={controller.handleTextFieldClick} placeholder='First Name' autoComplete={"off"}/>
          <TextField {...controller.registerFormInput("lastName")} onClick={controller.handleTextFieldClick} placeholder='Last Name' autoComplete={"off"} />
          <TextField {...controller.registerFormInput("color")} onClick={controller.handleTextFieldClick} placeholder='Color' autoComplete={"off"}/>
      </div>

          
      </div>

      <div className={styles.form_controls}>
        <TBButton text={"Save"} onClick={controller.handleFormSubmit} btnType='action'/>        
      </div>

      </form>
  );
}

export default GeneralForm;