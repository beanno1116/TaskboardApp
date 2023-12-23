

import LeftDblCheveronButton from '../../../../assets/icons/LeftDblCheveronButton';
import styles from '../listMenu.module.css';

const Header = ({ text,onClick }) => {
  return (
    <div className={styles.header}>      
      <LeftDblCheveronButton width={22} height={22} onClick={onClick} type={"button"} className={styles.header_btn} />
      <div className={styles.title}>{text}</div>
      <div className={styles.block_placeholder}></div>
    </div>
  );
}

export default Header;