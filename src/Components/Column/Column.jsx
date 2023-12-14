// import React, { useRef } from 'react';

// import usePortal from '../../portals/hooks/usePortal';


// import ColumnLayout from './component/ColumnLayout/ColumnLayout';
// import PopoverMenuPortal from '../../portals/PopoverMenuPortal';

import styles from './column.module.css';
import TaskList from '../TaskList/TaskList';
import ColumnHeader from './component/ColumnHeader';
import TaskListItem from '../TaskListItem/TaskListItem';
// import ColumnList from './component/ColumnList';
// import AddGroupMenuPopover from '../../popovers/AddGroupMenuPopover/AddGroupMenuPopover';


function Column({children}){
    
    // const [coords,updateCoordinates,portalState,togglePortal] = usePortal();
    // const addGroupButtonRef = useRef();

    // const groupPopoverNavClickEvent = () => {
    //     togglePortal();
    // }

    // const showAddGroupPopover = (e) => {
    //     e.preventDefault();
    //     const button = e.target.closest('button');        
    //     if (!button) return;
    //     updateCoordinates(button);
        
    //     togglePortal();
    // }

    // const onGroupChange = () => {
    //     togglePortal();
    // }

    return (
        <div className={styles.column}>
          {children}
        </div>
    );
}

Column.Header = ColumnHeader;
Column.TaskList = TaskList;
Column.TaskListItem = TaskListItem;

export default Column;