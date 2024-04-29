

import TextField from '../../../Components/TextField/TextField';
import styles from '../profileFormView.module.css';
import useWEForm from '../../../hooks/useWEForm';
import { useAuth } from '../../../hooks/useAuth';
import { createFormDataObj } from '../../../Utilities';
import { updateRequest } from '../../../appUtils';
import { API_ENDPOINT } from '../../../config';
import { toast } from '../../../Components/WEToast/WEToast';
import TBButton from '../../../Components/TBButton/TBButton';




const useSecurityForm = (initialState={}) => {
  const auth = useAuth();  
  debugger;
  const {formData,handleSubmit,registerFormInput,updateFormData} = useWEForm({
    id: auth.user.id,
    email: auth.user.email,
    phone: auth.user.phone,
    extension: auth.user.extension    
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


const SecurityForm = () => {  
  const {controller} = useSecurityForm();
  

  

  return (
    <form className={styles.general_form}>

      <div className={styles.form_content}>

      
        <TextField {...controller.registerFormInput("email")} onClick={controller.handleTextFieldClick} placeholder='UserName' autoComplete={"off"}/>
        {/* <TextField {...controller.registerFormInput("email")} onClick={controller.handleTextFieldClick} placeholder='Email' autoComplete={"off"} />
        <TextField {...controller.registerFormInput("extension")} onClick={controller.handleTextFieldClick} placeholder='Ext' autoComplete={"off"}/> */}

        
          
      </div>

      <div className={styles.form_controls}>
        <TBButton text={"Save"} onClick={controller.handleFormSubmit} btnType='action'/>
        {/* <TBButton text={"Cancel"} onClick={controller.handleFormCancel} />         */}
      </div>

      </form>
  );
}

export default SecurityForm;