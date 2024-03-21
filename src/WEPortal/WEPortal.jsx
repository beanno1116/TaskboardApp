import { useLayoutEffect,useState } from "react";
import { createPortal } from "react-dom";
import { isEmpty } from "../appUtils";

const createPortalElement = (portalId) => {
  try {
    if (isEmpty(toastPortalId)) throw new Error("Must provide a portalId");
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id',toastPortalId);
    document.body.appendChild(wrapper);
    return wrapper;  
  } catch (error) {
    console.error(`[WEPortal.jsx][FNC][createPortal][ERROR]-${error.message}`);
  }
}

const WEPortal = ({ children,portalId = "we_portal" }) => {
  const [portal,setPortal] = useState(null);

  useLayoutEffect(() => {
    let portalWrapper = document.getElementById(portalId);
    let portalCreated = false;
    if (!portalWrapper){
      portalCreated = true;
      portalWrapper = createPortalElement(portalId);
    }
    setPortal(portalWrapper);
    return () => {
      if (portalCreated && portalWrapper.parentNode) {
        portalWrapper.parentNode.removeChild(portalWrapper);
        portalCreated = false;
      }
    }
  },[toastPortalId]);

  if (portal === null) return null;

  return createPortal(children,portal);
}

export default WEPortal;