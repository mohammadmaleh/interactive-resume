import React from "react";
export default React.createContext({
  mousePosition: {
    x: 0,
    y: 0,
    handleMouseMove: ({ clientX, clientY }: React.MouseEvent): void => {},
  },
  tracerNotification: {
    text: "",
    show: false,
    toggleTracerNotification: (
      show: boolean,
      text: string | undefined = ""
    ) => {},
  },
});
