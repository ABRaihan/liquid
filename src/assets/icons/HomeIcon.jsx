import PropTypes from 'prop-types';

/**
 * @description Used to indicate root or home
 * @param {number} width - number
 * @param {number} height - number
 * @param {string} color - string
 * @returns {JSX.Element} SVG Icon
 */
export default function HomeIcon({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 19.988">
      <path
        id="Home"
        d="M.732,7.561,7.053,1.239a4.173,4.173,0,0,1,5.893,0l6.321,6.322A2.482,2.482,0,0,1,20,9.329v8.181a2.5,2.5,0,0,1-2.5,2.5H2.5a2.5,2.5,0,0,1-2.5-2.5V9.329A2.482,2.482,0,0,1,.732,7.561ZM7.5,18.343h5V15.064a2.5,2.5,0,1,0-5,0Zm-5.833-.833a.833.833,0,0,0,.833.833H5.833V15.064a4.167,4.167,0,0,1,8.333,0v3.278H17.5a.833.833,0,0,0,.833-.833V9.329a.84.84,0,0,0-.244-.589L11.768,2.42a2.507,2.507,0,0,0-3.537,0L1.911,8.742a.84.84,0,0,0-.244.587Z"
        transform="translate(0 -0.021)"
        fill={color}
      />
    </svg>
  );
}

HomeIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
HomeIcon.defaultProps = {
  width: 20,
  height: 19.988,
  color: '#1e272e',
};
