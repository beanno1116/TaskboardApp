import styles from '../tbForm.module.css';

const Link = ({ link="#",text,...props }) => {
  const {className,style} = props;
  return (
    <>
      <a href={link} className={`${styles.link} ${className ? className : ""}`} style={{...style}}>{text}</a>
    </>    
  );
}

export default Link;