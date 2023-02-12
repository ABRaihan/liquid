import PropTypes from 'prop-types';
/**
 * @param {number} width - number
 * @param {number} height - number
 * @returns {JSX.Element} JSX.Element
 */
export default function CheckIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 7"
    >
      <path
        id="Path"
        d="M8.494.256a.888.888,0,0,1,1.248,0,.87.87,0,0,1,0,1.237L4.447,6.744a.888.888,0,0,1-1.248,0L.258,3.827a.87.87,0,0,1,0-1.237.888.888,0,0,1,1.248,0l2.317,2.3Z"
        fill="black"
      />
    </svg>
  );
}

CheckIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

CheckIcon.defaultProps = {
  width: 10,
  height: 7,
};
