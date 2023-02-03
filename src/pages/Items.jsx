import { useState } from 'react';
import FilterIcon from '../assets/icon/FilterIcon';
import Breadcrumb from '../components/layout/Breadcrumb';
import PageTitle from '../components/layout/PageTitle';
import ProductFilter from '../components/layout/ProductFilter';
import Sidebar from '../components/layout/Sidebar';
import PrimaryButton from '../components/styled/Buttons';
import useDelayUnmount from '../hooks/useDelayUnmount';
import useScreenWidth from '../hooks/useScreenWidth';
import style from '../sass/pages/items.module.scss';

import Filter from '../playground/Filter';

// breadcrumb paths
const paths = [
  { name: 'Home', path: '/' },
  { name: 'All Items', path: '/items' },
];
function Items() {
  const [filterData, setFilterData] = useState({
    min: 0,
    max: 5000,
    sort: 'asc',
  });
  const [sidebarShow, setSidebarShow] = useState(false);
  const [renderSidebar, animationSidebar] = useDelayUnmount(sidebarShow, 300);
  const screenWidth = useScreenWidth();
  // ----------> custom functions <----------
  // ***this function is for show & hide sidebar***
  const handleSidebarToggle = () => {
    setSidebarShow((prev) => !prev);
  };
  return (
    <section className={style.items}>
      <PageTitle title="All Items">
        <Breadcrumb paths={paths} />
      </PageTitle>
      <div className="container">
        <div className={style.product__row}>
          {/* ----> Filter Button Render For Md and Sm Device <---- */}
          {screenWidth < 1025 && (
          <PrimaryButton
            className={style.filter__btn}
            onClick={() => setSidebarShow(true)}
          >
            Filter
            <FilterIcon />
          </PrimaryButton>
          )}
          <div className={style.product__area}>
            {/* ----> Filter Block Render For LG Device <---- */}
            {screenWidth > 1024 && (
              <ProductFilter {...{ filterData, setFilterData }} />
            )}
          </div>
        </div>
        {/* ----> Filter Block Render For Md and Sm Device <---- */}
        {screenWidth < 1025 && renderSidebar && (
          <Sidebar
            animation={animationSidebar}
            closeIcon
            position="right"
            handleClick={handleSidebarToggle}
          >
            {/* <ProductFilter {...{ filterData, setFilterData }} /> */}
            <Filter />
          </Sidebar>
        )}
      </div>
    </section>
  );
}

export default Items;
