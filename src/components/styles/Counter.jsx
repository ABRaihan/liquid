import styled from 'styled-components';

const Counter = styled.span`
  position: absolute;
  top: ${({ top }) => (top || '15px')};
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffc312;
  font-size: 11px;
  font-weight: 700;
  color: #1e272e;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Counter;
