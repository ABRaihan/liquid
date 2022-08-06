// React Files
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../context/store/store';
// Assents Files
import AccountIcon from '../assets/icon/AccountIcon';
import CartIcon from '../assets/icon/CartIcon';
import SearchIcon from '../assets/icon/SearchIcon';
import WishlistIcon from '../assets/icon/WishlistIcon';
// Styles Files
import style from '../sass/components/siteMenu.module.scss';
import classNames from '../utils/classNames';
import isLogged from '../utils/isLogged';
import Counter from './styles/Counter';

function SiteMenu({ searchBarShow, setSearchBarShow }) {
  const { pathname } = useLocation();
  const { actions } = useContext(Context);
  const [counter] = useState({ cart: 1, wishlist: 1 });
  const logIn = isLogged();
  const searchBarShowHandler = () => {
    if (searchBarShow) {
      actions.setSearchBarAnimation('');
      setTimeout(() => setSearchBarShow(false), 300);
    } else {
      setSearchBarShow(true);
    }
  };
  return (
    <ul className={style.menu}>
      <li className={style.menu__item} onClick={searchBarShowHandler}>
        <SearchIcon />
      </li>
      <li
        className={classNames({
          [style.menu__item]: true,
        })}
      >
        <NavLink
          to="/wishlist"
          className={({ isActive }) => classNames({
            [style.active__menu]: isActive,
            [style.item__link]: true,
          })}
        >
          <WishlistIcon />
          {pathname !== '/wishlist' && counter.wishlist && (
            <Counter>{counter.wishlist}</Counter>
          )}
        </NavLink>
      </li>
      <li
        className={classNames({
          [style.menu__item]: true,
        })}
      >
        <NavLink
          to="/cart"
          className={({ isActive }) => classNames({
            [style.active__menu]: isActive,
            [style.item__link]: true,
          })}
        >
          <CartIcon />
          {pathname !== '/cart' && counter.cart && (
            <Counter>{counter.cart}</Counter>
          )}
        </NavLink>
      </li>
      <li
        className={classNames({
          [style.menu__item]: true,
        })}
      >
        <NavLink
          to="/account"
          className={({ isActive }) => classNames({
            [style.active__menu]: isActive,
            [style.item__link]: true,
          })}
        >
          <AccountIcon />
          {pathname !== '/account' && logIn && (
            <Counter top="16px" />
          )}
        </NavLink>
      </li>
    </ul>
  );
}

export default SiteMenu;
SiteMenu.propTypes = {
  searchBarShow: PropTypes.bool.isRequired,
  setSearchBarShow: PropTypes.func.isRequired,
};
