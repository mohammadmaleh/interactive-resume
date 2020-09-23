import React, { ReactElement } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import backgroundImage from "../../../assets/background.jpg";
import * as easings from "d3-ease";

interface InteractiveBackgroundProps {
  backgroundPositionX: number;
  backgroundPositionY: number;
}

const InteractiveBackground = styled(animated.div)`
  background: url("${backgroundImage}") no-repeat;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  background-size: calc(100% + 70px);
`;
const calculateXYS = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1.1,
];
const backgroundTransition = (x: number, y: number, s: number) =>
  `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export default function Background({
  backgroundPositionX,
  backgroundPositionY,
}: InteractiveBackgroundProps): ReactElement {
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
    xys: calculateXYS(backgroundPositionX, backgroundPositionY),
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
