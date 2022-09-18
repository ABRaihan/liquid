// React Files
import React, { useContext, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DispatchContext, StoreContext } from '../../context/store/store';
// Assents Files
import AccountIcon from '../../assets/icon/AccountIcon';
import CartIcon from '../../assets/icon/CartIcon';
import SearchIcon from '../../assets/icon/SearchIcon';
import WishlistIcon from '../../assets/icon/WishlistIcon';
// Styles Files
import useScreenWidth from '../../hooks/useScreenWidth';
import style from '../../sass/components/layout/siteMenu.module.scss';
import classNames from '../../utils/classNames';
import Counter from '../styled/Counter';

function SiteMenu({
  isSearchBoxShow,
  setIsSearchBoxShow,
  handleSearchBarHide,
}) {
  const { setSearchBarAnim } = useContext(DispatchContext);
  const { userState } = useContext(StoreContext);
  const { pathname } = useLocation();
  const screenWidth = useScreenWidth();
  const [counter] = useState({ cart: 1, wishlist: 1 });
  const handleSearchBarToggle = () => {
    if (isSearchBoxShow) {
      handleSearchBarHide();
    } else {
      setIsSearchBoxShow(true);
    }
  };

  return (
    <ul className={style.menu}>
      <li className={style.menu__item} onClick={handleSearchBarToggle}>
        <SearchIcon />
      </li>
      <li className={style.menu__item}>
        <NavLink
          to="/wishlist"
          className={({ isActive }) => classNames({
            [style.active__menu]: isActive,
            [style.item__link]: true,
          })}
          onClick={handleSearchBarHide}
        >
          <WishlistIcon />
          {pathname !== '/wishlist' && counter.wishlist && (
            <Counter>{counter.wishlist}</Counter>
          )}
        </NavLink>
      </li>
      <li className={style.menu__item}>
        <NavLink
          to="/cart"
          className={({ isActive }) => classNames({
            [style.active__menu]: isActive,
            [style.item__link]: true,
          })}
          onClick={handleSearchBarHide}
        >
          <CartIcon />
          {pathname !== '/cart' && counter.cart && (
            <Counter>{counter.cart}</Counter>
          )}
        </NavLink>
      </li>
      <li className={style.menu__item}>
        <NavLink
          to="/account"
          className={({ isActive }) => classNames({
            [style.active__menu]: isActive,
            [style.item__link]: true,
          })}
          onClick={handleSearchBarHide}
        >
          <AccountIcon />
          {pathname !== '/account' && userState.isLogged && (
            <Counter top="16px" />
          )}
        </NavLink>
      </li>
    </ul>
  );
}

export default SiteMenu;
