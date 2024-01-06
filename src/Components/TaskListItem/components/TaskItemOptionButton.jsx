

import VerticalDotsButton from '../../../assets/icons/VerticalDotsButton';
import styles from '../taskListItem.module.css';

const TaskItemOptionButton = ({ isActive,onClick }) => {
  return (
    <>    
      <VerticalDotsButton className={`${styles.option_btn} ${isActive ? styles.open : ""}`} type="button" width={25} height={25} onClick={onClick} />         
    </>
  );
}

export default TaskItemOptionButton;