import { useEffect, useState, useRef } from 'react';


// import useFetch from '../../../../hooks/useFetch';
// import { createFormDataObj, apiDataFetch, getClosestByElement } from '../../../../Utilities';

// import { icon } from '../../../../assets/Icon';



// import useEffectOnce from '../../../../hooks/useEffectOnce';

// import styles from './poAssigneeMenu.module.css';
import styles from './popover.module.css';
import ListSeperator from '../ListSeperator/ListSeperator';

// const usePOAssigneeMenu = () => {

// }

function AssigneePOMenu({ onMenuBack, onChange, task }) {
  // const [response,error,loading] = useFetch('https://taskboard.gldstools.com/api.php',{method:"POST",body:createFormDataObj({action:'list_users'})});
  const [isActive, setIsActive] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // const usersRef = useRef(null);
  const inputRef = useRef(null);

  // const fetchUsers = () => {
  //   let formData = createFormDataObj({ action: 'list_users' });
  //   apiDataFetch('https://taskboard.gldstools.com/api.php', { method: "POST", body: formData }).then(result => {
  //     if (result.success) {
  //       usersRef.current = [...result.data];
  //       setResults([...result.data]);
  //     }
  //     console.log(result);
  //   }).catch(error => {
  //     console.error('Error:', error);
  //   })
  // }
  // const updateTaskAssignee = (_assigneeId) => {
  //   let formData = createFormDataObj({ action: "update_task", value: _assigneeId, field: "assignee_id", tid: task.id });
  //   apiDataFetch('https://taskboard.gldstools.com/api.php', { method: "POST", body: formData }).then(result => {
  //     if (result.success) {

  //     }
  //     console.log(results);
  //   }).catch(error => {
  //     console.error('Error:', error);
  //   })
  // }

  // useEffectOnce(() => {
  //   fetchUsers();
  //   let intv = setInterval(() => {
  //     setIsActive(true);
  //     clearInterval(intv);
  //   }, 50);
  //   return () => setIsActive(false);
  // })

  // useEffectOnce(() => {
  //   let intv = setInterval(() => {
  //     inputRef.current.focus();
  //     clearInterval(intv);
  //   }, 400);
  // })

  // const searchOnTerm = (e) => {
  //   setSearchTerm(e.target.value);
  //   if (e.target.value === "") {
  //     setResults([...usersRef.current]);
  //     return;
  //   }
  //   let resultArr = results.filter(result => {
  //     let fullName = `${result.first_name} ${result.last_name}`;
  //     if (fullName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
  //       return result;
  //     }
  //   })
  //   if (resultArr.length > 0) {
  //     setResults([...resultArr]);
  //   }
  // }

  // const onMenuItemClick = (e, index) => {
  //   let tmpUser = results[index];
  //   task.assignee_id = tmpUser.id;
  //   onChange && onChange({ target: { value: task } })
  // }


  return (
    <POMenu isActive={true}>

      <Header>
        <HeaderButton onClick={onMenuBack}>{}</HeaderButton>
        <Title>{"Assignees"}</Title>
      </Header>

      <ListSeperator />
      

      <SearchField>
        <input ref={inputRef} type={"text"} className={styles.search_input} value={""} onChange={""} />
      </SearchField>

      <AssigneeList>
        {
        
          results &&
          results.map((user, index) => {
            return (
              <ListItem key={user.id} data={user} isSelected={user.id === task.assignee_id ? true : false} onClick={() => {}} />
            )
          })
        }
      </AssigneeList>

    </POMenu>
  )
}

const POMenu = ({ isActive, children }) => {
  return (
    <div className={`${styles.menu} ${isActive ? styles.show_menu : ""}`}>
      {children}
    </div>
  )
}

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}

const HeaderButton = ({ onClick, children }) => {
  return (
    <button className={styles.header_btn} type={'button'} onClick={onClick}>
      {children}
    </button>
  )
}

const Title = ({ children }) => {
  return (
    <>
      <div className={styles.title}>{children}</div>
      <div className={styles.title_placeholder}></div>
    </>
  )
}

const SearchField = ({ children }) => {
  return (
    <div className={styles.search_row}>
      {children}
    </div>
  )
}

const AssigneeList = ({ children }) => {
  return (
    <div className={styles.list}>
      <ul>
        {children}
      </ul>
    </div>
  )
}

const ListItem = ({ data, onClick, isSelected }) => {
  return (
    <li key={data.id} className={`${isSelected ? styles.selected : ""}`} onClick={onClick}>
      <div className={styles.initials}>
        {/* {`${Array.from(data.first_name)[0]}${Array.from(data.last_name)[0]}`} */}
      </div>
      <div className={styles.name}>
        {`${data.first_name} ${data.last_name}`}
      </div>
      <div className={styles.checkbox}></div>
    </li>
  )
}



export default AssigneePOMenu;