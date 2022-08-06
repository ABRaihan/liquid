import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateOutlet from '../components/PrivateOutlet';
import Header from '../layout/Header';
import Account from '../pages/Account';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Wishlist from '../pages/Wishlist';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
