import img from "./assets/profile-picture.png";
import kambo1 from "./assets/projects/kambo/kambo1.png";
import kambo2 from "./assets/projects/kambo/kambo2.png";
import kambo3 from "./assets/projects/kambo/kambo3.png";
import kambo4 from "./assets/projects/kambo/kambo4.png";
import kambo5 from "./assets/projects/kambo/kambo5.png";
import kambo6 from "./assets/projects/kambo/kambo6.png";
import kambo7 from "./assets/projects/kambo/kambo7.png";
import kambo8 from "./assets/projects/kambo/kambo8.png";
import kambo9 from "./assets/projects/kambo/kambo9.png";
import kambo10 from "./assets/projects/kambo/kambo10.png";
import kambo11 from "./assets/projects/kambo/kambo11.png";
import kambo12 from "./assets/projects/kambo/kambo12.png";
import kambo13 from "./assets/projects/kambo/kambo13.png";
import kambo14 from "./assets/projects/kambo/kambo14.png";
import { projectTags } from "./constants/data";

export interface ProjectType {
  mainImage: string;
  id: number;
  tags: string[];
  active: boolean;
  name: string;
  year: string;
  company: string;
  description: string;
  screenshots: string[];
  links: {
    github?: string;
    screenshots?: string;
    link?: string;
  };
  status: string;
  summary: string;
}

export interface AppStateType {
  mousePosition: {
    x: number;
    y: number;
    handleMouseMove: ({ clientX, clientY }: React.MouseEvent) => void;
  };
  tracerNotification: {
    text: string;
    show: boolean;
    toggleTracerNotification: (show: boolean, text: string | undefined) => void;
  };
  projectDetails: {
    changeSelectedProjectDetails: (id?: number) => void;
    selectedProjectDetails?: ProjectType;
  };
}
