import styles from '../column.module.css';

const ColumnHeader = ({ children }) => {
  return (
      <div className={styles.header}>
          <h1>{children}</h1>
          <div className={styles.header_button}>
              {/* <WELabelButton onClick={addGroupAction} >                
                  {"add a group"}                
              </WELabelButton>           */}
          </div>
      </div>
  )
}
export default ColumnHeader;