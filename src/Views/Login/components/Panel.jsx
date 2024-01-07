import styles from '../loginView.module.css';

const Panel = ({ children,...props }) => {
  const {className} = props;
  return (
    <div className={`${styles.panel} ${className.length > 0 ? className : ""}`}>    
       {children}
    </div>
  );
}

export default Panel;