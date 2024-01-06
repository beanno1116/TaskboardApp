import { useEffect, useRef } from "react";


const useEffectOnce = (effect) => {
  const didRun = useRef(false);
  useEffect(() => {
    if (didRun.current && didRun.current === false) {
      return effect;
    }
  }, [effect]);
};

export default useEffectOnce;