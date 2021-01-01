import React, { ReactElement, useState } from "react";
import { PageContainer } from "../../components/UI/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import ProjectsFilters from "./components/ProjectsFilters";
import Projects from "./components/Projects";
import { projectsData } from "../../constants/data";
import { ProjectType } from "../../types";

interface Props {}

const ProjectsPage = (): ReactElement => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjectsData, setFilteredProjectsData] = useState<
    ProjectType[]
  >(projectsData);

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
