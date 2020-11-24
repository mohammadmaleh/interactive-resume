import React, { ReactElement } from "react";
import styled from "styled-components";
import { silver, white, blue } from "../../../constants/colors";
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
  reactNativeTag,
} from "../../../constants/projectsTags";
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
const ProjectsTags = [
  "All",
  reactJsTag,
  jQueryTag,
  HtmlCssTag,
  angularJsTag,
  es6Tag,
  webPackTag,
  typeScriptTag,
  reduxJsTag,
  designTag,
  reactNativeTag,
];
export default function ProjectsFilters({
  selectProjectTag,
  selectedTag,
}: Props): ReactElement {
  const renderProjectsTags = () =>
    ProjectsTags.map((tag) => (
      <ProjectTag key={tag} onClick={() => selectProjectTag(tag)}>
        <p className={`${selectedTag === tag ? "selected" : ""}`}>{tag}</p>
      </ProjectTag>
    ));
  return <Container>{renderProjectsTags()}</Container>;
}
