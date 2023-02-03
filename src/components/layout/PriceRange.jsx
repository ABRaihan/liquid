import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import style from '../../sass/components/layout/priceRange.module.scss';
import classNames from '../../utils/classNames';

let timerID = null;
const PriceRange = ({ min, max, setRange }) => {
  const [price, setPrice] = useState({ min, max });
  const range = useRef(null);
  const getPercent = (value) => Math.round(((value - min) / (max - min)) * 100);

  const handleLeftRange = (event) => {
    const value = Math.min(Number(event.target.value), price.max);
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      setRange(value, price.max);
    }, 300);
    setPrice((prev) => ({ ...prev, min: value }));
  };
  const handleRightRange = (event) => {
    const value = Math.max(Number(event.target.value), price.min);
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      setRange(price.min, value);
    }, 300);
    setPrice((prev) => ({ ...prev, max: value }));
  };
  useEffect(() => {
    const minPercent = getPercent(price.min);
    const maxPercent = getPercent(price.max);
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [price.min, getPercent]);
  useEffect(() => {
    const minPercent = getPercent(price.min);
    const maxPercent = getPercent(price.max);
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [price.max, getPercent]);
  return (
    <div className={style.wrapper}>
      <input
        type="range"
        min={min}
        max={max}
        value={price.min}
        className={classNames({
          [style.thumb]: true,
          [style.thumb__left]: true,
        })}
        onChange={handleLeftRange}
        // style={{ zIndex: minValue > max - 100 && '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={price.max}
        className={classNames({
          [style.thumb]: true,
          [style.thumb__right]: true,
        })}
        onChange={handleRightRange}
      />
      <div className={style.slider}>
        <div className={style.slider__track} />
        <div ref={range} className={style.slider__range} />
        <div className={style.left__value}>
          BDT
          {' '}
          {price.min}
        </div>
        <div className={style.right__value}>
          BDT
          {' '}
          {price.max}
        </div>
      </div>
    </div>
  );
};
PriceRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
export default PriceRange;
