import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Assents Files
import Hamburger from '../assets/icon/Hamburger';
import Logo from '../assets/images/Logo.png';
// Components Files
import MobileMenu from '../components/layout/MobileMenu';
import SearchBox from '../components/layout/SearchBox';
import Sidebar from '../components/layout/Sidebar';
import SiteMenu from '../components/layout/SiteMenu';
import Authentication from '../components/popup/Authentication';
import { StoreContext } from '../context/store/store';
// Hooks Files
import useScreenWidth from '../hooks/useScreenWidth';
// Styles Files
import style from '../sass/layout/header.module.scss';
import { getData } from '../utils/APICalling';

function Header() {
  // custom hooks
  const screenWidth = useScreenWidth();
  // context API hooks
  const { authIsOpen } = useContext(StoreContext);
  // states hooks
  // search box state
  const [isSearchBoxShow, setIsSearchBoxShow] = useState(false);
  const [searchboxAnimation, setSearchboxAnimation] = useState(false);
  // sidebar states
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [sidebarAnimation, setSidebarAnimation] = useState(false);
  const [social, setSocial] = useState([]);
  const [category, setCategory] = useState([]);
  const [pages, setPages] = useState([]);

  // searchbox hide function
  const handleSearchBarHide = async () => {
    if (screenWidth > 1024) return;
    setSearchboxAnimation(false);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsSearchBoxShow(false);
  };
  // sidebar show & hide functions
  const handleSidebarToggle = () => {
    handleSearchBarHide();
    if (isShowSidebar) {
      setSidebarAnimation(false);
      setTimeout(() => setIsShowSidebar(false), 300);
      return;
    }
    setIsShowSidebar(true);
  };
  const handleSideBarHide = () => {
    handleSearchBarHide();
    setSidebarAnimation(false);
    setTimeout(() => setIsShowSidebar(false), 300);
  };
  useEffect(() => {
    if (screenWidth > 1024) {
      setIsSearchBoxShow(true);
    }
  }, [screenWidth]);

  // sidebar data fetches
  // category data fetch
  useEffect(() => {
    (async () => {
      const response = await getData('/widget/header/category');
      setCategory(response);
    })();
  }, []);
  // pages data fetch
  useEffect(() => {
    (async () => {
      const response = await getData('/widget/footer/page');
      setPages(response);
    })();
  }, []);
  // social data fetch
  useEffect(() => {
    (async () => {
      const response = await getData('/widget/header/social');
      setSocial(response);
    })();
  }, []);
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.logo__wrapper}>
            {screenWidth > 767 && screenWidth < 1025 && (
              <Hamburger handleClick={handleSidebarToggle} />
            )}
            <Link to="/">
              <img className={style.logo} src={Logo} alt="Logo" />
            </Link>
          </div>
          {isSearchBoxShow && (
            <SearchBox
              animation={searchboxAnimation}
              setAnimation={setSearchboxAnimation}
              handleSearchBarHide={handleSearchBarHide}
            />
          )}
          <SiteMenu
            isSearchBoxShow={isSearchBoxShow}
            setIsSearchBoxShow={setIsSearchBoxShow}
            handleSearchBarHide={handleSearchBarHide}
          />
        </div>
      </div>
      <Authentication authIsOpen={authIsOpen} />
      {screenWidth < 768 && (
        <MobileMenu
          handleSidebarToggle={handleSidebarToggle}
          handleSideBarHide={handleSideBarHide}
        />
      )}
      {screenWidth < 1025 && isShowSidebar && (
        <Sidebar
          animation={sidebarAnimation}
          setAnimation={setSidebarAnimation}
          handleClick={handleSidebarToggle}
          social={social}
          pages={pages}
          category={category}
        />
      )}
    </header>
  );
}

export default Header;
