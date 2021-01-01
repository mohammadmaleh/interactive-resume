import React, { Component, Fragment, useContext, memo } from "react";
import { useSpring, animated, useTransition, config } from "react-spring";
import backgroundDarkDoodleFixed from "../../../assets/background/background-dark-doodle-fixed-layer.png";
import backgroundDarkDoodleFirst from "../../../assets/background/background-dark-doodle-first-layer.png";
import backgroundDarkDoodleSecond from "../../../assets/background/background-dark-doodle-second-layer.png";
import ResumeContext from "../../../context/resume.context";
import devices from "../../../constants/breakpoints";
import styled from "styled-components";
interface Props {}
const BackgroundImageLayer = styled(animated.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
  @media ${devices.tablet} {
    display: none;
  }
`;
const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: number, y: number) => `translate(${x / 20}px,${y / 20}px)`;
const trans2 = (x: number, y: number) => `translate(${x / 15}px,${y / 15}px)`;
const trans3 = (x: number, y: number) => `translate(${x / 10}px,${y / 10}px)`;

const Background = ({}: Props) => {
  const resumeContext = useContext(ResumeContext);
  const { x, y } = resumeContext.mousePosition;
  const animationProps = useSpring({
    xy: calc(x, y),
    config: { mass: 10, tension: 550, friction: 240 },
  });
  return (
    <Fragment>
      <BackgroundImageLayer
        style={{
          //@ts-ignore
          transform: animationProps.xy.interpolate(trans1),
          backgroundImage: `url(${backgroundDarkDoodleFixed})`,
        }}
      />
      <BackgroundImageLayer
        style={{
          //@ts-ignore
          transform: animationProps.xy.interpolate(trans2),
          backgroundImage: `url(${backgroundDarkDoodleSecond})`,
        }}
      />
      <BackgroundImageLayer
        style={{
          //@ts-ignore
          transform: animationProps.xy.interpolate(trans3),
          backgroundImage: `url(${backgroundDarkDoodleFirst})`,
        }}
      />
    </Fragment>
  );
};

export default memo(Background);
