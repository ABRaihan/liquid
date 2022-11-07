import { NavLink } from 'react-router-dom';
import CloseIcon from '../../assets/icon/CloseIcon';
import style from '../../sass/components/layout/sidebar.module.scss';
import { isEmptyArray } from '../../utils/checkerFunc';
import classNames from '../../utils/classNames';
import SocialList from './SocialList';

function Sidebar({
  social,
  pages,
  category,
  animation,
  handleClick,
}) {
  return (
    <aside
      className={classNames({
        [style.wrapper]: true,
        [style.show]: animation,
      })}
    >
      <div className={style.close__icon}>
        <span onClick={handleClick}>
          <CloseIcon />
        </span>
      </div>
      <div className={style.list__wrapper}>
        <Sidebar.Category category={category} />
        <Sidebar.Pages pages={pages} />
      </div>
      <Sidebar.Social social={social} />
      <div
        className={classNames({
          [style.overlay]: true,
          [style.overlay__show]: animation,
        })}
        onClick={handleClick}
      />
    </aside>
  );
}

export default Sidebar;
// Sidebar Category Component
Sidebar.Category = ({ category }) => !isEmptyArray(category) && (
<div className={style.category}>
  <p className={style.category__title}>All Categories</p>
  <ul className={style.category__list}>
    {category.map(({ _id, name }) => (
      <li className={style.category__item} key={_id}>
        <NavLink
          className={style.category_item__link}
          to={`/category/${_id}`}
        >
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
</div>
);
// Sidebar Pages Component
Sidebar.Pages = ({ pages }) => !isEmptyArray(pages) && (
<div className={style.pages}>
  <p className={style.pages__title}>Pages</p>
  <ul className={style.pages__list}>
    {pages.map(({ _id, title, slug }) => (
      <li className={style.pages__item} key={_id}>
        <NavLink className={style.page_item__link} to={`/page/${slug}`}>
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
</div>
);
// Sidebar Social Component
Sidebar.Social = ({ social }) => !isEmptyArray(social) && (
<div className={style.social}>
  <p className={style.social__title}>Get in Touch</p>
  <SocialList social={social} design="sidebar" />
  {/* <ul className={style.social__list}>
    {social.map(({ svg, url }) => (
      <li key={Math.random()}>
        <a
          aria-label="Social Icon"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </li>
    ))}
  </ul> */}
</div>
);
