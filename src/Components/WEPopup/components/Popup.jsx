import { forwardRef, useEffect } from 'react';
import styles from '../wePopup.module.css';

const Popup = forwardRef(({ content, show, handleClose, top, left, width, height }, ref) => {

  // debugger;
  let w = (width === 'unset') ? 'unset' : width + 'px';
  let h = (height === 'unset') ? 'unset' : height + 'px';

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    }
  })

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      show && handleClose(false);
    }
  }

  return (
    <div ref={ref} className={`${styles.popup} ${show ? styles.show : ""}`} style={{ top: top + "px", left: left + "px", width: w, height: h }}>
      <div className={styles.popup_content}>
        {content}
      </div>
    </div >
  );
})

export default Popup;