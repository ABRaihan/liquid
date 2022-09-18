import { useEffect, useState } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';
import style from '../../sass/components/layout/searchBox.module.scss';
import { getData } from '../../utils/APICalling';
import classNames from '../../utils/classNames';
import fetchDebounce from '../../utils/debounce';
import SearchInput from '../form/SearchInput';
import SearchList from './SearchList';

function SearchBox({ animation, setAnimation, handleSearchBarHide }) {
  // custom hooks
  const screenWidth = useScreenWidth();
  // states hooks
  const [query, setQuery] = useState('');
  const [searchItems, setSearchItems] = useState('');
  const [listAnimation, setListAnimation] = useState(false);

  //   search input value change handler
  const handleChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setListAnimation(false);
      setTimeout(() => setSearchItems(''), 300);
    }
    setQuery(value);
  };
  // click search item to navigate handler
  const handleItemsNavigate = () => {
    if (screenWidth > 1024) {
      setListAnimation(false);
      setQuery('');
      setTimeout(() => setSearchItems(''), 300);
    }
  };
  // fetch data from api using search input value
  const fetchSearchData = async () => {
    if (!query) return;
    const data = await getData(`/widget/header/search?q=${query}`);
    setSearchItems(data);
  };
  //   data fetch effect for search items
  useEffect(() => {
    fetchDebounce(fetchSearchData, 300);
  }, [query]);
  //   search box animation effect
  useEffect(() => {
    setTimeout(() => setAnimation(true), 300);
  }, []);
  return (
    <div
      className={classNames({
        [style.wrapper]: true,
        [style.show]: animation,
      })}
    >
      <SearchInput value={query} handleChange={handleChange} />
      {searchItems && (
        <SearchList
          list={searchItems}
          query={query}
          animation={listAnimation}
          setAnimation={setListAnimation}
          clickHandler={handleItemsNavigate}
        />
      )}
      <div onClick={handleSearchBarHide} className={style.hide__area} />
    </div>
  );
}

export default SearchBox;
