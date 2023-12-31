

import AddBoardButton from '../../assets/icons/AddBoardButton';
import UserBadgeButton from '../../assets/icons/UserBadgeButton';
import styles from './taskboardView.module.css';

const TaskboardToolbar = ({ titleText }) => {
  return (
    <div className={styles.taskboard_toolbar}>
        <div className={styles.taskboard_toolbar_container}>Logo</div>
        <div className={styles.taskboard_toolbar_container}>{titleText}</div>
        <div className={styles.taskboard_toolbar_container}>
          <AddBoardButton width={30} height={30} className={styles.option_btn} title={"Add new board"} />
          <UserBadgeButton width={30} height={30} className={styles.option_btn} title={"Show user menu"} />
        </div>
    </div>
  );
}

export default TaskboardToolbar;