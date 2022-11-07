import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Assents Files
import Hamburger from '../assets/icon/Hamburger';
import Logo from '../assets/images/Logo.png';
import CategoryMenu from '../components/layout/CategoryMenu';
// Components Files
import MobileMenu from '../components/layout/MobileMenu';
import SearchBox from '../components/layout/SearchBox';
import Sidebar from '../components/layout/Sidebar';
import SiteMenu from '../components/layout/SiteMenu';
import Authentication from '../components/popup/Authentication';
import { DispatchContext, StoreContext } from '../context/store/store';
import useDelayUnmount from '../hooks/useDelayUnmount';
// Hooks Files
import useScreenWidth from '../hooks/useScreenWidth';
// Styles Files
import style from '../sass/layout/header.module.scss';
import { getData } from '../utils/APICalling';

function Header() {
  // custom hooks
  const screenWidth = useScreenWidth();
  // context API hooks
  const { authIsOpen, pages, social } = useContext(StoreContext);
  const { setSocial, setPages } = useContext(DispatchContext);
  // states hooks
  // search box state
  const [searchBoxMount, setSearchBoxMount] = useState(false);
  const [renderSearchBox, animationSearchBox] = useDelayUnmount(
    searchBoxMount,
    300,
  );
  // sidebar states
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [renderSidebar, animationSidebar] = useDelayUnmount(isShowSidebar, 300);
  const [sidebarAnimation, setSidebarAnimation] = useState(false);
  // const [social, setSocial] = useState([]);
  const [category, setCategory] = useState([]);

  // searchbox hide function
  const handleSearchBarHide = () => {
    if (screenWidth > 1024) return;
    setSearchBoxMount(false);
  };
  // sidebar show & hide functions
  const handleSidebarToggle = () => {
    setIsShowSidebar((prev) => !prev);
  };
  const handleSideBarHide = () => {
    setIsShowSidebar(false);
  };
  useEffect(() => {
    if (screenWidth > 1024) {
      setSearchBoxMount(true);
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
          {renderSearchBox && (
            <SearchBox
              animation={animationSearchBox}
              setSearchBoxMount={setSearchBoxMount}
              handleSearchBarHide={handleSearchBarHide}
            />
          )}
          <SiteMenu
            searchBoxMount={searchBoxMount}
            setSearchBoxMount={setSearchBoxMount}
            handleSearchBarHide={handleSearchBarHide}
          />
        </div>
      </div>
      {screenWidth > 1024 && (
        <CategoryMenu categories={category} pages={pages} />
      )}
      <Authentication authIsOpen={authIsOpen} />
      {screenWidth < 768 && (
        <MobileMenu
          handleSidebarToggle={handleSidebarToggle}
          handleSideBarHide={handleSideBarHide}
          isShowSidebar={isShowSidebar}
        />
      )}
      {screenWidth < 1025 && renderSidebar && (
        <Sidebar
          animation={animationSidebar}
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
