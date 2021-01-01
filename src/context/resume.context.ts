import React from "react";
import { AppStateType } from "../types";
export default React.createContext<AppStateType>({
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
  projectDetails: {
    changeSelectedProjectDetails: (id?: number): void => {},
  },
});
