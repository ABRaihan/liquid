import { Link } from 'react-router-dom';
import style from '../../sass/components/layout/itemCard.module.scss';
import { IMG_BASE_URL } from '../../utils/APICalling';

function ItemCard({ id, slug, type, name, image, price }) {
  const imgSrc = {
    item: `${IMG_BASE_URL}/item/${id}/${image}`,
    category: `${IMG_BASE_URL}/category/${image}`,
  };
  const paths = {
    item: `/item/${slug || id}`,
    category: `/category/${id}`,
  };
  return (
    <div key={id} className={style.item}>
      <div className={style.img__wrapper}>
        <Link to={paths[type]}>
          <img
            className={style.item__img}
            src={imgSrc[type]}
            alt={name}
          />
        </Link>
      </div>
      <div className={style.item__info}>
        <p className={style.item__name}>
          <Link className={style.item__link} to={paths[type]}>
            {name}
          </Link>
        </p>
        {price && (
        <p className={style.item__price}>
          $
          {price}
        </p>
        )}
      </div>
    </div>
  );
}

export default ItemCard;
