import { useEffect, useRef, useState } from 'react';
import classNames from '../utils/classNames';
import style from './range.module.scss';

const Range = () => {
  const [price, setPrice] = useState({ min: 0, max: 5000 });
  const range = useRef(null);
  const leftThumb = useRef(null);
  const rightThumb = useRef(null);
  const getPercent = (value) => Math.round(((value - price.min) / (price.max - price.min)) * 100);
  // useEffect(() => {
  //   const minPercent = getPercent(price.min);
  //   const maxPercent = getPercent(price.max);
  //   if (range.current) {
  //     range.current.style.left = `${minPercent}%`;
  //     range.current.style.width = `${maxPercent - minPercent}%`;
  //   }
  // }, [price.min, getPercent]);
  // useEffect(() => {
  //   const minPercent = getPercent(price.min);
  //   const maxPercent = getPercent(price.max);
  //   if (range.current) {
  //     range.current.style.width = `${maxPercent - minPercent}%`;
  //   }
  // }, [price.max, getPercent]);
  useEffect(() => {
    const minPercent = getPercent(price.min);
    const maxPercent = getPercent(price.max);
    if (rightThumb.current && range.current) {
      rightThumb.current.style.left = `${maxPercent - minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, []);
  return (
    <div className={style.wrapper}>
      <div
        className={style.slider__range}
      >
        <div
          className={classNames({
            [style.handle]: true,
            [style.left]: true,
          })}
        />
        <div ref={range} className={style.highlight} />
        <div
          ref={rightThumb}
          className={classNames({
            [style.handle]: true,
            [style.right]: true,
          })}
        />
      </div>
      <div className={style.minmax__text__wrapper}>
        <span className={style.minmax__text}>
          BDT
          {' '}
          {price.min}
        </span>
        <span className={style.minmax__text}>
          BDT
          {' '}
          {price.max}
        </span>
      </div>
    </div>
  );
};

export default Range;
