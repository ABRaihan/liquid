import { secondaryColor } from '../../components/styled/utils/variables';

/**
 * @description Used to indicate filtering
 * @returns {JSX.Element} SVG Icon
 */
export default function FilterIcon() {
  return (
    <svg
      width="12.829"
      height="14"
      viewBox="0 0 12.829 14"
    >
      <path
        id="Icon"
        d="M8.584,14a.583.583,0,0,1-.35-.117L5.9,12.133a.583.583,0,0,1-.233-.467V8.388l-4.093-4.6A2.275,2.275,0,0,1,3.276,0h8.283a2.275,2.275,0,0,1,1.7,3.785l-4.091,4.6v5.028A.583.583,0,0,1,8.584,14Zm-1.75-2.625L8,12.25V8.167a.583.583,0,0,1,.148-.387l4.24-4.77a1.108,1.108,0,0,0-.829-1.843H3.276a1.108,1.108,0,0,0-.829,1.842l4.24,4.771a.583.583,0,0,1,.147.387Z"
        transform="translate(-1.002)"
        fill={secondaryColor}
      />
    </svg>
  );
}
