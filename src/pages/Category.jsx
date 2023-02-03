import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/layout/Breadcrumb';
import ItemCard from '../components/layout/ItemCard';
import PageTitle from '../components/layout/PageTitle';
import Divider from '../components/styled/Divider';
import ItemsWrapper from '../components/styled/Layout';
import { LayoutTitle } from '../components/styled/Typography';
import useResource from '../hooks/useResource';
import { isEmptyArray, objectExistInArray } from '../utils/checkerFunc';

const initialPaths = [
  { name: 'Home', path: '/' },
  { name: 'Category', path: '/category' },
];
function Category() {
  const { id } = useParams();
  const category = useResource(`/widget/category/info${id ? `/${id}` : ''}`);
  const items = useResource(`/widget/category/items/${id}`, Boolean(id));
  const isCategoryArray = Array.isArray(id ? category.subCategories : category);
  const [paths, setPaths] = useState(initialPaths);
  const handlePathNavigation = (pathName) => {
    if (pathName === '/category' || pathName === '/') {
      sessionStorage.clear();
      setPaths(initialPaths);
      return;
    }
    // remove the forward path
    const sessionArray = JSON.parse(sessionStorage.getItem('breadcrumb'));
    const index = sessionArray.findIndex(({ path }) => path === pathName);
    sessionArray.splice(index + 1, 1);
    sessionStorage.setItem('breadcrumb', JSON.stringify(sessionArray));
    setPaths([...initialPaths, ...sessionArray]);
  };
  useEffect(() => {
    if (id) {
      let breadcrumbPath = [];
      if (sessionStorage.getItem('breadcrumb')) {
        breadcrumbPath = [...JSON.parse(sessionStorage.getItem('breadcrumb'))];
      }
      if (!objectExistInArray(breadcrumbPath, category.name) && category.name) {
        breadcrumbPath.push({
          name: category.name,
          path: `/category/${category._id}`,
        });
        sessionStorage.setItem('breadcrumb', JSON.stringify(breadcrumbPath));
        const tempPaths = [
          { name: 'Home', path: '/' },
          { name: 'Category', path: '/category' },
          breadcrumbPath[breadcrumbPath.length - 2],
          breadcrumbPath[breadcrumbPath.length - 1],
        ];
        setPaths(tempPaths.filter(Boolean));
      }
    }
  }, [category]);
  useEffect(() => {
    if (!id) {
      sessionStorage.clear();
      return;
    }
    if (sessionStorage.getItem('breadcrumb')) {
      setPaths([
        ...initialPaths,
        ...JSON.parse(sessionStorage.getItem('breadcrumb')),
      ]);
    }
  }, []);
  return (
    <section>
      <PageTitle
        title={id ? category.name : 'All Category'}
        img={id ? category.image : null}
      >
        <Breadcrumb paths={paths} handlePathNavigation={handlePathNavigation} />
      </PageTitle>
      <div className="container">
        {!isEmptyArray(category.subCategories) && !isEmptyArray(category) && (
          <ItemsWrapper mSM="50px 0 40px" mMD="70px 0 50px" mLG="100px 0 60px">
            {isCategoryArray
              && (id ? category.subCategories : category)?.map(
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
        )}
        {!isEmptyArray(category.subCategories)
          && !isEmptyArray(category)
          && id && <Divider />}
        {id && (
          <>
            <LayoutTitle mSM="40px 0 20px" mMD="50px 0 20px " mLG="60px 0 20px">Items</LayoutTitle>
            <ItemsWrapper mSM="0 0 50px" mMD="0 0 70px" mLG="0 0 100px">
              {items?.map(({ _id, name, image }) => (
                <ItemCard
                  key={_id}
                  id={_id}
                  type="item"
                  name={name}
                  image={image}
                />
              ))}
            </ItemsWrapper>
          </>
        )}
      </div>
    </section>
  );
}

export default Category;
