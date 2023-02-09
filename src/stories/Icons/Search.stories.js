import SearchIcon from '../../assets/icons/SearchIcon';

export default {
  title: 'AtomComponent/Icons',
  component: SearchIcon,
};

export const Search = SearchIcon.bind({});

Search.args = {
  width: 18,
  height: 18,
};
