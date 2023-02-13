import PropTypes from 'prop-types';
import { primaryColor, secondaryColor } from '../../components/styled/utils/variables';
/**
 * @description Used for product wishlist
 * @param {number} width - number
 * @param {number} height - number
 * @param {boolean} inWishlist - boolean
 * @returns {JSX.Element} SVG Icon
 */
export default function WishlistIcon({ width, height, inWishlist }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19.001 17.899"
    >
      <path
        id="heart"
        d="M13.118.917A4.8,4.8,0,0,0,9,3.391,4.8,4.8,0,0,0,4.872.917,5.1,5.1,0,0,0,0,6.2C0,11.281,8.212,17.148,8.562,17.4L9,17.7l.433-.307c.349-.247,8.563-6.115,8.563-11.194A5.1,5.1,0,0,0,13.118.917Z"
        transform="translate(0.505 -0.417)"
        fill={inWishlist ? primaryColor : 'none'}
        stroke={inWishlist ? primaryColor : secondaryColor}
        strokeWidth="1"
      />
    </svg>
  );
}

WishlistIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  inWishlist: PropTypes.bool,
};
WishlistIcon.defaultProps = {
  width: 20,
  height: 20,
  inWishlist: false,
};
