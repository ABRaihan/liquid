import styled from 'styled-components';

const Input = styled.input`
  position: relative;
  color: red;
  &::after {
    position: absolute;
    content: "hello";
  }
`;
export default function Test() {
  return <Input type="text" placeholder="Inputs" />;
}
