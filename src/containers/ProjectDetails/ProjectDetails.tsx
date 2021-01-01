import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import * as easings from "d3-ease";
import { lightBlack } from "../../constants/colors";
import Header from "./components/Header";
import ResumeContext from "../../context/resume.context";
import Body from "./components/Body";
interface Props {}
const Container = styled(animated.div)`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${lightBlack};
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  padding: 40px 30px;
  border-radius: 40px;
  max-width: 1209px;
`;

export default function ProjectDetails({}: Props): ReactElement {
  const resumeContext = useContext(ResumeContext);
  const {
    selectedProjectDetails,
    changeSelectedProjectDetails,
  } = resumeContext.projectDetails;

  const transitions = useTransition(
    selectedProjectDetails,
    (p) => (p ? p.id : 0),
    {
      from: { opacity: 0.8, width: "0%", height: "0%" },
      enter: { opacity: 1, width: "100%", height: "91%" },
      leave: { opacity: 0, width: "0%", height: "0%" },
      config: {
        easing: easings.easeCubic,
        mass: 1.5,
        friction: 11,
        tension: 90,
      },
    }
  );

  if (!selectedProjectDetails) return <div />;

  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        return (
          item && (
            <Container style={props}>
              <Header
                selectedProjectDetails={selectedProjectDetails}
                changeSelectedProjectDetails={changeSelectedProjectDetails}
              />
              <Body selectedProjectDetails={selectedProjectDetails} />
            </Container>
          )
        );
      })}
    </div>
  );
}
