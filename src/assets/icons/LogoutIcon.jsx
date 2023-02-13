import { primaryColor } from '../../components/styled/utils/variables';

/**
 * @description Used to indicate user can logout
 * @returns {JSX.Element} SVG Icon
 */
export default function LogoutIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        id="icon"
        d="M3.333,16A3.337,3.337,0,0,1,0,12.667V3.333A3.337,3.337,0,0,1,3.333,0H4.667a.667.667,0,0,1,0,1.333H3.333a2,2,0,0,0-2,2v9.334a2,2,0,0,0,2,2H4.667a.667.667,0,0,1,0,1.333Zm8.082-3.529a.666.666,0,0,1,0-.943l2.862-2.862H4A.667.667,0,1,1,4,7.333H14.277L11.416,4.471a.666.666,0,0,1,.943-.943l3.058,3.057a2.005,2.005,0,0,1,0,2.828l-3.058,3.057a.666.666,0,0,1-.943,0Z"
        fill={primaryColor}
      />
    </svg>
  );
}
