import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../../sass/components/layout/searchList.module.scss';
import { isEmptyArray } from '../../utils/checkerFunc';
import classNames from '../../utils/classNames';

function SearchList({ list, query, animation, setAnimation, clickHandler }) {
  let liElements;
  if (isEmptyArray(list)) {
    liElements = <li className={style.item__menu}>No Item Found</li>;
  }
  if (!isEmptyArray(list)) {
    liElements = list.map(({ _id, name, slug }) => {
      const regEx = new RegExp(query, 'i');
      const matchValue = name.match(regEx);
      const strongName = name.replace(
        matchValue,
        `<strong>${matchValue}</strong>`,
      );
      return (
        <li key={_id} className={style.item__menu} onClick={clickHandler}>
          <Link
            className={style.item__link}
            to={`/item/${slug}`}
            dangerouslySetInnerHTML={{ __html: strongName }}
          />
        </li>
      );
    });
  }
  useEffect(() => {
    setTimeout(() => setAnimation(true), 300);
  }, []);
  return (
    <ul
      className={classNames({
        [style.items]: true,
        [style.items__show]: animation,
      })}
    >
      {liElements}
    </ul>
  );
}

export default SearchList;
