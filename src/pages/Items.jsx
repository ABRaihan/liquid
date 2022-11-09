import Breadcrumb from '../components/layout/Breadcrumb';
import PageTitle from '../components/layout/PageTitle';

function Items() {
  const paths = [
    { name: 'Home', path: '/' },
    { name: 'All Items', path: '/items' },
  ];
  return (
    <section>
      <PageTitle title="All Category">
        <Breadcrumb paths={paths} />
      </PageTitle>
    </section>
  );
}

export default Items;
