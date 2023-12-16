import { useState, useRef } from 'react';

const validator = {
  inputTypes: ["text", "password", "email", "number"],
  required: (input) => {
    
    const type = input.type;
    if (input.value.length === 0) {
      return false;
    }
    return true;
  }
}

const findInputConfig = (name, configsArr) => {
  if ((!name || name === "") || configsArr.length === 0) return {};

  let config = configsArr.filter(x => x.name === name);
  if (config.length === 0) return {};
  return { ...config[0] };
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
  }



  const handleInputChange = (e, inputName) => {
    // 
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

    // debugger;
    // let name = e.target.getAttribute('name');

    let inputsCopy = [...inputs.current];


    let configIdx = inputsCopy.findIndex(x => x.name === name);
    let inputConfig = inputsCopy.splice(configIdx, 1);


    if (inputConfig.length > 0) {
      inputConfig = inputConfig[0];
      if (Object.keys(inputConfig?.options).length === 0) return;

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

  const handleSubmit = (e, handler, args = {}) => {    
    e.preventDefault();
    e.stopPropagation();
    const inputsCopy = [...inputs.current];
    let configs = inputsCopy.filter(x => Object.keys(x.options).length !== 0);
    let validationStatus = true;
    let formDataCopy = { ...formData };

    configs.forEach(config => {
      const { name, input, options } = config;

      for (const option in options) {
        let runValidation = options[option];

        const validate = validator[option];

        if (runValidation) {
          if (!validate(input)) {
            setErrors([...errors, { msg: "Must provide a value", name: name }]);
            applyErrorStatus(input);
            validationStatus = false;
          }
        }
      }
    });

    handler && handler(e,formDataCopy, validationStatus, args)
    return validationStatus;
  }

  const registerFormInput = (name, options = {}) => {
    let inputName = name;
    const retObj = {
      value: formData[inputName],
      name,
      required: options?.required || false,
      "data-error": "false",
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

  return { formData, registerFormInput, registerFormInputContext, handleSubmit, handleFormReset, handleInputChange, errors };
}

export default useWEForm;