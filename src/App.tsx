import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Background from "./components/UI/Background/Background";
import MainContainer from "./containers/MainContainer";
function App() {
  const [backgroundPositionX, setBackgroundPositionX] = useState(0);
  const [backgroundPositionY, setBackgroundPositionY] = useState(0);
  const handleMouseMove = (cb: React.MouseEvent): void => {
    var movementStrength = 30;
    var height = movementStrength / window.innerHeight;
    var width = movementStrength / window.innerWidth;
    setBackgroundPositionX(width * cb.pageX * -1 - 25);
    setBackgroundPositionY(height * cb.pageY * -1 - 25);
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
