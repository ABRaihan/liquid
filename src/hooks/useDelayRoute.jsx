import { useContext, useEffect, useState } from 'react';
import { DispatchContext, StoreContext } from '../context/store/store';
import { BUSINESS_ID, getData } from '../utils/APICalling';

function useDelayRoute(props) {
  const { setUser } = useContext(DispatchContext);
  const { userState } = useContext(StoreContext);
  const [delay, setDelay] = useState(true);
  const getToken = async () => {
    const token = await localStorage.getItem(`liquid_user_${BUSINESS_ID}`);
    if (!token) {
      setDelay(false);
      return false;
    }
    return token;
  };
  const checkUserIsLogged = async () => {
    const token = await getToken();
    if (!token) return;
    const response = await getData('/site/data/account/info/get', token);
    if (response.Error) return;
    setUser({ ...response, isLogged: true });
    setDelay(false);
  };
  useEffect(() => {
    checkUserIsLogged();
  }, []);
  return delay;
}

export default useDelayRoute;
