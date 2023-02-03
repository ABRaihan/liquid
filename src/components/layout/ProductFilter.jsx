import style from '../../sass/components/layout/productFilter.module.scss';
import { FilterTitle } from '../styled/Typography';
import PriceRange from './PriceRange';

function ProductFilter({ filterData, setFilterData }) {
  const getFilterData = async (min, max) => {
    setFilterData((prev) => ({ ...prev, min, max }));
  };
  const onChangeSort = (event) => {
    setFilterData((prev) => ({ ...prev, sort: event.target.value }));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.range__group}>
        <FilterTitle>Price Range</FilterTitle>
        <PriceRange min={0} max={5000} setRange={getFilterData} />
      </div>
      <div className={style.sort__group}>
        <div className={style.input__group}>
          <input
            className={style.input__control}
            defaultChecked={filterData.sort === 'asc'}
            onChange={onChangeSort}
            id="asc"
            name="sort"
            value="asc"
            type="radio"
          />
          <label className={style.sorting__title} htmlFor="asc">
            Price (Low &gt; High)
          </label>
        </div>
        <div className={style.input__group}>
          <input
            className={style.input__control}
            defaultChecked={filterData.sort === 'desc'}
            onChange={onChangeSort}
            id="dsc"
            name="sort"
            value="desc"
            type="radio"
          />
          <label className={style.sorting__title} htmlFor="dsc">
            Price (High &gt; Low)
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
