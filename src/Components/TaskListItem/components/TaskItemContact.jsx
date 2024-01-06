

import styles from '../taskListItem.module.css';


const getinitials = (_name) => {
  if (!_name) return " ";
  let nameArr = _name.split(" ");
  let initials = `${nameArr[0].charAt(0)}${nameArr[1].charAt(0)}`;
  return initials;
}

const TaskItemContact = ({ contact }) => {
  return (
    <div title={contact ? contact : ""} className={styles.contact}>
      <span className={styles.contact_initials}>
        {contact && getinitials(contact)}
      </span>
    </div>
  );
}

export default TaskItemContact;