import styled from 'styled-components';
import font from './utils/mixins';

const AuthErrorMessage = styled.p`
  ${font('12px', 500, '#ff5e57')};
  margin-top: 10px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;
export default AuthErrorMessage;
