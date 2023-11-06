// import React, { useRef } from 'react';

// import usePortal from '../../portals/hooks/usePortal';


// import ColumnLayout from './component/ColumnLayout/ColumnLayout';
// import PopoverMenuPortal from '../../portals/PopoverMenuPortal';

import styles from './column.module.css';
import ColumnHeader from './component/ColumnHeader';
import ColumnList from './component/ColumnList';
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
            {/* {portalState && (
                    <PopoverMenuPortal>
                        <AddGroupMenuPopover
                            action={onGroupChange}
                            coords={coords}
                            height={"380"}
                            updatePopoverCoords={() => updateCoordinates(addGroupButtonRef.current)}
                        />                       
                    </PopoverMenuPortal>
                )}
            <ColumnLayout>
                <ColumnLayout.Header addGroupAction={showAddGroupPopover}>{heading}</ColumnLayout.Header>
                <ColumnLayout.Body>{children}</ColumnLayout.Body>
            </ColumnLayout>   */}
        </div>
    );
}

Column.header = ColumnHeader;
Column.list = ColumnList;

export default Column;