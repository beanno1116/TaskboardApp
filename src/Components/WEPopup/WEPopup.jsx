import { Children, cloneElement, useState, useRef } from 'react';
// import Popup from './components/Popup';

// import { getDOMRectObj, getHiddenDOMRectObj } from '../../utils/DOMUtils';


import styles from './wePopup.module.css';
// import usePopoverPosition from '../../hooks/usePopoverPosition';

const defaultOptions = {
  position: 'center',
  arrow: false
}

// TODO: add inside flag
// TODO: add support for absolute position child by accepting a style prop that mirrors the child css styles

const WEPopup = ({ popup, children }) => {
  const childArray = Children.toArray(children);
  const [isVisible, setIsVisible] = useState(false);
  // const { getPopoverPosition, coordinates } = usePopoverPosition();


  const popupRef = useRef(null);

  const onClickHandler = (e, handler) => {
    e.stopPropagation();
    e.preventDefault();
    // let anchorEleRect = getDOMRectObj(e.currentTarget);
    // let popupEleRect = getHiddenDOMRectObj(popupRef.current, styles.show, true);
    // getPopoverPosition(anchorEleRect, popupEleRect);
    // setIsVisible(!isVisible);
    handler && handler(e);
  }

  return (
    <div style={{ position: 'relative', overflow: "visible" }}>
      {/* <Popup content={popup} show={isVisible} handleClose={setIsVisible} top={coordinates.top} left={coordinates.left} width={coordinates.width} height={coordinates.height} ref={popupRef} /> */}
      {Children.map(childArray, (child, index) => {
        let eventAction = child.props.onClick;
        let onClick = (e) => onClickHandler(e, eventAction);
        return cloneElement(child, { onClick }, child.props.children);
      })}
    </div>
  );
}

export default WEPopup;