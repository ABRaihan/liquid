import { NavLink } from 'react-router-dom';
import style from '../../sass/components/layout/sideCategoryList.module.scss';
import { ListTitle } from '../styled/Typography';

function SideCategoryList({ category }) {
  return (
    <div className={style.wrapper}>
      <ListTitle>All Categories</ListTitle>
      <ul className={style.list}>
        {category.map(({ _id, name }) => (
          <li className={style.list__item} key={_id}>
            <NavLink
              className={style.item__link}
              to={`/category/${_id}`}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideCategoryList;
