import styled from 'styled-components';
import { primaryColor, secondaryColor } from './utils/variables';

const Counter = styled.span`
  position: absolute;
  top: ${({ top }) => (top || '15px')};
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${primaryColor};
  font-size: 11px;
  font-weight: 700;
  color: ${secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Counter;
