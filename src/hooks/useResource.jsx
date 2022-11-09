import { useEffect, useState } from 'react';
import { getData } from '../utils/APICalling';

function useResource(url, calling = true) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!calling) {
      setData([]);
      return;
    }
    (async () => {
      const response = await getData(url);
      setData(response);
    })();
  }, [url]);
  return data;
}

export default useResource;
