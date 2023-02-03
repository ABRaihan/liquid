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
import SideCategoryList from '../components/layout/SideCategoryList';
import SidePagesList from '../components/layout/SidePagesList';
import SideSocialList from '../components/layout/SideSocialList';
import SiteMenu from '../components/layout/SiteMenu';
import Authentication from '../components/popup/Authentication';
import ListWrapper from '../components/styled/Lists';
import { StoreContext } from '../context/store/store';
import useContextResource from '../hooks/useContextResource';
import useDelayUnmount from '../hooks/useDelayUnmount';
import useResource from '../hooks/useResource';
// Hooks Files
import useScreenWidth from '../hooks/useScreenWidth';
// Styles Files
import style from '../sass/layout/header.module.scss';

function Header() {
  // custom hooks
  const screenWidth = useScreenWidth();
  // context API hooks
  const { authIsOpen } = useContext(StoreContext);
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
  const category = useResource('/widget/header/category');
  const social = useContextResource(
    '/widget/header/social',
    'social',
    'setSocial',
  );
  const pages = useContextResource('/widget/footer/page', 'pages', 'setPages');

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
            />
          )}
          <SiteMenu
            searchBoxMount={searchBoxMount}
            setSearchBoxMount={setSearchBoxMount}
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
        <Sidebar animation={animationSidebar} handleClick={handleSidebarToggle}>
          <ListWrapper>
            <SideCategoryList category={category} />
            <SidePagesList pages={pages} />
          </ListWrapper>
          <SideSocialList social={social} />
        </Sidebar>
      )}
    </header>
  );
}

export default Header;
