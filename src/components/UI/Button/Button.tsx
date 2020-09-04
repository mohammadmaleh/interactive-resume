import React, { ReactElement } from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactChild;
}
const ButtonWrapper = styled.button`
  background-color: transparent;
  color: #fff;
  border-color: #fff;
  box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.78);
  padding: 10px 20px;
  border-radius: 40px;
  transition: all 0.6s ease-in-out;
  margin-top: 30px;
  &:hover {
    color: #04b4e0;
    background-color: #fff;
    border-color: #fff;
    cursor: pointer;
  }
`;
export default function Button({ children }: Props): ReactElement {
  return <ButtonWrapper>{children}</ButtonWrapper>;
}
