



import { useContext,useRef,useEffect, useState } from 'react';

// import { AddTaskFormProvider,AddTaskFormContext } from '../../context/AddTaskFormContext';

// import { icon } from '../../../../../../assets/Icon';

import styles from './addTaskItemForm.module.css';

const Form = ({ onClick,isFocused,action,children }) => {
    return (
        <form className={styles.form}>
            {children}
        </form>
    )
}

const Nav = ({ action }) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_section}>
                <button name={"add_task"} className={styles.add_btn} onClick={action}>Add Task</button>
                <button name={"close_task"} className={styles.close_btn} onClick={action}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M16.95 5.636l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className={styles.nav_section}>
                <button name={"task_options"} className={styles.options_btn} onClick={action}>
                    {icon(24).hThreeDots}
                </button>
                <button name={"task_assign"} className={styles.assign_btn} onClick={action}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M12 2c.685 0 1.354.069 2.001.2v2.052a8 8 0 00-7.86 13.195 3.988 3.988 0 011.981-1.05A19.248 19.248 0 0112 16c1.292 0 2.585.133 3.877.398.76.156 1.444.525 1.983 1.048A7.97 7.97 0 0020 12c0-.69-.087-1.36-.252-2H21.8c.131.646.2 1.315.2 2a9.971 9.971 0 01-3.073 7.212l-.001.001-.056.053a10.057 10.057 0 01-1.61 1.24A9.953 9.953 0 0112 22a9.954 9.954 0 01-4.951-1.31l-.31-.184-.02-.013a10.02 10.02 0 01-1.634-1.27l-.012-.01A9.971 9.971 0 012 12C2 6.477 6.477 2 12 2zm0 16c-1.157 0-2.315.119-3.476.357a1.998 1.998 0 00-.831.385A7.958 7.958 0 0012 20a7.963 7.963 0 004.307-1.257 1.984 1.984 0 00-.832-.386A17.249 17.249 0 0012 18zm0-11a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm8-7v2h2v2h-2v2h-2V5.999L16 6V4l2-.001V2h2z" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
}

const FormContent = ({ isFocused,action }) => {
    const {state,dispatch} = useContext(AddTaskFormContext);

    const inputRef = useRef();

    useEffect(() => {
        if (!isFocused) return;
        inputRef.current.focus();
    },[isFocused]);

    return (
        <div className={styles.form_content}>
            <div className={styles.input_row}>
                <input ref={inputRef} className={styles.board_input} placeholder={"Task Name *"} value={state.title} onChange={e => dispatch({type:"title",payload:e.target.value})}/>
            </div>
            <div className={styles.input_row}>
                <textarea className={styles.board_textarea} placeholder={"Task Description *"} value={state.description} onChange={e => dispatch({type:"description",payload:e.target.value})}></textarea>
            </div>
        </div>
    )
}

const actions = {
    add_task: (e) => {
        
    },
    close_task: (e) => {

    }
}

const findParentButton = (_child) => {
    let retButton = undefined;
    if (_child.type === "submit" || _child.type === "button"){
        return _child;
    }
    if (_child.localName === 'svg' || _child.localName === 'path'){
        retButton = _child.closest('button');
    }
    return retButton;
}

const taskTypes = {
    dev: 0,
    gen: 1
}

function AddTaskItemForm({ type,isFocused,onSubmit }) {
  
    const [formData,setFormData] = useState({
      name: "",
      description:""
    })

    const resetForm = () => {
      setFormData({name:"",description:""})
    }

    const handleOnSubmit = (e) => {
      
      try {
        onSubmit && onSubmit(e,{...formData})
        resetForm();
      } catch (error) {
        console.log(error.message);
      }
    }

    const handleOnChange = (e,name) => {
      setFormData({
        ...formData,
        [name]: e.target.value,
      })
    }
    
    const navAction = (e) => {        
        
        e.preventDefault();
        // const handler = actions[e.target.name];
        let button = findParentButton(e.target);
        if (!button) return;
        
        let action = button.name;
        switch (action) {
            case "add_task":
                let currentState = {...state,type:taskTypes[type]};
                dispatch({type:""});
                onSubmit && onSubmit(currentState);
                break;
            case "close_task":
                dispatch({type:""});
                onSubmit && onSubmit();
                break;
        
            default:
                break;
        }
    }


    return (    
      <div className={styles.add_task_form}>

      <form className={styles.form}>

       

        <div className={styles.form_content}>
            <div className={styles.input_row}>
                <input className={styles.board_input} placeholder={"Task Name *"} value={formData.name} onChange={e => handleOnChange(e,"name")}/>
            </div>
            <div className={styles.input_row}>
                <textarea className={styles.board_textarea} placeholder={"Task Description *"} value={formData.description} onChange={e => handleOnChange(e,"description")}></textarea>
            </div>
        </div>

        <nav className={styles.nav}>
            <div className={styles.nav_section}>
                <button name={"add_task"} className={styles.add_btn} onClick={(e) => handleOnSubmit(e)}>Add Task</button>
                <button name={"close_task"} className={styles.close_btn} onClick={() => {}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M16.95 5.636l1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className={styles.nav_section}>
                <button name={"task_options"} className={styles.options_btn} onClick={() => {}}>
                    X
                </button>
                <button name={"task_assign"} className={styles.assign_btn} onClick={() => {}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M12 2c.685 0 1.354.069 2.001.2v2.052a8 8 0 00-7.86 13.195 3.988 3.988 0 011.981-1.05A19.248 19.248 0 0112 16c1.292 0 2.585.133 3.877.398.76.156 1.444.525 1.983 1.048A7.97 7.97 0 0020 12c0-.69-.087-1.36-.252-2H21.8c.131.646.2 1.315.2 2a9.971 9.971 0 01-3.073 7.212l-.001.001-.056.053a10.057 10.057 0 01-1.61 1.24A9.953 9.953 0 0112 22a9.954 9.954 0 01-4.951-1.31l-.31-.184-.02-.013a10.02 10.02 0 01-1.634-1.27l-.012-.01A9.971 9.971 0 012 12C2 6.477 6.477 2 12 2zm0 16c-1.157 0-2.315.119-3.476.357a1.998 1.998 0 00-.831.385A7.958 7.958 0 0012 20a7.963 7.963 0 004.307-1.257 1.984 1.984 0 00-.832-.386A17.249 17.249 0 0012 18zm0-11a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm8-7v2h2v2h-2v2h-2V5.999L16 6V4l2-.001V2h2z" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </nav>
      </form>    
      </div>
        
        
    );
}

export default AddTaskItemForm;