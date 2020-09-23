import React, { useState } from "react";
import Background from "./components/UI/Background/Background";
import MainContainer from "./containers/MainContainer";

function App() {
  const [backgroundPositionX, setBackgroundPositionX] = useState(0);
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);
  const handleMouseMove = ({
    clientX: x,
    clientY: y,
  }: React.MouseEvent): void => {
    setBackgroundPositionX(x);
    setBackgroundPositionY(y);
  };
  return (
    <div data-test="app">
      <Background
        backgroundPositionX={backgroundPositionX}
        backgroundPositionY={backgroundPositionY}
      />
      <MainContainer handleMouseMove={handleMouseMove} />
    </div>
  );
}

export default App;
