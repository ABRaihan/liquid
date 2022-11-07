import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateOutlet from '../components/router/PrivateOutlet';
import { StoreContext } from '../context/store/store';
import useDelayRoute from '../hooks/useDelayRoute';
import useScreenWidth from '../hooks/useScreenWidth';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Account from '../pages/Account';
import Cart from '../pages/Cart';
import Category from '../pages/Category';
import Home from '../pages/Home';
import Wishlist from '../pages/Wishlist';

function Router() {
  const screenWidth = useScreenWidth();
  const { userState } = useContext(StoreContext);
  const delay = useDelayRoute();
  return (
    <BrowserRouter>
      <Header />
      {!delay && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route
            path="/*"
            element={<PrivateOutlet isLogged={userState.isLogged} />}
          >
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      )}
      {screenWidth > 767 && <Footer />}
    </BrowserRouter>
  );
}

export default Router;
