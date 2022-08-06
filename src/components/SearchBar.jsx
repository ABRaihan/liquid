import PropTypes from 'prop-types';
// Assets File
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../assets/icon/SearchIcon';
import { Context } from '../context/store/store';
import useScreenWidth from '../hooks/useScreenWidth';
// Style Files
import style from '../sass/components/searchBar.module.scss';
import { getData } from '../utils/APICalling';
import { isEmptyArray } from '../utils/checkerFunc';
import debounce from '../utils/debounce';

function SearchBar({ isShow }) {
  let lists;
  const screenWidth = useScreenWidth();
  const { state, actions } = useContext(Context);
  const searchBoxRef = useRef(null);
  const [searchItems, setSearchItems] = useState('');
  const [searchItemsAnimation, setSearchItemsAnimation] = useState('');
  //   This function get search data from api by input value
  const searchOnChange = async (e) => {
    if (!e.target.value) {
      setSearchItemsAnimation('');
      setTimeout(() => setSearchItems(''), 300);
      return;
    }
    const items = await getData(`/header/search?q=${e.target.value}`);
    setSearchItems(items);
  };
  const searchBarHidden = () => {
    if (screenWidth > 1024) {
      setSearchItemsAnimation('');
      searchBoxRef.current.value = '';
      setTimeout(() => setSearchItems(''), 300);
    } else {
      actions.setSearchBarAnimation('');
      setTimeout(() => isShow(false), 300);
    }
  };
  // This is for making search items element
  if (isEmptyArray(searchItems)) {
    lists = <li className={style.item__menu}>No Item Found</li>;
  } else {
    lists = searchItems.map(({ _id, name, slug }) => {
      const regEx = new RegExp(searchBoxRef.current.value, 'i');
      const matchValue = name.match(regEx);
      const strongName = name.replace(
        matchValue,
        `<strong>${matchValue}</strong>`,
      );
      return (
        <Link onClick={searchBarHidden} to={`/item/${slug}`} key={_id}>
          <li
            className={style.item__menu}
            dangerouslySetInnerHTML={{ __html: strongName }}
          />
        </Link>
      );
    });
  }
  // This useEffect is for searchBar showing animation
  useEffect(() => {
    setTimeout(() => actions.setSearchBarAnimation(style.search__bar__show));
  }, []);

  // This useEffect is for searchItem showing animation
  useEffect(() => {
    if (searchItems !== '') {
      setTimeout(() => setSearchItemsAnimation(style.items__show));
    }
  }, [searchItems]);
  const outSideClick = () => {
    actions.setSearchBarAnimation('');
    setTimeout(() => isShow(false), 300);
  };
  return (
    <>
      <div className={`${style.wrapper} ${state.searchBarAnimation}`}>
        <input
          className={style.search__box}
          type="text"
          placeholder="Search for Products"
          onChange={debounce(searchOnChange, 300)}
          ref={searchBoxRef}
        />
        <div className={style.icon__box}>
          <SearchIcon />
        </div>
        {searchItems && (
          <ul className={`${style.items} ${searchItemsAnimation}`}>{lists}</ul>
        )}
      </div>
      {screenWidth < 1025 && (
        <div className={style.hide__area} onClick={outSideClick} />
      )}
    </>
  );
}

export default SearchBar;
SearchBar.propTypes = {
  isShow: PropTypes.func.isRequired,
};
