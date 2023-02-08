import PropTypes from 'prop-types';

/**
 *
 * @param {number} width - Width of the icon
 * @param {number} height - Height of the icon
 * @param {func} onClick - Handler for click event
 * @returns {JSX.Element} - CloseIcon component
 */
export default function CloseIcon({ width, height, onClick }) {
  return (
    <span onClick={onClick}>
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
            fill="#1e272e"
          />
          <rect
            id="Shape_1"
            data-name="Shape 1"
            width="19.284"
            height="1.928"
            rx="0.964"
            transform="translate(1153.22 265.585) rotate(135)"
            fill="#1e272e"
          />
        </g>
      </svg>
    </span>
  );
}

CloseIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
