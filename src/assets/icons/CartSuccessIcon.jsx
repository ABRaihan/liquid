import PropTypes from 'prop-types';

/**
 * @description Used to indicate cart operation success
 * @param {number} width - number
 * @param {number} height - number
 * @param {string} color - string
 * @returns {JSX.Element} SVG Icon
 */
export default function CartSuccessIcon({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13.987 14"
    >
      <path
        id="Added_Cart"
        data-name="Added Cart"
        d="M2740.75-6193.168a1.167,1.167,0,0,1,1.167-1.167,1.167,1.167,0,0,1,1.167,1.167,1.167,1.167,0,0,1-1.167,1.167A1.167,1.167,0,0,1,2740.75-6193.168Zm-5.833,0a1.166,1.166,0,0,1,1.167-1.167,1.167,1.167,0,0,1,1.167,1.167,1.167,1.167,0,0,1-1.167,1.167A1.166,1.166,0,0,1,2734.917-6193.168Zm2.074-1.75a2.916,2.916,0,0,1-2.9-2.576l-.8-6.825a.583.583,0,0,0-.579-.515h-.13a.583.583,0,0,1-.583-.583.584.584,0,0,1,.583-.583h.13a1.75,1.75,0,0,1,1.737,1.544l.024.205h3.942a.584.584,0,0,1,.583.583.584.584,0,0,1-.583.584h-3.8l.549,4.667h7.139a1.75,1.75,0,0,0,1.723-1.439l.074-.414a.584.584,0,0,1,.678-.471.584.584,0,0,1,.471.677l-.075.415a2.916,2.916,0,0,1-2.871,2.4h-6.958a1.751,1.751,0,0,0,1.65,1.167h6.092a.583.583,0,0,1,.583.583.582.582,0,0,1-.583.583Zm4.99-6.1h-.019a1.093,1.093,0,0,1-.784-.35l-.942-.979a.585.585,0,0,1,.016-.825.584.584,0,0,1,.825.017l.9.945,3.009-3.012a.584.584,0,0,1,.825,0,.582.582,0,0,1,0,.824l-3.055,3.059a1.092,1.092,0,0,1-.776.322Z"
        transform="translate(-2732 6206)"
        fill={color}
      />
    </svg>
  );
}

CartSuccessIcon.propsTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

CartSuccessIcon.defaultProps = {
  width: 13.987,
  height: 14,
  color: '#ffc312',
};
