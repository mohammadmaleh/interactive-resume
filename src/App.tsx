import React, { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle";
import Background from "./components/Background/Background";

function App() {
  return (
    <div data-test="app">
      <GlobalStyle />
      <Background />
    </div>
  );
}

export default App;
