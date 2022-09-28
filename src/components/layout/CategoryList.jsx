import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useOutsideDetect from '../../hooks/useOutsideDetect';
import style from '../../sass/components/layout/categoryList.module.scss';
import classNames from '../../utils/classNames';

function CategoryList({ list, animation, clickHandler }) {
  const listRef = useRef(null);
  useOutsideDetect(listRef, clickHandler);
  return (
    <ul
      ref={listRef}
      onClick={(event) => event.stopPropagation()}
      className={classNames({
        [style.list]: true,
        [style.show]: animation,
      })}
    >
      {list?.map(({ _id, name }) => (
        <li className={style.list__item} key={_id}>
          <Link
            onClick={clickHandler}
            className={style.list__link}
            to={`/category/${_id}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
