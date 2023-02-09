import PropTypes from 'prop-types';
import { secondaryColor } from '../../components/styled/utils/variables';

/**
 *
 * @param {number} width - number
 * @param {number} height - number
 * @param {string} color - string
 * @returns {JSX.Element} JSX.Element
 */
export default function CartIcon({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 19.509 20">
      <path
        id="Cart"
        d="M12.5,18.334A1.667,1.667,0,1,1,14.167,20,1.666,1.666,0,0,1,12.5,18.334Zm-8.334,0A1.667,1.667,0,1,1,5.833,20,1.666,1.666,0,0,1,4.166,18.334Zm2.965-2.5a4.166,4.166,0,0,1-4.138-3.68L1.846,2.4a.833.833,0,0,0-.827-.736H.833A.834.834,0,0,1,.833,0h.185A2.5,2.5,0,0,1,3.5,2.208l.035.293H17.008a2.5,2.5,0,0,1,2.461,2.944l-.654,3.628a4.167,4.167,0,0,1-4.1,3.427H4.78a2.5,2.5,0,0,0,2.35,1.666h8.7a.833.833,0,1,1,0,1.667Zm-2.615-5h10.2a2.5,2.5,0,0,0,2.464-2.056l.656-3.628a.834.834,0,0,0-.825-.982H3.732Z"
        fill={color}
      />
    </svg>
  );
}

CartIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
CartIcon.defaultProps = {
  width: 19.509,
  height: 20,
  color: secondaryColor,
};
