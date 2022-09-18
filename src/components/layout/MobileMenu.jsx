import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AccountIcon from '../../assets/icon/AccountIcon';
import CartIcon from '../../assets/icon/CartIcon';
import Hamburger from '../../assets/icon/Hamburger';
import HomeIcon from '../../assets/icon/HomeIcon';
import WishlistIcon from '../../assets/icon/WishlistIcon';
import style from '../../sass/components/layout/mobileMenu.module.scss';
import classNames from '../../utils/classNames';

function MobileMenu({ handleSidebarToggle, handleSideBarHide }) {
  const { pathname } = useLocation();
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const path = ['/', '/cart', '/wishlist', '/account'];
  return (
    <nav className={style.navigation}>
      <ul className={style.menu}>
        <li className={style.menu__list}>
          <Hamburger
            isClose={isShowSideBar}
            handleClick={handleSidebarToggle}
          />
        </li>
        <li
          className={classNames({
            [style.menu__list]: true,
            [style.active]: pathname === '/account',
          })}
        >
          <NavLink to="/account" className={style.menu__link}>
            <span className={style.menu__icon} onClick={handleSideBarHide}>
              <AccountIcon />
            </span>
          </NavLink>
        </li>
        <li
          className={classNames({
            [style.menu__list]: true,
            [style.active]: pathname === '/',
          })}
        >
          <NavLink to="/" className={style.menu__link}>
            <span className={style.menu__icon} onClick={handleSideBarHide}>
              <HomeIcon />
            </span>
          </NavLink>
        </li>
        <li
          className={classNames({
            [style.menu__list]: true,
            [style.active]: pathname === '/cart',
          })}
        >
          <NavLink to="/cart" className={style.menu__link}>
            <span className={style.menu__icon} onClick={handleSideBarHide}>
              <CartIcon />
            </span>
          </NavLink>
        </li>
        <li
          className={classNames({
            [style.menu__list]: true,
            [style.active]: pathname === '/wishlist',
          })}
        >
          <NavLink to="/wishlist" className={style.menu__link}>
            <span className={style.menu__icon} onClick={handleSideBarHide}>
              <WishlistIcon />
            </span>
          </NavLink>
        </li>
        {path.includes(pathname) && <div className={style.indicator} />}
      </ul>
    </nav>
  );
}

export default MobileMenu;
