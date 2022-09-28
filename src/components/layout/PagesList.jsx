import { Link } from 'react-router-dom';
import style from '../../sass/components/layout/pagesList.module.scss';

function PagesList({ list }) {
  return (
    <ul className={style.list}>
      {list?.map(({ _id, slug, title }) => (
        <li className={style.list__item} key={_id}>
          <Link className={style.list__link} to={`/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PagesList;
