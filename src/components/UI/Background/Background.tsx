import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import backgroundImage from "../../../assets/background.jpg";
import * as easings from "d3-ease";
import ResumeContext from "../../../context/resume.context";

const calculateXYS = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1.1,
];

const InteractiveBackground = styled(animated.div)`
  background: url("${backgroundImage}") no-repeat;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  background-size: calc(100% + 70px);
`;
const backgroundTransition = (x: number, y: number, s: number) =>
  `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export default function Background({}: {}): ReactElement {
  const resumeContext = useContext(ResumeContext);
  const { x, y } = resumeContext.mousePosition;
  const [animationProps, setAnimationProps] = useSpring(() => ({
    xys: [0, 0, 3],
    config: {
      mass: 20,
      tension: 300,
      friction: 120,
      easing: easings.easeCubic,
    },
  }));
  setAnimationProps({
    xys: calculateXYS(x, y),
  });
  return (
    <InteractiveBackground
      data-test="interactive-background"
      style={{
        // @ts-ignore
        transform: animationProps.xys.interpolate(backgroundTransition),
      }}
    />
  );
}
// export default class Background extends Component {
//   static contextType = ResumeContext;
//   render() {
//
// }
