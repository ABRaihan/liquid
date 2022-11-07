import { useState } from 'react';
import ChevronIcon from '../../assets/icon/ChevronIcon';
import Hamburger from '../../assets/icon/Hamburger';
import useDelayUnmount from '../../hooks/useDelayUnmount';
import style from '../../sass/components/layout/categoryMenu.module.scss';
import classNames from '../../utils/classNames';
import CategoryList from './CategoryList';
import PagesList from './PagesList';

function CategoryMenu({ categories, pages }) {
  const [isCategoryShow, setIsCategoryShow] = useState(false);
  const [renderCategory, animationCategory] = useDelayUnmount(
    isCategoryShow,
    300,
  );
  const [categoryListAnim, setCategoryListAnim] = useState(false);

  const handleCategoryToggle = (event) => {
    event.stopPropagation();
    setIsCategoryShow((prev) => !prev);
  };
  const handleCategoryHide = () => {
    setIsCategoryShow(false);
  };
  return (
    <div className={style.menu__bar}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.left__menu} onClick={handleCategoryToggle}>
            <Hamburger isClose={isCategoryShow} />
            <p className={style.title__text}>All Category</p>
            <span
              className={classNames({
                [style.arrow__icon]: true,
                [style.rotate]: isCategoryShow,
              })}
            >
              <ChevronIcon />
            </span>
            {renderCategory && (
              <CategoryList
                list={categories}
                animation={animationCategory}
                setAnimation={setCategoryListAnim}
                clickHandler={handleCategoryHide}
              />
            )}
          </div>
          <PagesList pages={pages} design="header" />
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
