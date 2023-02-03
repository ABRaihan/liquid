import { NavLink } from 'react-router-dom';
import style from '../../sass/components/layout/sidePagesList.module.scss';
import { ListTitle } from '../styled/Typography';

function SidePagesList({ pages }) {
  return (
    <div className={style.wrapper}>
      <ListTitle>Pages</ListTitle>
      <ul className={style.list}>
        {pages.map(({ _id, title, slug }) => (
          <li className={style.list__item} key={_id}>
            <NavLink className={style.item__link} to={`/page/${slug}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidePagesList;
