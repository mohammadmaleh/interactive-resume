import React, { Component } from "react";
import Background from "./components/UI/Background/Background";
import TracerNotification from "./components/TracerNotification/TracerNotification";
import MainContainer from "./containers/MainContainer/MainContainer";
import ResumeContext from "./context/resume.context";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";

class App extends Component<any, any> {
  handleMouseMove = ({ clientX: x, clientY: y }: React.MouseEvent): void => {
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
  state = {
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
  };
  render() {
    return (
      <div data-test="app">
        <ResumeContext.Provider value={this.state}>
          <TracerNotification />
          <Background />
          <MainContainer />
        </ResumeContext.Provider>
      </div>
    );
  }
}

export default App;
