import React, { ReactElement } from "react";
import styled from "styled-components";
import BasicInfo from "../components/BasicInfo/BasicInfo";
interface Props {
  handleMouseMove: Function;
}
interface containerProps {}
interface childContainer {}
const Container = styled.div<containerProps>`
  width: 100%;
  height: 100vh;
  padding: 40px 30px;
`;
const ChildContainer = styled.div<childContainer>`
  background: linear-gradient(#444444, #444444);
  width: 100%;
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
        <BasicInfo />
      </ChildContainer>
    </Container>
  );
}
