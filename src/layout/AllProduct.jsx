import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewButton from '../components/layout/ViewButton';
import LayoutTitle from '../components/styled/Typography';
import style from '../sass/layout/allProduct.module.scss';
import { getData, IMG_BASE_URL } from '../utils/APICalling';

function AllProduct(props) {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const response = await getData('/widget/home/items');
    setItems(response);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <section className={style.layout}>
      <div className="container">
        <div className={style.header}>
          <LayoutTitle>All Products</LayoutTitle>
          <ViewButton />
        </div>
        <div className={style.items}>
          {items.map(({ _id, name, image, price, slug }) => (
            <div key={_id} className={style.item}>
              <div className={style.img__wrapper}>
                <Link to={`/category${_id}`}>
                  <img
                    className={style.item__img}
                    src={`${IMG_BASE_URL}/item/${_id}/${image}`}
                    alt={name}
                  />
                </Link>
              </div>
              <div className={style.item__info}>
                <p className={style.item__name}>
                  <Link className={style.item__link} to={`/category${_id}`}>
                    {name}
                  </Link>
                </p>
                <p className={style.item__price}>
                  $
                  {price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProduct;
