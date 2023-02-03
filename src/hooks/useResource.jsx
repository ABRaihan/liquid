import { useEffect, useState } from 'react';
import { getData } from '../utils/APICalling';

const caches = {};
function useResource(url, calling = true) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await getData(url);
    setData(response);
    caches[url] = response;
  };
  useEffect(() => {
    if (!calling || !url) {
      setData([]);
      return;
    }
    if (caches[url]) {
      setData(caches[url]);
      return;
    }
    fetchData();
  }, [url]);
  return data;
}

export default useResource;
