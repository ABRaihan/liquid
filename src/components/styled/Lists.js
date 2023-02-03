import styled from 'styled-components';

const ListWrapper = styled.div`
  height: calc(100% - 130px);
  overflow-y: auto;
  @media only screen and (min-width: 768px) {
    margin-top: 67px;
    height: calc(100% - 190px);
  }
`;

export default ListWrapper;
ListWrapper.displayName = 'ListWrapper';
