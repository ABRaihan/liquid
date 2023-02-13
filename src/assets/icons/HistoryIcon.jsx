import { primaryColor } from '../../components/styled/utils/variables';

/**
 * @description Used to indicate recorded history
 * @returns {JSX.Element} SVG Icon
 */
export default function HistoryIcon() {
  return (
    <svg
      width="16"
      height="15.98"
      viewBox="0 0 16 15.98"
    >
      <path
        id="Path_1726"
        data-name="Path 1726"
        d="M15.909,6.77A8.018,8.018,0,0,0,2.389,2.282V.668a.668.668,0,0,0-1.336,0V3.341A1.336,1.336,0,0,0,2.389,4.677H5.062a.668.668,0,1,0,0-1.336H3.224A6.675,6.675,0,1,1,1.33,8.6a.656.656,0,0,0-.663-.587A.673.673,0,0,0,0,8.753,8.018,8.018,0,1,0,15.907,6.769Z"
        transform="translate(0.004)"
        fill={primaryColor}
      />
    </svg>
  );
}
