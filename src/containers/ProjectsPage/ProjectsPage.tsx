import React, { ReactElement, useState } from "react";
import { PageContainer } from "../../components/UI/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import ProjectsFilters from "./components/ProjectsFilters";
import Projects from "./components/Projects";
import img from "../../assets/profile-picture.png";
import {
  reactJsTag,
  jQueryTag,
  HtmlCssTag,
  angularJsTag,
  es6Tag,
  webPackTag,
  typeScriptTag,
  reduxJsTag,
  designTag,
  contextApiTag,
  reactNativeTag,
} from "../../constants/projectsTags";
interface Props {}
const projectsData = [
  {
    image: img,
    name: "Kambo",
    company: "GKTech",
    year: "2018",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus reiciendis illum nostrum! Quas ipsum consequuntur, est ea blanditiis aspernatur rerum dolor architecto veniam iusto quibusdam temporibus commodi, itaque cumque dicta!",
    tags: [reactJsTag, HtmlCssTag, es6Tag, webPackTag, reduxJsTag],
  },
  {
    image: img,
    name: "Inter Active Resume",
    company: "GKTech",
    year: "2018",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus reiciendis illum nostrum! Quas ipsum consequuntur, est ea blanditiis aspernatur rerum dolor architecto veniam iusto quibusdam temporibus commodi, itaque cumque dicta!",
    tags: [reactJsTag, contextApiTag, es6Tag, typeScriptTag, designTag],
  },
  {
    image: img,
    name: "Kambo",
    company: "GKTech",
    year: "2018",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus reiciendis illum nostrum! Quas ipsum consequuntur, est ea blanditiis aspernatur rerum dolor architecto veniam iusto quibusdam temporibus commodi, itaque cumque dicta!",
    tags: ["react", "html", "design", "angular", "css"],
  },
  {
    image: img,
    name: "Kambo",
    company: "GKTech",
    year: "2018",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus reiciendis illum nostrum! Quas ipsum consequuntur, est ea blanditiis aspernatur rerum dolor architecto veniam iusto quibusdam temporibus commodi, itaque cumque dicta!",
    tags: ["react", "html", "design", "angular", "css"],
  },
  {
    image: img,
    name: "Kambo",
    company: "GKTech",
    year: "2018",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus reiciendis illum nostrum! Quas ipsum consequuntur, est ea blanditiis aspernatur rerum dolor architecto veniam iusto quibusdam temporibus commodi, itaque cumque dicta!",
    tags: ["react", "html", "design", "angular", "css"],
  },
  {
    image: img,
    name: "Kambo",
    company: "GKTech",
    year: "2018",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus reiciendis illum nostrum! Quas ipsum consequuntur, est ea blanditiis aspernatur rerum dolor architecto veniam iusto quibusdam temporibus commodi, itaque cumque dicta!",
    tags: ["react", "html", "design", "angular", "css"],
  },
];

const ProjectsPage = (): ReactElement => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjectsData, setFilteredProjectsData] = useState(
    projectsData
  );
  const selectProjectTag = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "All") setFilteredProjectsData(projectsData);
    else {
      const filteredProjectsData = projectsData.filter((project) =>
        project.tags.includes(tag)
      );
      setFilteredProjectsData(filteredProjectsData);
    }
  };

  return (
    <PageContainer>
      <Title mainTitle>Projects</Title>
      <ProjectsFilters
        selectProjectTag={selectProjectTag}
        selectedTag={selectedTag}
      />
      <Projects projectsData={filteredProjectsData} />
    </PageContainer>
  );
};
export default ProjectsPage;
