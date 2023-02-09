import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Visible Icon For Password Visible In Input
 * @param {boolean} visible
 * @callback onClick
 * @returns {JSX.Element}
 */
export default function VisibilityIcon({ visible, onClick }) {
  return (
    <IconWrapper onClick={onClick} visible={visible}>
      <svg
        id="Show_Hide"
        data-name="Show/Hide"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14.657"
        viewBox="0 0 16 14.657"
      >
        <path
          id="Eye_Crossed"
          data-name="Eye Crossed"
          d="M15.507,6.612A10.573,10.573,0,0,0,13.26,4.007l1.866-1.866a.666.666,0,1,0-.942-.942L12.155,3.23A8.033,8.033,0,0,0,8,2.1,8.828,8.828,0,0,0,.484,6.612a3.271,3.271,0,0,0,0,3.44,10.573,10.573,0,0,0,2.247,2.605L.865,14.523a.666.666,0,1,0,.942.942l2.034-2.034A8.033,8.033,0,0,0,8,14.559a8.828,8.828,0,0,0,7.511-4.508A3.271,3.271,0,0,0,15.507,6.612ZM1.62,9.354a1.945,1.945,0,0,1,0-2.045A7.544,7.544,0,0,1,8,3.437a6.731,6.731,0,0,1,3.176.776L9.83,5.555a3.327,3.327,0,0,0-4.612,4.612L3.679,11.706A9.145,9.145,0,0,1,1.62,9.354ZM9.995,8.332a2,2,0,0,1-2,2,1.967,1.967,0,0,1-.856-.2L9.795,7.475A1.967,1.967,0,0,1,9.995,8.332Zm-4,0a2,2,0,0,1,2-2,1.967,1.967,0,0,1,.856.2L6.2,9.188A1.967,1.967,0,0,1,6,8.332Zm8.375,1.022A7.544,7.544,0,0,1,8,13.226a6.731,6.731,0,0,1-3.176-.776l1.342-1.342A3.327,3.327,0,0,0,10.773,6.5l1.539-1.539a9.145,9.145,0,0,1,2.059,2.352A1.945,1.945,0,0,1,14.371,9.354Z"
          transform="translate(0.004 -1.003)"
          fill="#1e272e"
          opacity="0"
        />
        <path
          id="Eye"
          d="M-4114.515-444.4a3.273,3.273,0,0,1,0-3.44,8.824,8.824,0,0,1,7.511-4.508,8.825,8.825,0,0,1,7.512,4.508,3.275,3.275,0,0,1,0,3.44,8.824,8.824,0,0,1-7.512,4.509A8.823,8.823,0,0,1-4114.515-444.4Zm1.136-2.742a1.943,1.943,0,0,0,0,2.045,7.539,7.539,0,0,0,6.375,3.872,7.537,7.537,0,0,0,6.374-3.872,1.941,1.941,0,0,0,0-2.045,7.531,7.531,0,0,0-6.374-3.872A7.539,7.539,0,0,0-4113.379-447.139Zm3.042,1.022a3.333,3.333,0,0,1,3.333-3.332,3.337,3.337,0,0,1,3.333,3.332,3.333,3.333,0,0,1-3.333,3.333A3.333,3.333,0,0,1-4110.336-446.117Zm1.333,0a2,2,0,0,0,2,2,2,2,0,0,0,2-2,2,2,0,0,0-2-2A2,2,0,0,0-4109-446.117Z"
          transform="translate(4115.004 453.345)"
          fill="#1e272e"
        />
      </svg>
    </IconWrapper>
  );
}

const transform = {
  visible: 'translate(-2px, 6.5px) rotate(-45deg)',
  hidden: 'translate(13px, -8px) rotate(-45deg)',
};
const IconWrapper = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    transition: all 0.3s;
    width: 20px;
    height: 2px;
    background-color: #1e272e;
    transform: ${({ visible }) => (visible ? transform.visible : transform.hidden)};
  }
`;

VisibilityIcon.propTypes = {
  visible: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
VisibilityIcon.defaultProps = {
  visible: false,
};
