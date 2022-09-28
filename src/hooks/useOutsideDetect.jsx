import { useEffect } from 'react';

function useOutsideDetect(ref, fn) {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      fn && fn();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, fn]);
}

export default useOutsideDetect;
