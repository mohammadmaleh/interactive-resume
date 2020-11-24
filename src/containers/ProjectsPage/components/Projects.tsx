import React, { ReactElement } from "react";
import styled from "styled-components";
import { silver, white, blue, grey } from "../../../constants/colors";
import TagsSection from "../../../components/TagsSection/TagsSection";

interface Props {
  projectsData: {
    image: string;
    name: string;
    company: string;
    year: string;
    description: string;
    tags: string[];
  }[];
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
`;
const ProjectContainer = styled.div`
  width: 300px;
  border: 2px solid ${grey};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
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
  const renderProjects = () =>
    projectsData.map((project) => (
      <ProjectContainer>
        <ProjectImage image={project.image} />
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectCompanyAndDate>
          <p className="company">{project.company}</p>
          <p className="date">{project.year}</p>
        </ProjectCompanyAndDate>
        <ProjectDescription>{project.description}</ProjectDescription>
        <TagsContainer>
          <TagsSection tags={project.tags} />
        </TagsContainer>
      </ProjectContainer>
    ));
  return <ProjectsContainer>{renderProjects()}</ProjectsContainer>;
}
