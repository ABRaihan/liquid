import PropTypes from 'prop-types';

function SearchIcon({ width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" name="search">
      <path
        id="Search"
        d="M15.773,14.832,11.8,10.857a6.668,6.668,0,1,0-.941.941l3.974,3.974a.666.666,0,1,0,.941-.941ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
        transform="translate(0.032 0.032)"
        fill="#1e272e"
      />
    </svg>
  );
}

export default SearchIcon;
SearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

SearchIcon.defaultProps = {
  width: 18,
  height: 18,
};
