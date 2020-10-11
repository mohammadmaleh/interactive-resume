import React, { ReactElement } from "react";
import styled from "styled-components";
import BasicInfo from "../components/BasicInfo/BasicInfo";
import MainMenu from "./MainMenu";
import Routes from "../Routes";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import ResumeContext from "../context/resume.context";
interface MainContainerProps {}
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default function MainContainer(props: MainContainerProps): ReactElement {
  return (
    <ResumeContext.Consumer>
      {(context) => {
        return (
          <Router>
            <Container
              onMouseMove={(e) => {
                context.mousePosition.handleMouseMove(e);
              }}
            >
              <ChildContainer>
                <BasicInfo />
                <Routes />
              </ChildContainer>
              <MainMenu />
            </Container>
          </Router>
        );
      }}
    </ResumeContext.Consumer>
  );
}
