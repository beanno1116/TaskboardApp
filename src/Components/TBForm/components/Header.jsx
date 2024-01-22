import styles from '../tbForm.module.css';

const Header = ({ text,...props }) => {
  const {className,style} = props;
  return (
    <h1 className={`${styles.heading} ${className ? className : ""}`} style={{...style}} >{text}</h1>
  );
}

export default Header;