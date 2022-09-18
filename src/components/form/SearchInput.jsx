import SearchIcon from '../../assets/icon/SearchIcon';
import style from '../../sass/components/form/searchInput.module.scss';

function SearchInput({ value, handleChange }) {
  return (
    <div className={style.wrapper}>
      <input
        type="text"
        placeholder="Search for Products"
        value={value}
        onChange={handleChange}
      />
      <span className={style.icon__box}>
        <SearchIcon />
      </span>
    </div>
  );
}

export default SearchInput;
