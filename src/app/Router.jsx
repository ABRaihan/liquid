import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateOutlet from '../components/router/PrivateOutlet';
import { DispatchContext, StoreContext } from '../context/store/store';
import useScreenWidth from '../hooks/useScreenWidth';
import Header from '../layout/Header';
import Account from '../pages/Account';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Wishlist from '../pages/Wishlist';
import { BUSINESS_ID, getData } from '../utils/APICalling';

function Router() {
  const { userState } = useContext(StoreContext);
  const { setUser } = useContext(DispatchContext);
  const [waiting, setWaiting] = useState(true);
  const screenWidth = useScreenWidth();
  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem(`liquid_user_${BUSINESS_ID}`);
      if (!token) {
        setWaiting(false);
        return;
      }
      const response = await getData('/site/data/account/info/get', token);
      if (response.Error) {
        return;
      }
      setWaiting(false);
      setUser({ ...response, isLogged: true });
    })();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      {!waiting && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/*" element={<PrivateOutlet isLogged={userState.isLogged} />}>
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default Router;
