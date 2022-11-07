import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Breadcrumb from '../components/layout/Breadcrumb';
import ItemCard from '../components/layout/ItemCard';
import PageTitle from '../components/layout/PageTitle';
import ItemsWrapper from '../components/styled/Layout';
import { getData } from '../utils/APICalling';

function Category() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [category, setCategory] = useState([]);
  const paths = [
    { name: 'Home', path: '/' },
    { name: 'Category', path: '/category' },
  ];
  const fetchCategory = async () => {
    const data = await getData(`/widget/category/info${id ? `/${id}` : ''}`);
    setCategory(data);
  };
  useEffect(() => {
    fetchCategory();
  }, [pathname]);
  return (
    <section>
      <PageTitle
        title={id ? category.name : 'All Category'}
        img={id ? category.image : null}
      >
        <Breadcrumb paths={paths} />
      </PageTitle>
      <div className="container">
        <ItemsWrapper>
          {(id ? category.subCategories : category)?.map(
            ({ _id, name, image }) => (
              <ItemCard
                key={_id}
                id={_id}
                type="category"
                name={name}
                image={image}
              />
            ),
          )}
        </ItemsWrapper>
      </div>
    </section>
  );
}

export default Category;
