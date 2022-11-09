import styled from 'styled-components';

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 15px;
  margin: ${({ mSM }) => (mSM ? mSM : '')};
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px 20px;
    margin: ${({ mMD }) => (mMD ? mMD : '')};
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 40px 30px;
    margin: ${({ mLG }) => (mLG ? mLG : '')};
  }
`;
export default ItemsWrapper;
