import { useState } from 'react';
import useDelayUnmount from '../hooks/useDelayUnmount';

function TestHooks(props) {
  const [mount, setMount] = useState(false);
  const [render, animation] = useDelayUnmount(mount, 'show', 300);
  console.log(render, animation);
  return (
    <button onClick={() => setMount((prev) => !prev)} type="button">
      {mount ? 'ON' : 'OFF'}
    </button>
  );
}

export default TestHooks;
