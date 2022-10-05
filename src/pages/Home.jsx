import Carousel from '../layout/Carousel';
import Categories from '../layout/Categories';

function Home() {
  return (
    <>
      <Carousel autostart timer={3000} />
      <Categories />
    </>
  );
}

export default Home;
