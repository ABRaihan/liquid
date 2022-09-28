import { useEffect, useState } from 'react';
import SliderSwitch from '../components/layout/SliderSwitch';
import style from '../sass/layout/carousel.module.scss';
import { getData, IMG_BASE_URL } from '../utils/APICalling';
import { isEmptyArray } from '../utils/checkerFunc';

function Carousel({ autostart, timer }) {
  // state hooks
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(0);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [transition, setTransition] = useState(true);

  const numberOfSlides = images.length;
  // styles variables
  const initialTransition = { transform: 'translateX(0%)', transition: 'none' };
  const nextTransition = { transform: `translateX(-${active * 100}%)` };

  // next image sliding handler
  const handleNextSlide = (counter = 0) => {
    setTransition(true);
    setActive(counter + 1);
  };

  // feel a carousel sliding with this handler
  const handleTransitionEnd = () => {
    if (active === numberOfSlides) {
      setTransition(false);
      setActive(0);
    }
  };

  const fetchImages = async () => {
    const response = await getData('/widget/home/carousel');
    setImages(response);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  // carousel sliding effect
  useEffect(() => {
    // use for transitionEnd Fallback
    if (active > numberOfSlides) {
      setActive(0);
      return;
    }
    const sliderTime = setTimeout(() => {
      autostart && (isMouseEnter || handleNextSlide(active));
    }, timer);
    return () => clearTimeout(sliderTime);
  }, [active, isMouseEnter]);
  return (
    !isEmptyArray(images) && (
      <section
        className={style.carousel}
        onMouseOver={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        <div
          style={transition ? nextTransition : initialTransition}
          className={style.wrapper}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image) => (
            <Carousel.Slider src={image} key={Math.random()} />
          ))}
          {/* first slider clone for feel actual carousel */}
          <Carousel.Slider src={images[0]} />
        </div>
        <SliderSwitch
          length={numberOfSlides}
          active={active}
          setActive={setActive}
        />
      </section>
    )
  );
}

export default Carousel;
Carousel.Slider = ({ src }) => (
  <div className={style.slider}>
    <img
      className={style.img}
      src={`${IMG_BASE_URL}/carousel/${src}`}
      alt="carousel"
    />
  </div>
);
