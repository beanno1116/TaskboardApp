import { useQuery } from 'react-query';
import { getUsers } from '../../../appUtils';

import styles from './leadMenu.module.css';
import AssigneeListItem from '../../listItems/AssigneeListItem/AssigneeListItem';
import { useGetUsers } from '../../../api/api';



// const useGetUsers = () => {
//   const { isLoading, isError,isSuccess, data } = useQuery({
//     queryKey: [`users`],
//     queryFn: ({signal}) => getUsers({signal})
//   })

//   const status = {
//     isLoading,
//     isError,
//     isSuccess
//   }

//   return {status,data};
// }

const LeadMenu = ({heading,onClick}) => {
  const {status,data} = useGetUsers();
  const menuItems = data?.results ? data.results : [];
  // const {status,data} = useGetUsers();



  const selectListItemEvent = (e,assigneeId) => {        
    let tmp = assigneeId;
    onClick("contactId",assigneeId);        
    console.log("");
  }



  return (
    <div className={styles.leadMenu}>

      <header className={styles.header}>
        <h2 className={styles.heading}>{heading ? heading : "Project Contact"}</h2>
      </header>
      
      <section className={styles.section}>

        

        <ul className={styles.leadList}>
          
          {!status.isLoading && menuItems.map(d => {
    
            return (
              <AssigneeListItem key={d.id} id={d.id} color={d.color} fullName={`${d.firstName} ${d.lastName}`} onClick={selectListItemEvent} isSelected={false} />              
            )
          })}
        </ul>
      </section>

    </div>
  );
}

export default LeadMenu;