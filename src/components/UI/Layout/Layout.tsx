import React, { ReactElement } from "react";
import { white, lightBlack } from "../../../constants/colors";
import styled from "styled-components";
import devices from "../../../constants/breakpoints";
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
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  width: 100%;
  margin: 20px 0;
  &:first-of-type {
    margin-top: 0;
  }
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;
export function PageContainer({ children }: Props): ReactElement {
  return <Page>{children}</Page>;
}

export function SectionContainer({ children }: Props): ReactElement {
  return <SectionContainerDiv>{children}</SectionContainerDiv>;
}
