import styled from 'styled-components';
import { secondaryColor } from './utils/variables';

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${secondaryColor}19;
`;
Divider.displayName = 'Divider';
export default Divider;
