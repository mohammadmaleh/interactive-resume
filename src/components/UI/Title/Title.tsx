import React, { ReactElement } from "react";
import { blue, white } from "../../../constants/colors";
import styled from "styled-components";
interface Props {
  children: String;
  mainTitle?: Boolean;
}
const MainTitle = styled.h1`
  font-size: 30px;
  position: relative;
  margin-bottom: 20px;
  color: ${white};

  text-transform: capitalize;
  &:before {
    background: radial-gradient(${blue} 1px, transparent 1px),
      radial-gradient(${blue} 1px, transparent 1px), transparent;
    background-size: 7px 8px;
    position: absolute;
    opacity: 0.45;
    top: -10px;
    left: -10px;
    content: "";
    height: 30px;
    width: 30px;
  }
`;
const SubTitle = styled.h3`
  font-size: 20px;
  position: relative;
  text-transform: capitalize;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${white};
  &:before {
    background: radial-gradient(${blue} 1px, transparent 1px),
      radial-gradient(${blue} 1px, transparent 1px), transparent;
    background-size: 7px 8px;
    position: absolute;
    opacity: 0.45;
    top: -10px;
    left: -10px;
    content: "";
    height: 25px;
    width: 23px;
  }
`;
export default function Title({
  children,
  mainTitle = false,
}: Props): ReactElement {
  return mainTitle ? (
    <MainTitle>{children}</MainTitle>
  ) : (
    <SubTitle>{children}</SubTitle>
  );
}
