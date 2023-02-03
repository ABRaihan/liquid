import styled from 'styled-components';
import font from './utils/mixins';
import { secondaryColor } from './utils/variables';

export const LayoutTitle = styled.p`
  margin: ${({ mSM }) => (mSM ? mSM : '')};
  ${font('18px', 700, secondaryColor)};
  @media only screen and (min-width: 768px) {
    margin: ${({ mMD }) => (mMD ? mMD : '')};
    ${font('24px', 700, secondaryColor)};
  }
  @media only screen and (min-width: 1025px) {
    margin: ${({ mLG }) => (mLG ? mLG : '')};
    ${font('30px', 700, secondaryColor)};
  }
`;
LayoutTitle.displayName = 'LayoutTitle';
export const FilterTitle = styled.p`
  ${font('14px', '700', secondaryColor)};
  text-transform: uppercase;
  margin-bottom: 21px;
  letter-spacing: 2px;
`;
FilterTitle.displayName = 'FilterTitle';

export const ListTitle = styled.p`
  ${font('16px', '700', secondaryColor)};
  margin-bottom: 31px;
`;
ListTitle.displayName = 'ListTitle';
