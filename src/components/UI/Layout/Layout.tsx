import React, { ReactElement } from "react";
import { white, lightBlack } from "../../../constants/colors";
import styled from "styled-components";
interface Props {
  children: JSX.Element[] | JSX.Element | Function;
}
const Page = styled.div`
  color: ${white};
  background-color: ${lightBlack};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  position: absolute;
  box-shadow: 9px 10px 28px -6px rgba(0, 0, 0, 0.75);
  padding: 40px;
  overflow-y: auto;
`;
const SectionContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  grid-gap: 20px;
  width: 100%;
  margin: 20px 0;
  &:first-of-type {
    margin-top: 0;
  }
`;
export function PageContainer({ children }: Props): ReactElement {
  return <Page>{children}</Page>;
}

export function SectionContainer({ children }: Props): ReactElement {
  return <SectionContainerDiv>{children}</SectionContainerDiv>;
}
