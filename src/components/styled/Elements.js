import styled from 'styled-components';
import { secondaryColor } from './utils/colors';

const Separator = styled.hr`
    margin: 30px 0 25px;
    border: none;
    border-top: .5px solid ${secondaryColor + 19};
`;
export default Separator;
