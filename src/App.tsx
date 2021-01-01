import React, { Component } from "react";
import Background from "./components/UI/Background/Background";
import TracerNotification from "./components/TracerNotification/TracerNotification";
import MainContainer from "./containers/MainContainer/MainContainer";
import ResumeContext from "./context/resume.context";
import ProjectDetails from "./containers/ProjectDetails/ProjectDetails";
import MetaTags from "./components/MetaTags/MetaTags";
import { AppStateType } from "./types";
import { projectsData } from "./constants/data";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
class App extends Component<any, any> {
  handleMouseMove = ({ pageX: x, pageY: y }: React.MouseEvent): void => {
    this.setState((prevState: React.ComponentState) => ({
      ...prevState,
      mousePosition: {
        ...prevState.mousePosition,
        x,
        y,
      },
    }));
  };
  toggleTracerNotification = (show: boolean, text: string | undefined = "") => {
    this.setState((prevState: React.ComponentState) => ({
      ...prevState,
      tracerNotification: {
        ...prevState.tracerNotification,
        text,
        show: show,
      },
    }));
  };
  changeSelectedProjectDetails = (id?: number): void => {
    if (id) {
      const newSelectedProject = projectsData.find(
        (project) => project.id === id
      );
      this.setState((prevState: React.ComponentState) => ({
        ...prevState,
        projectDetails: {
          ...prevState.projectDetails,
          selectedProjectDetails: newSelectedProject,
        },
      }));
    } else {
      this.setState((prevState: React.ComponentState) => ({
        ...prevState,
        projectDetails: {
          ...prevState.projectDetails,
          selectedProjectDetails: undefined,
        },
      }));
    }
  };
  state: AppStateType = {
    mousePosition: {
      x: 0,
      y: 0,
      handleMouseMove: this.handleMouseMove,
    },
    tracerNotification: {
      text: "",
      show: false,
      toggleTracerNotification: this.toggleTracerNotification,
    },
    projectDetails: {
      changeSelectedProjectDetails: this.changeSelectedProjectDetails,
    },
  };
  render() {
    return (
      <Container data-test="app">
        <ResumeContext.Provider value={this.state}>
          <MetaTags />
          <TracerNotification />
          <Background />
          <MainContainer />
          <ProjectDetails />
        </ResumeContext.Provider>
      </Container>
    );
  }
}

export default App;
