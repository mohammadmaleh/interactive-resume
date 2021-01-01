import React, { ReactElement } from "react";
import styled from "styled-components";
import BasicInfo from "../../components/BasicInfo/BasicInfo";
import MainMenu from "../MainMenu/MainMenu";

import Routes from "../../Routes";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import ResumeContext from "../../context/resume.context";
import { grey } from "../../constants/colors";
import devices from "../../constants/breakpoints";
interface MainContainerProps {}
interface containerProps {}
interface childContainer {}

const FirstContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  justify-self: center;
`;
const Container = styled.div<containerProps>`
  width: 100%;
  height: 100vh;
  max-width: 1270px;
  padding: 40px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-self: center;
  @media ${devices.mobileL} {
    padding: 0;
    flex-direction: column;
  }
`;
const ChildContainer = styled.div<childContainer>`
  background: ${grey};
  width: calc(100% - 100px);
  max-width: 1280px;
  height: 100%;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export default function MainContainer(props: MainContainerProps): ReactElement {
  return (
    <ResumeContext.Consumer>
      {(context) => {
        return (
          <Router>
            <FirstContainer
              onMouseMove={(e) => {
                context.mousePosition.handleMouseMove(e);
              }}
              onClick={() => {
                if (context.projectDetails.selectedProjectDetails)
                  context.projectDetails.changeSelectedProjectDetails();
              }}
            >
              <Container>
                <ChildContainer>
                  <BasicInfo />
                  <Routes />
                </ChildContainer>
                <MainMenu />
              </Container>
            </FirstContainer>
          </Router>
        );
      }}
    </ResumeContext.Consumer>
  );
}
