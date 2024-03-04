import { useQuery } from 'react-query';
import { getUsers } from '../../../appUtils';

import styles from './leadMenu.module.css';
import AssigneeListItem from '../../listItems/AssigneeListItem/AssigneeListItem';

const LeadMenu = ({onClick}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`users`],
    queryFn: () => getUsers()
  })


  const selectListItemEvent = (e,assigneeId) => {    
    
    let tmp = assigneeId;
    onClick("contactId",assigneeId);        
    console.log("");
  }



  return (
    <div className={styles.leadMenu}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Project Contact</h2>
      </header>
      
      <section className={styles.section}>
        <ul className={styles.leadList}>
          {data && data.map(d => {
            let tmp = d;
            
            console.log("")
            return (
              <AssigneeListItem data={d} onClick={selectListItemEvent} isSelected={false} />
              // <li className={styles.leadListItem}>{d.firstName + " " + d.lastName}</li>
            )
          })}
        </ul>
      </section>
       
    </div>
  );
}

export default LeadMenu;