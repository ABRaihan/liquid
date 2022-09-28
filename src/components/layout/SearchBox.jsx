import { useEffect, useRef, useState } from 'react';
import useDelayUnmount from '../../hooks/useDelayUnmount';
import useOutsideDetect from '../../hooks/useOutsideDetect';
import useScreenWidth from '../../hooks/useScreenWidth';
import style from '../../sass/components/layout/searchBox.module.scss';
import { getData } from '../../utils/APICalling';
import classNames from '../../utils/classNames';
import fetchDebounce from '../../utils/debounce';
import SearchInput from '../form/SearchInput';
import SearchList from './SearchList';

function SearchBox({ animation, setSearchBoxMount, handleSearchBarHide }) {
  // custom hooks
  const screenWidth = useScreenWidth();
  const searchBoxRef = useRef(null);
  useOutsideDetect(searchBoxRef, handleSearchBarHide);
  // states hooks
  const [query, setQuery] = useState('');
  const [searchItems, setSearchItems] = useState('');
  const [searchListMount, setSearchListMount] = useState(false);
  const [renderSearchList, animationSearchList] = useDelayUnmount(
    searchListMount,
    300,
  );
  //   search input value change handler
  const handleChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setSearchListMount(false);
      setTimeout(() => setSearchItems(''), 300);
    }
    setQuery(value);
  };
  // click search item to navigate handler
  const handleItemsNavigate = () => {
    if (screenWidth < 1025) {
      setSearchListMount(false);
      setTimeout(() => setSearchBoxMount(false), 300);
    } else {
      setQuery('');
      setSearchListMount(false);
      setTimeout(() => setSearchItems(''), 300);
    }
  };
  // fetch data from api using search input value
  const fetchSearchData = async () => {
    if (!query) return;
    const data = await getData(`/widget/header/search?q=${query}`);
    setSearchItems(data);
    setSearchListMount(true);
  };
  //   data fetch effect for search items
  useEffect(() => {
    fetchDebounce(fetchSearchData, 300);
  }, [query]);
  return (
    <div
      ref={searchBoxRef}
      className={classNames({
        [style.wrapper]: true,
        [style.show]: animation,
      })}
    >
      <SearchInput value={query} handleChange={handleChange} />
      {renderSearchList && (
        <SearchList
          list={searchItems}
          query={query}
          animation={animationSearchList}
          clickHandler={handleItemsNavigate}
        />
      )}
    </div>
  );
}

export default SearchBox;
