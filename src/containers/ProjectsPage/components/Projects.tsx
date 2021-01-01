import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { silver, white, blue, grey } from "../../../constants/colors";
import TagsSection from "../../../components/TagsSection/TagsSection";
import ResumeContext from "../../../context/resume.context";
import { ProjectType } from "../../../types";
import { useTransition, animated } from "react-spring";
import * as easings from "d3-ease";
interface Props {
  projectsData: ProjectType[];
}
interface ProjectImageProps {
  image: string;
}
const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-around;
  overflow: scroll;
  position: relative;
  padding-top: 20px;
`;
const ProjectContainer = styled(animated.div)`
  width: 300px;
  border: 2px solid ${grey};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 9px 10px 28px -6px rgba(0, 0, 0, 0.75);
  //&:hover{
  //  transform: translateY(-10px);
  //  transition:all .2s ease-in-out;
  //  box-shadow: 9px 10px 28px -6px rgba(0, 0, 0, 0.75);
  //
  //}
`;
const ProjectImage = styled.div<ProjectImageProps>`
  background-image: url(${({ image }) => image});
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  height: 150px;
  background-position: center;
`;
const ProjectTitle = styled.p`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 400;
  color: ${white};
`;
const ProjectCompanyAndDate = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .company {
    color: ${blue};
  }
  .year {
    color: ${silver};
  }
`;
const ProjectDescription = styled.p`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${silver};
`;
const TagsContainer = styled.div`
  padding: 5px 10px;
`;

export default function Projects({ projectsData }: Props): ReactElement {
  const resumeContext = useContext(ResumeContext);
  const { projectDetails, tracerNotification } = resumeContext;
  const { changeSelectedProjectDetails } = projectDetails;
  const { toggleTracerNotification } = tracerNotification;
  const renderProjects = () =>
    projectsData.map((project) => (
      <ProjectContainer
        onClick={() => {
          changeSelectedProjectDetails(project.id);
        }}
      >
        <ProjectImage
          image={project.mainImage}
          onMouseEnter={() => {
            toggleTracerNotification(true, "Click me to see more details");
          }}
          onMouseLeave={() => {
            toggleTracerNotification(false, "");
          }}
        />
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectCompanyAndDate>
          <p className="company">{project.company}</p>
          <p className="date">{project.year}</p>
        </ProjectCompanyAndDate>
        <ProjectDescription>{project.summary}</ProjectDescription>
        <TagsContainer>
          <TagsSection tags={project.tags} />
        </TagsContainer>
      </ProjectContainer>
    ));
  return <ProjectsContainer>{renderProjects()}</ProjectsContainer>;
}
