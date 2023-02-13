/**
 * @description Used for review
 * @param {number} review - number
 * @returns {JSX.Element} SVG Icon
 */
export default function ReviewIcon({ review }) {
  return (
    <svg width="14" height="13.559" viewBox="0 0 14 13.559">
      <defs>
        <linearGradient id="star" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset={`${review * 100}%`}
            style={{ stopColor: 'rgb(255,195,18)', stopOpacity: '1' }}
          />
          <stop
            offset="0%"
            style={{ stopColor: 'rgb(30,39,46)', stopOpacity: '0.102' }}
          />
        </linearGradient>
      </defs>
      <path
        d="M.778,7.316,2.856,8.834l-.789,2.444a1.884,1.884,0,0,0,2.909,2.1l2.032-1.5,2.032,1.494a1.883,1.883,0,0,0,2.908-2.1l-.789-2.444,2.078-1.517a1.883,1.883,0,0,0-1.109-3.4H9.575L8.8,1.5a1.883,1.883,0,0,0-3.587,0L4.439,3.912H1.889A1.883,1.883,0,0,0,.78,7.316Z"
        transform="translate(-0.008 -0.19)"
        fill="url(#star)"
      />
    </svg>
  );
}
ReviewIcon.propTypes = {
  review: (props, propName, componentName) => {
    if (!(props >= 0 && props <= 1)) {
      return new Error(
        `Out of range ${propName}  prop supplied to ${componentName}`,
      );
    }
  },
};

ReviewIcon.defaultProps = {
  review: 0,
};
