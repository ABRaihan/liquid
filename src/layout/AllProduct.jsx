import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from '../components/layout/ItemCard';
import ViewButton from '../components/layout/ViewButton';
import ItemsWrapper from '../components/styled/Layout';
import { LayoutTitle } from '../components/styled/Typography';
import style from '../sass/layout/allProduct.module.scss';
import { getData } from '../utils/APICalling';

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
          <Link to="/items">
            <ViewButton />
          </Link>
        </div>
        <ItemsWrapper>
          {items.map(({ _id, name, image, price, slug }) => (
            <ItemCard
              key={_id}
              id={_id}
              slug={slug}
              type="item"
              name={name}
              image={image}
              price={price}
            />
          ))}
        </ItemsWrapper>
      </div>
    </section>
  );
}

export default AllProduct;
