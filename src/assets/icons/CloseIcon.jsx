import PropTypes from 'prop-types';

/**
 * @param {number} width - number
 * @param {number} height - number
 * @param {string} color - string
 * @returns {JSX.Element} JSX.Element
 */
export default function CloseIcon({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 14.999"
    >
      <g id="Cross" transform="translate(-1138.221 -264.222)">
        <rect
          id="Shape_2"
          data-name="Shape 2"
          width="19.284"
          height="1.928"
          rx="0.964"
          transform="translate(1139.585 264.222) rotate(45)"
          fill={color}
        />
        <rect
          id="Shape_1"
          data-name="Shape 1"
          width="19.284"
          height="1.928"
          rx="0.964"
          transform="translate(1153.22 265.585) rotate(135)"
          fill={color}
        />
      </g>
    </svg>
  );
}

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

CloseIcon.defaultProps = {
  width: 20,
  height: 20,
  color: '#1e272e',
};
