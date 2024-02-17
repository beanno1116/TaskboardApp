import { useQuery } from 'react-query';

import styles from '../taskListItem.module.css';
import { getUser } from '../../../appUtils';
import { capitalizeFirstLetter } from '../../../Utilities';


const getinitials = (user) => {
  debugger;
  if (!user) return "";  
  if (Reflect.ownKeys(user).length === 0) return "";
  let firstName = user.firstName;
  let lastName = user.lastName;
  
  let initials = `${capitalizeFirstLetter(firstName.charAt(0))}${capitalizeFirstLetter(lastName.charAt(0))}`;
  return initials;
}

const TaskItemContact = ({ contact }) => {  
  const {isLoading,isError,data} = useQuery({
    queryKey: [`${contact}`],
    queryFn: () => getUser(contact)
  })

  return (
    <div title={contact ? contact : ""} className={styles.contact}>
      <span className={styles.contact_initials}>
        {isLoading && "? ?"};
        {data && getinitials(data)}
      </span>
    </div>
  );
}

export default TaskItemContact;