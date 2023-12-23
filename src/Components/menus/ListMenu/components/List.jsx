


import styles from '../listMenu.module.css';

const List = ({ items,onClick,ListItem }) => {
  
  return (
    <div className={styles.list}>
        <ul>
          {items.map(type => {  
            let tmp = type;
                  
            return (
              <ListItem 
                key={type.id} 
                title={type.title} 
                data={type}
                onClick={() => onClick(type.id)} 
                isSelected={type.selected} 
              />
            )
          })}          
        </ul>
      </div>
  );
}

export default List;