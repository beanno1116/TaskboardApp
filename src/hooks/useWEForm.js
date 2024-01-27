import { useState, useRef } from 'react';

const uuid = (prefix) => {
  try {
    var text = prefix || "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";  
    for (var i = 0; i < 64; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }  
    return text;
  } catch (error) {
    console.error(`[FNC][UUID][ERROR] - ${error.message}`);
  }        
}

const validator = {
  inputTypes: ["text", "password", "email", "number"],  
  required: (input) => {    
    const type = input.type;
    if (input.value.length === 0) {
      return false;
    }
    return true;
  },
  email: (input) => {
    try {
      let value = input.value;
      const emailRegEx = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm);
      if (emailRegEx.test(value)) {
        return true;
      }
      return false;
      
    } catch (error) {
      
    }
  },
  number: (input) => {

  },
  isValidator: (key) => {    
    return validator.hasOwnProperty(key);
  }
}

const findInputConfig = (name, configsArr) => {
  try {
    if ((!name || name === "") || configsArr.length === 0) return {};
  
    let config = configsArr.filter(x => x.name === name);
    if (config.length === 0) return {};
    return { ...config[0] };
    
  } catch (error) {
    console.error(`[HOOK][FN][ERROR] ${error.message}`);
  }
}

const checkInputForErrors = (_name, errors) => {
  if ((!_name && _name.length === 0) || errors.length === 0) return false;
  const error = errors.filter(x => x.name === _name);
  if (error.length > 0) return true;
  return false;
}
const removeErrorStatus = (input) => {
  input.dataset.error = false;
}
const applyErrorStatus = (input) => {
  input.dataset.error = true;
  input.focus();
}


const getInputType = (input) => {
  try {    
    if (!input) throw new Error("input cannot be undefined");
    if (!input instanceof HTMLInputElement) throw new Error("Input must be of type HTMLInputElement");
    
    if (input?.type) {
      return input.type;
    }
    return "";
        
  } catch (error) {
    console.error(`[HOOK][useWEForm][FN][getInputType][ERROR] - ${error.message}`);
  }
}



const useWEForm = (initialState = {}, onSubmit = null) => {
  const [formData, setFormData] = useState({ ...initialState });
  const [errors, setErrors] = useState([]);
  const inputs = useRef([]);


  const registerInput = (name, input, options) => {
    let inputsCopy = [...inputs.current];

    let result = inputsCopy.filter(x => x.name === name);

    if (result.length === 0) {
      inputs.current = [...inputsCopy, { name, input, options }];
    }
    return input;
  }



  const handleInputChange = (e, inputName) => {
    
    
    const config = findInputConfig(inputName, inputs.current);
    
    const { name, input } = config;

    if (checkInputForErrors(name, errors)) {
      removeErrorStatus(input);
      setErrors([...errors.filter(x => x.name !== name)]);
    }

    setFormData({
      ...formData,
      [name]: e.target.value,
    })
  }

  const handleInputReset = (e, name) => {

    e.stopPropagation();
    const inputDataCopy = formData[name];
    let resetValue = "";
    if (Array.isArray(inputDataCopy)) {
      resetValue = [];
    }
    setFormData({
      ...formData,
      [name]: resetValue
    })
  }

  const handleInputBlur = (e,name) => {

    try {
      
      var inputConfig = findInputConfig(name,inputs.current);
      
      if (Object.keys(inputConfig).length > 0) {
        
        if (Object.keys(inputConfig?.options).length === 0) return;
  
        if (inputConfig?.options?.submitOnly) return;
  
        if (inputConfig?.options?.required) {
          let isValid = validator.required(e.target);
          if (!isValid) {
            inputConfig.valid = false;
            inputConfig.error = { msg: `This field is required`, target: e.target };
            setErrors([inputConfig]);
            applyErrorStatus(inputConfig.input);
          } else {
            inputConfig.valid = true;
          }
          inputsCopy = [...inputsCopy, inputConfig];
          inputs.current = [...inputsCopy];
        }
  
      }     

    } catch (error) {
      console.error(`[HOOK][FN][ERROR] - ${error.message}`)
    }
    console.log(`useWEForm:handleInputBlur:Event:onblur:input:${name}`);
  }

  const handleFormReset = (e) => {

    let inputsCopy = [...inputs.current];

    const formDataCopy = { ...formData };
    for (let prop in formDataCopy) {
      console.log(typeof formDataCopy[prop]);
      switch (typeof formDataCopy[prop]) {
        case "boolean":
          formDataCopy[prop] = false;
          break;
        case "string":
          formDataCopy[prop] = "";
          break;
        case "number":
          formDataCopy[prop] = 0;
          break;
        case "object":
          if (Array.isArray(formDataCopy[prop])) {
            formDataCopy[prop] = [];
          }
          break;
        default:
          formDataCopy[prop] = ""
      }
    }
    setFormData({ ...formDataCopy });
  }

  const handleSubmit = (e,handler, args = {}) => {    
    e.preventDefault();
    e.stopPropagation();
    var validationStatus = true;
    // debugger;
    // check for only inputs with options
    let formInputObjs = inputs.current.filter(x => Object.keys(x.options).length !== 0);

    
        

    formInputObjs.forEach(inputObj => {      
      const { name, input, options } = inputObj;
      
      if (validator.isValidator(getInputType(input))) {
        let validateFn = validator[getInputType(input)];
        if (!validateFn(input)) {
          setErrors([...errors,{msg:"Must provide a value",name:name}]);
          applyErrorStatus(input);
          validationStatus = false;
        }
      }

      for (const option in options) {
        if (validator.isValidator(option)){
          let validateFn = validator[option]
          if (!validateFn(input)) {
            setErrors([...errors,{msg:"Must provide a value",name:name}]);
            applyErrorStatus(input);
            validationStatus = false;
          }
        }
      }

    });

    handler && handler(e,{...formData}, validationStatus, args)
    return validationStatus;
  }

  const registerFormInput = (name, options = {}) => {
    let inputName = name;
    const retObj = {
      id: uuid(),
      value: formData[inputName],
      name,
      required: options?.required || false,
      "data-error": "false",
      "data-startFocused": options?.startFocused || false,
      ref: (ele) => registerInput(inputName, ele, options),
      onChange: (e) => handleInputChange(e, inputName),
      onReset: (e) => handleInputReset(e, inputName),
      onBlur: (e) => handleInputBlur(e, inputName)
    }
    return retObj;
  }

  const registerFormInputContext = (name, onChange, value, options = {}) => {
    let inputName = name;
    const retObj = {
      value,
      name,
      "data-error": false,
      ref: (ele) => registerInput(inputName, ele, options),
      onChange: (e) => onChange(e, inputName),
    }
    return retObj;
  }

  return { formData, registerFormInput, registerFormInputContext, handleSubmit, handleFormReset,handleInputReset, handleInputChange, errors };
}

export default useWEForm;