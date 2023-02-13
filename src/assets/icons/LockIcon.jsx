import { primaryColor } from '../../components/styled/utils/variables';

/**
 * @description Used to indicate privacy
 * @returns {JSX.Element} SVG Icon
 */
export default function LockIcon() {
  return (
    <svg
      width="13.333"
      height="16"
      viewBox="0 0 13.333 16"
    >
      <path
        id="Path_1729"
        data-name="Path 1729"
        d="M13.333,5.616V4.667A4.667,4.667,0,1,0,4,4.667v.949A3.333,3.333,0,0,0,2,8.667v4A3.337,3.337,0,0,0,5.333,16H12a3.337,3.337,0,0,0,3.333-3.333v-4A3.333,3.333,0,0,0,13.333,5.616Zm-8-.949a3.333,3.333,0,1,1,6.667,0v.667H5.333Zm8.667,8a2,2,0,0,1-2,2H5.333a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2H12a2,2,0,0,1,2,2Z"
        transform="translate(-2)"
        fill={primaryColor}
      />
    </svg>
  );
}
