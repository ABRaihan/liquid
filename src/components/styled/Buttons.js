import styled, { css } from 'styled-components';
import { primaryColor, secondaryColor } from './utils/variables';
import font from './utils/mixins';

const commonBtn = () => css`
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
  @media only screen and (min-width: 1200px) {
    cursor: pointer;
  }
`;

const PrimaryButton = styled.button`
  ${commonBtn};
  padding: 9px 25px;
  background-color: ${primaryColor};
  ${font('14px', 700, secondaryColor)};
`;
export default PrimaryButton;
