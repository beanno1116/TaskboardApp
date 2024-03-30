import { useEffect, useRef, useState } from 'react';
import useWEForm from '../../../../hooks/useWEForm';
import styles from './addTaskItemForm.module.css';
import { devFetchContacts } from '../../../../data/fakeApi';
import { Task } from '../../../../data/models/task';
import Popover from '../../../Popover/Popover';
import AssigneeButton from '../../../../assets/icons/AssigneeButton';
import VerticalDotsButton from '../../../../assets/icons/VerticalDotsButton';
import ToolbarUserMenu from '../../../menus/ToolbarUserMenu/ToolbarUserMenu';
import TBForm from '../../../TBForm/TBForm';
import FormContent from './components/FormContent';
import FormNav from './components/FormNav';
import AssigneeMenu from '../../../menus/TaskListItemMenu/menus/AssigneeMenu/AssigneeMenu';
import LeadMenu from '../../../menus/LeadMenu/LeadMenu';





function AddTaskItemForm({ isFocused,onSubmit,closeForm,board }) {
  const {updateFormData,registerFormInput,handleSubmit,handleFormReset,handleInputChange} = useWEForm({
    title: "Test task",
    description:"testing the task creation process",
    type: "",
    contactId: "",
    status: 0
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
        debugger;
      if (!isValid) return;      

      closeForm();
      handleFormReset();
      onSubmit && onSubmit({...formData,type:board});
    }

    const onFormCloseClick = (e) => {
      try {
        if (closeForm && closeForm instanceof Function){
          handleFormReset();
          closeForm();
          return; 
        }
        throw new Error(`Function closeForm() does not exist`);
      } catch (error) {
        console.error(`[EVT]onFormCloseClick()[ERROR]-${error.message}[STACK]-${error.stack}`);
      }
    }

    return (    
      <div ref={formContainer} className={`${styles.add_task_form} ${isFocused ? styles.show_form : ""}`}>

        <TBForm style={{justifyContent:"unset",gap:"0",padding:".75rem .75rem"}}>

          <FormContent>

            <TBForm.InputWrapper style={{width:"100%",padding:".5rem 0"}}>
              <TBForm.TextField {...registerFormInput("title",{required:true,submitOnly:true})} placeholder={"Task Title *"} />              
            </TBForm.InputWrapper>

            <TBForm.InputWrapper style={{width:"100%",padding:".5rem 0"}}>
              <TBForm.Textarea {...registerFormInput("description",{submitOnly:true})} placeholder={"Task Description *"} />              
            </TBForm.InputWrapper>

          </FormContent>
          
          <FormNav>

            <div>

              {/* Add task button */}
              <button name={"add_task"} type="submit" className={styles.add_btn} onClick={e => handleSubmit(e,onAddTaskBtnClick)}
              >Add Task</button>

              {/* Close form button */}
              <button name={"close_task"} type="button" className={styles.close_btn} onClick={onFormCloseClick}>
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M16.95 5.636l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" fillRule="evenodd"></path>
                  </svg>
              </button>

            </div>

            <div className={styles.nav_section}>

              <Popover popover={<ToolbarUserMenu />} onClose={() => {}} style={{bottom:"100%",right:"50px",transformOrigin:"bottom right"}} >
                <VerticalDotsButton width={23} height={23} className={styles.assign_btn}/>
              </Popover>

              
              <Popover popover={<LeadMenu onClick={updateFormData}/>} onClose={() => {}} style={{bottom:"100%",right:"0%",transformOrigin:"bottom right"}} >
                <AssigneeButton width={24} height={24} className={styles.assign_btn}/>
              </Popover>


            </div>

          </FormNav>
        
        </TBForm>
        
      </div>
    );
}

export default AddTaskItemForm;