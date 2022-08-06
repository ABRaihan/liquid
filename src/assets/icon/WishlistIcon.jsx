import PropTypes from 'prop-types';

function WishlistIcon({ width, height, color }) {
  return (
    <svg
      className="liquid_header_icon_size"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 19.33"
    >
      <path
        id="Wishlist"
        d="M16.035,1.917A5.864,5.864,0,0,0,11,4.941a5.864,5.864,0,0,0-5.04-3.024A6.231,6.231,0,0,0,0,8.377c0,4.166,4.385,8.717,8.063,11.8a4.558,4.558,0,0,0,5.864,0c3.678-3.085,8.063-7.635,8.063-11.8a6.231,6.231,0,0,0-5.956-6.46ZM12.75,18.777a2.724,2.724,0,0,1-3.509,0c-4.708-3.95-7.408-7.74-7.408-10.4A4.4,4.4,0,0,1,5.955,3.75a4.4,4.4,0,0,1,4.123,4.627.916.916,0,0,0,1.833,0A4.4,4.4,0,0,1,16.035,3.75a4.4,4.4,0,0,1,4.123,4.627c0,2.66-2.7,6.45-7.408,10.4Z"
        transform="translate(0.005 -1.917)"
        fill={color}
      />
    </svg>
  );
}

export default WishlistIcon;
WishlistIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
WishlistIcon.defaultProps = {
  width: 20,
  height: 20,
  color: '#1e272e',
};
