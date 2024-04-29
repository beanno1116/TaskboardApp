

import styles from './toolbarNotificationMenu.module.css';

const ToolbarNotificationMenu = ({ menuAction }) => {
  return (
    <div className={styles.menu}>
       <div>
        <h1>Messages</h1>
       </div>
       <div>
        <ul>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
        </ul>
       </div>
    </div>
  );
}

export default ToolbarNotificationMenu;