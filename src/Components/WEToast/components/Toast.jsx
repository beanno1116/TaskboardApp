import styles from '../weToastPortal.module.css';
import SuccessIcon from './icons/SuccessIcon';
import CloseIcon from './icons/CloseIcon';
import ErrorIcon from './icons/ErrorIcon';
import InfoIcon from './icons/InfoIcon';
import WarningIcon from './icons/WarningIcon';


const ToastIcon = ({ children }) => {
  return (
    <div className={styles.icon}>
      {children}
    </div>
  )
}
const ToastBody = ({ children }) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}
const ToastTitle = ({ children }) => {
  return (
    <div className={styles.title}>
      <h1>{children}</h1>
    </div>
  )
}
const ToastMsg = ({ children }) => {
  return (
    <div className={styles.message}>
      {children}
    </div>
  )
}
const CloseButton = ({ onClick }) => {
  return (
    <button className={styles.close_btn} onClick={onClick} >
      <CloseIcon width={28} height={28} />
    </button >
  )
}

const toastIcon = {
  success: <SuccessIcon width={20} height={20} />,
  info: <InfoIcon width={20} height={20} />,
  warn: <WarningIcon width={20} height={20} />,
  error: <ErrorIcon width={20} height={20} />
}


const Toast = ({ msg, title, type, position, onClick }) => {
  


  return (
    <div className={`${styles.toast_item} ${styles[type]}`}>
      <ToastIcon>
        {toastIcon[type]}
      </ToastIcon>
      <ToastBody>
        <ToastTitle>{title}</ToastTitle>
        <ToastMsg>{msg}</ToastMsg>
      </ToastBody>
      <CloseButton onClick={onClick} />
    </div>
  );
}

export default Toast;