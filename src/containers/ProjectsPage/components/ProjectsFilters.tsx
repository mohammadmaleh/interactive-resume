import React, { ReactElement } from "react";
import styled from "styled-components";
import { silver, white, blue } from "../../../constants/colors";
import { projectTags } from "../../../constants/data";
interface Props {
  selectProjectTag: Function;

  selectedTag: string;
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: auto;
`;
const ProjectTag = styled.div`
  margin: 5px 10px 5px 0;
  cursor: pointer;
  p {
    padding-bottom: 5px;
    color: ${silver};
    border-bottom: 1px solid transparent;
  }
  &:hover {
    p {
      color: ${white};
    }
  }
  .selected {
    color: ${white};
    font-weight: bold;
    border-bottom: 1px solid ${blue};
  }
`;
const projectsTagsArray = [
  "All",
  projectTags.reactJsTag,
  projectTags.reactNativeTag,

  projectTags.typeScriptTag,
  projectTags.designTag,

  projectTags.HtmlCssTag,
  projectTags.webPackTag,

  projectTags.angularJsTag,
  projectTags.scrumAgile,
  projectTags.ci,
  projectTags.aws,
  projectTags.unitTest,
  projectTags.express,
];
export default function ProjectsFilters({
  selectProjectTag,
  selectedTag,
}: Props): ReactElement {
  const renderProjectsTags = () =>
    projectsTagsArray.map((tag) => (
      <ProjectTag key={tag} onClick={() => selectProjectTag(tag)}>
        <p className={`${selectedTag === tag ? "selected" : ""}`}>{tag}</p>
      </ProjectTag>
    ));
  return <Container>{renderProjectsTags()}</Container>;
}
