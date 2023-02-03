import { useContext, useEffect } from 'react';
import { DispatchContext, StoreContext } from '../context/store/store';
import { getData } from '../utils/APICalling';

const cacheURL = [];
function useContextResource(url, stateName, dispatchName) {
  const contextData = useContext(StoreContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    if (!url || !dispatchName || !stateName) return;
    const fetchData = async () => {
      if (cacheURL.includes(url)) {
        return contextData[stateName];
      }
      const response = await getData(url);
      cacheURL.push(url);
      dispatch[dispatchName](response);
    };

    fetchData();
  }, [url]);

  return contextData[stateName];
}

export default useContextResource;
