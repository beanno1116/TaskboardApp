import styles from './tbButton.module.css';

const TBButton = ({ text,onClick,btnType }) => {


  const className = () => {
    let classStr = styles.tb_button;
    switch (btnType) {
      case "action":
        classStr = classStr + " " + styles.cto_btn;
        break;
    
      default:
        break;
    }
    return classStr;
  }

  return (
    <button className={className()} type='button' onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

export default TBButton;