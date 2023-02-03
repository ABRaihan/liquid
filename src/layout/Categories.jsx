import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/layout/ItemCard';
import ViewButton from '../components/layout/ViewButton';
import ItemsWrapper from '../components/styled/Layout';
import { LayoutTitle } from '../components/styled/Typography';
import style from '../sass/layout/categories.module.scss';
import { getData } from '../utils/APICalling';

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
          <Link to="/category">
            <ViewButton />
          </Link>
        </div>
        <ItemsWrapper>
          {category.map(({ _id, name, image }) => (
            <ItemCard
              key={_id}
              id={_id}
              type="category"
              name={name}
              image={image}
            />
          ))}
        </ItemsWrapper>
      </div>
    </section>
  );
}

export default Categories;
