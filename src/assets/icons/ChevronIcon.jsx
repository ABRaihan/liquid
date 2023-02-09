import PropTypes from 'prop-types';

const chevronDirections = {
  left: {
    transform: 'rotate(90deg)',
  },
  right: {
    transform: 'rotate(-90deg)',
  },
  top: {
    transform: 'rotate(180deg)',
  },
  bottom: {
    transform: 'rotate(0deg)',
  },
};
/**
 * Chevron Icon For Direction
 * @param {number} width - Number
 * @param {number} height - Number
 * @param {string} direction - ['left', 'right', 'top', 'bottom']
 * @callback onClick
 * @returns {JSX.Element}
 */
export default function ChevronIcon({ width, height, direction, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 6.147"
      onClick={onClick}
      style={{ transition: '0.5s all', ...chevronDirections[direction] }}
    >
      <path
        id="Arrow"
        d="M16.749,8.165a.857.857,0,0,0-1.212,0L11.606,12.1a.875.875,0,0,1-1.212,0L6.463,8.165A.857.857,0,1,0,5.251,9.377l3.93,3.931a2.571,2.571,0,0,0,3.637,0l3.931-3.931A.857.857,0,0,0,16.749,8.165Z"
        transform="translate(-5 -7.914)"
        fill="#1e272e"
      />
    </svg>
  );
}

ChevronIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  onClick: PropTypes.func,
};
ChevronIcon.defaultProps = {
  width: 12,
  height: 6.147,
  direction: 'bottom',
  onClick: null,
};
