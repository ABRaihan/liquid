import { useEffect, useState } from 'react';

function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    }
    if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, shouldRender]);
  useEffect(() => {
    let timeoutId;
    if (isMounted) {
      timeoutId = setTimeout(() => setAnimation(true));
    } else {
      setAnimation(false);
    }
  }, [isMounted]);
  return [shouldRender, animation];
}

export default useDelayUnmount;
