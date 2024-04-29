import styles from './contactMenu.module.css';

const ContactMenu = ({ ...props }) => {
  return (
    <div className={styles.menu}>
       <div className={styles.menu_header}>Mike Jones</div>
       <div className={styles.menu_content}>
        <div>
          <span>Email:</span><span>mjones@glds.net</span>
        </div>
        <div>
          <span>Phone:</span><span>mjones@glds.net</span>
        </div>
        <div>
          <span>Ext:</span><span>mjones@glds.net</span>
        </div>
       </div>
       <div className={styles.menu_actions}>
        <button type='button'>Message</button>
        <button type='button'>Email</button>
       </div>
    </div>
  );
}

export default ContactMenu;