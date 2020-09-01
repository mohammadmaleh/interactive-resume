import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.jpg";
interface Props {}
interface InteractiveBackgroundProps {
  backgroundPositionX: number | string;
  backgroundPositionY: number | string;
}
const InteractiveBackground = styled.div<InteractiveBackgroundProps>`
  background: url("${backgroundImage}") no-repeat;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
  transition: all 0.1s;
  transition-timing-function: ease-in;
  height: 100%;
  background-size: calc(100% + 70px);
  background-position: ${(props) => props.backgroundPositionX}px
    ${(props) => props.backgroundPositionY}px;
`;
export default function Background({}: Props): ReactElement {
  const [backgroundPositionX, setBackgroundPositionX] = useState(0);
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);
  useEffect(() => {}, []);
  const handleMouseMove = (cb: React.MouseEvent): void => {
    var movementStrength = 30;
    var height = movementStrength / window.innerHeight;
    var width = movementStrength / window.innerWidth;
    setBackgroundPositionX(width * cb.pageX * -1 - 25);
    setBackgroundPositionY(height * cb.pageY * -1 - 25);
  };
  return (
    <div className="App">
      <InteractiveBackground
        onMouseMove={handleMouseMove}
        backgroundPositionX={backgroundPositionX}
        backgroundPositionY={backgroundPositionY}
      />
    </div>
  );
}
