import { useEffect, useRef, useState } from 'react';
import useWEForm from '../../../../hooks/useWEForm';
import styles from './addTaskItemForm.module.css';
import { devFetchContacts } from '../../../../data/fakeApi';
import { Task } from '../../../../data/models/task';
import Popover from '../../../Popover/Popover';
import AssigneeButton from '../../../../assets/icons/AssigneeButton';
import EditButton from '../../../../assets/icons/EditButton';
import SettingsButton from '../../../../assets/icons/SettingsButton';
import VerticalDotsButton from '../../../../assets/icons/VerticalDotsButton';
import ToolbarUserMenu from '../../../menus/ToolbarUserMenu/ToolbarUserMenu';


const useForm = (initialState) => {
  const [formData,setFormData] = useState({...initialState});

  const resetForm = () => {
    setFormData(initialState);
  }

  const handleOnSubmit = (handler) => {
    
    handler(formData);
    resetForm();
  }

  const handleOnChange = (e,name) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    })
  }

  return {formData,handleOnSubmit,handleOnChange,resetForm}
}


function AddTaskItemForm({ isFocused,onSubmit,closeForm }) {
  const {registerFormInput,handleSubmit,handleFormReset} = useWEForm({
    title: "",
    description:"",
    assignee: ""
  })

  const initialFocusEle = useRef(null);
  const formContainer = useRef(null);


  useEffect(() => {
    var intv;        
    if (initialFocusEle.current) {
      intv = setTimeout(() => {
        if (initialFocusEle.current.children.length > 0) {
          initialFocusEle.current.children[0].focus(); 
        }        
        clearTimeout(intv);
      },200);
    }
    return () => {
      clearTimeout(intv);
    }
  },[isFocused])
   

    const assignTask = (e) => {
      const contacts = devFetchContacts();
      console.log(contacts);
    }

    const onAddTaskBtnClick = (e,formData,isValid) => {      
      if (!isValid) return;
      closeForm();
      handleFormReset();
      onSubmit && onSubmit(e,formData);
    }

    return (    
      <div ref={formContainer} className={`${styles.add_task_form} ${isFocused ? styles.show_form : ""}`}>

        <form className={styles.form}>

          <div className={styles.form_content}>
            
              <div ref={initialFocusEle} className={styles.input_row}>
                  <input className={styles.board_input} {...registerFormInput("title",{required:true,submitOnly:true})} placeholder={"Task Title *"} />                  
              </div>

              <div className={styles.input_row}>
                  <textarea className={styles.board_input} {...registerFormInput("description",{submitOnly:true})} placeholder={"Task Description *"}></textarea>                  
              </div>

          </div>

          <nav className={styles.nav}>

              <div>

                  <button name={"add_task"} type="submit" className={styles.add_btn} onClick={e => handleSubmit(e,onAddTaskBtnClick)}
                  >Add Task</button>
                  

                  <button name={"close_task"} type="button" className={styles.close_btn} onClick={closeForm}>
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                          <path d="M16.95 5.636l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" fillRule="evenodd"></path>
                      </svg>
                  </button>

              </div>

              <div className={styles.nav_section}>

                <Popover popover={<ToolbarUserMenu />} onClose={() => {}} style={{bottom:"100%",right:"50px",transformOrigin:"bottom right"}}  >                  
                  <VerticalDotsButton width={23} height={23} className={styles.assign_btn}/>
                </Popover>
                 

                  <Popover popover={<ToolbarUserMenu />} onClose={() => {}} style={{bottom:"100%",right:"0%",transformOrigin:"bottom right"}} >
                    <AssigneeButton width={24} height={24} className={styles.assign_btn}/>
                  </Popover>


              </div>

          </nav>

        </form>

      </div>
    );
}

export default AddTaskItemForm;