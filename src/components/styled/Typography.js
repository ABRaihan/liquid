import styled from 'styled-components';
import font from './utils/mixins';
import { secondaryColor } from './utils/variables';

const LayoutTitle = styled.p`
  ${font('18px', 700, secondaryColor)};
  @media only screen and (min-width: 768px){
    ${font('24px', 700, secondaryColor)};
  }
  @media only screen and (min-width: 768px){
    ${font('30px', 700, secondaryColor)};
  }
`;
LayoutTitle.displayName = 'LayoutTitle';
export default LayoutTitle;
