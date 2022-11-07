import { Link } from 'react-router-dom';
import style from '../../sass/components/layout/pagesList.module.scss';
import classNames from '../../utils/classNames';

const styles = {
  header: style.header,
  footer: style.footer,
};
function PagesList({ pages, design }) {
  const defaultStyle = styles[design] || styles.header;
  return (
    <ul className={classNames({
      [style.list]: true,
      [defaultStyle]: true,
    })}
    >
      {pages?.map(({ _id, slug, title }) => (
        <li className={style.list__item} key={_id}>
          <Link className={style.list__link} to={`/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PagesList;
