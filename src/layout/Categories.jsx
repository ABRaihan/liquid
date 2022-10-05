import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewButton from '../components/layout/ViewButton';
import LayoutTitle from '../components/styled/Typography';
import style from '../sass/layout/categories.module.scss';
import { getData, IMG_BASE_URL } from '../utils/APICalling';

function Categories(props) {
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    const response = await getData('/widget/home/category');
    setCategory(response);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section className={style.layout}>
      <div className="container">
        <div className={style.header}>
          <LayoutTitle>Categories</LayoutTitle>
          <ViewButton />
        </div>
        <div className={style.items}>
          {category.map(({ _id, name, image }) => (
            <div key={_id} className={style.item}>
              <div className={style.img__wrapper}>
                <Link to={`/category${_id}`}>
                  <img
                    className={style.item__img}
                    src={`${IMG_BASE_URL}/category/${image}`}
                    alt={name}
                  />
                </Link>
              </div>
              <p className={style.item__name}>
                <Link className={style.item__link} to={`/category${_id}`}>{name}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
