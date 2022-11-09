import styled from 'styled-components';
import font from './utils/mixins';
import { secondaryColor } from './utils/variables';

const LayoutTitle = styled.p`
  margin: ${({ mSM }) => (mSM ? mSM : '')};
  ${font('18px', 700, secondaryColor)};
  @media only screen and (min-width: 768px){
    margin: ${({ mMD }) => (mMD ? mMD : '')};
    ${font('24px', 700, secondaryColor)};
  }
  @media only screen and (min-width: 1025px){
    margin: ${({ mLG }) => (mLG ? mLG : '')};
    ${font('30px', 700, secondaryColor)};
  }
`;
LayoutTitle.displayName = 'LayoutTitle';
export default LayoutTitle;
