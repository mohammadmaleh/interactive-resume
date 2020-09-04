import React, { ReactElement } from "react";
import styled from "styled-components";
import BasicInfo from "../components/BasicInfo/BasicInfo";
import RouterTest from "../components/RouterTest";
import MainMenu from "./MainMenu";
interface Props {
  handleMouseMove: Function;
}
interface containerProps {}
interface childContainer {}
const Container = styled.div<containerProps>`
  width: 100%;
  height: 100vh;
  padding: 40px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ChildContainer = styled.div<childContainer>`
  background: linear-gradient(#444444, #444444);
  width: calc(100% - 100px);
  max-width: 1280px;
  height: 100%;
  border-radius: 40px;
`;
export default function MainContainer({
  handleMouseMove,
}: Props): ReactElement {
  return (
    <Container
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <ChildContainer>
        {/* <BasicInfo /> */}
        {/* <RouterTest /> */}
      </ChildContainer>
      <MainMenu />
    </Container>
  );
}
