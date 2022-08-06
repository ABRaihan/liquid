import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Assents Files
import Hamburger from '../assets/icon/Hamburger';
import Logo from '../assets/images/Logo.png';
// Components Files
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';
import SignIn from '../components/SignIn';
import SiteMenu from '../components/SiteMenu';
// Hooks Files
import useScreenWidth from '../hooks/useScreenWidth';
// Styles Files
import style from '../sass/layout/header.module.scss';

function Header() {
  const screenWidth = useScreenWidth();
  const [searchBarShow, setSearchBarShow] = useState(false);
  useEffect(() => {
    if (screenWidth > 1024) {
      setSearchBarShow(true);
    }
  }, [screenWidth]);
  return (
    <section className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.logo__wrapper}>
            {screenWidth > 767 && screenWidth < 1025 && <Hamburger />}
            <Link to="/">
              <img className={style.logo} src={Logo} alt="Logo" />
            </Link>
          </div>
          {searchBarShow && (
            <SearchBar isShow={setSearchBarShow} />
          )}
          <SiteMenu
            searchBarShow={searchBarShow}
            setSearchBarShow={setSearchBarShow}
          />
        </div>
        <Modal title="Sign Up">
          <SignIn />
        </Modal>
      </div>
    </section>
  );
}

export default Header;
