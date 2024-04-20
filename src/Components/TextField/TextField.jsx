

import { forwardRef,useRef } from 'react';
import StatusIndicator from './components/StatusIndicator';
import ClearButton from './components/ClearButton';

import styles from './textField.module.css';



// const defaultCSS = {
//   backgroundColor: "#242424",
//   borderColor: "#43C59E",
//   borderRadius: ".25rem",
//   errorColor: "#ED6A5A",
//   successColor: "#0CCE6B",
//   onFocusBorderColor: "#15feb8",
//   onFocusBackgrounColor: "#102A43",
//   fontSize: "1rem",
//   fontFamily: "'Secular One', sans-serif",
//   color: "rgba(255, 255, 255, 0.87)"
// }

const defaultCSS = {
  backgroundColor: "#0f1113",  
  borderColor: "var(--site-primary-color)",
  borderRadius: ".25rem",
  errorColor: "#ED6A5A",
  successColor: "#0CCE6B",
  onFocusBorderColor: "hsl(219, 61%, 57%)",
  onFocusBackgroundColor: "#252a2e",
  fontSize: "1rem",
  fontFamily: "'Secular One', sans-serif",
  color: "var(--site-text-color)"
}


const TextField = forwardRef(( {name,style={},onChange,value,status="idle",...props},ref ) => {

  const idStr = useRef(Math.floor(Math.random() * 1000)).current;
  const containerRef = useRef(null);

  const containerStyle = () => {

  
    const themeStyles = {};
    const styleObj = {};
    const propStyleObj = style ? style : {}; 

    const defaultCssKeys = Object.keys(defaultCSS);
    const propStyleKeys = Object.keys(propStyleObj);

    if (propStyleKeys.length !== 0){
      for (const key in propStyleObj) {
        const filterResulta = defaultCssKeys.filter(k => key === k);
        if (filterResulta.length > 0) {
          let styleStr = `--${key}`
          themeStyles[styleStr] = propStyleObj[key];
        }else{
          styleObj[key] = propStyleObj[key];
        }

      }
      return {...themeStyles,...styleObj};
    }

    for (const key in defaultCSS) {
      if (Object.hasOwnProperty.call(defaultCSS, key)) {
        const style = defaultCSS[key];
        let keystr = `--${key}`;
        styleObj[keystr] = style;        
      }
    }
    console.log(styleObj);    
    return styleObj;
  }


  const onClearInputClickEvent = (e) => {
    const evnt = {
      target: {
        value: ""
      }
    }
    onChange(evnt);
  }

  const onBlurHandler = (e) => {
    props.onBlur && props.onBlur(e);
  }

  const onChangeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onChange && onChange(e);
  }
  const onClickHandler = (e) => {
    e.preventDefault();        
  }

  const onResetHandler = (e) => {
    props.onReset && props.onReset(e);
  }

  return (
    <div ref={containerRef} className={`${styles.container} ${props.size ? styles[props.size] : ""}`} name={name} style={containerStyle()}>

      {(status === "busy") && <StatusIndicator className={styles.status} />}
      {(status === "idle" && value == "") && <ClearButton onClick={(e) => onClearInputClickEvent(e)} />}

      <input
        ref={ref}
        // data-display-type="label"
        id={`${name}-${idStr}`}
        name={name}
        className={`${styles.text_field} `}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        disabled={props.disabled}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        required={props?.required || false}
      />

      <label className={styles.text_field_label} htmlFor={`${name}-${idStr}`} aria-label={`${props?.name ? props.name : "a"} text input`}>
        {props.placeholder}
      </label>

    </div> 
  );
})

export default TextField;