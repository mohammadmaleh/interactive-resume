import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg";
interface InteractiveBackgroundProps {
  backgroundPositionX: number | string;
  backgroundPositionY: number | string;
}
const InteractiveBackground = styled.div<InteractiveBackgroundProps>`
  background: url("${backgroundImage}") no-repeat;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
  transition: all 0.3s;
  transition-timing-function: ease-in-out;
  height: 100%;
  background-size: calc(100% + 70px);
  background-position: ${(props) => props.backgroundPositionX}px
    ${(props) => props.backgroundPositionY}px;
`;
export default function Background({
  backgroundPositionX,
  backgroundPositionY,
}: InteractiveBackgroundProps): ReactElement {
  return (
    <InteractiveBackground
      data-test="interactive-background"
      backgroundPositionX={backgroundPositionX}
      backgroundPositionY={backgroundPositionY}
    />
  );
}
