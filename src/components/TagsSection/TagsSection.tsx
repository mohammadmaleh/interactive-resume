import React, { ReactElement } from "react";
import styled from "styled-components";
import Title from "../UI/Title/Title";
import { blue, white, grey, darkBlack } from "../../constants/colors";
interface Props {
  tags: string[];
  title?: string;
}
const TagsSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const Tag = styled.div`
  background-color: ${blue};
  padding: 10px;
  color: ${white};
  display: inline-block;
  margin: 10px 10px 10px 0;
  width: content-width;
  font-size: 14px;
  border-radius: 4px;
  font-weight: bold;
  text-shadow: 0.01em 0 ${grey}, 0 0.01em ${grey}, -0.01em 0 ${grey},
    0 -0.01em ${grey}, -0.01em -0.01em ${grey}, -0.01em 0.01em ${grey},
    0.01em -0.01em ${grey}, 0.01em 0.01em ${grey};
`;

export default function TagsSection({ title, tags }: Props): ReactElement {
  const renderTags = () => tags.map((tag) => <Tag key={tag}>{tag}</Tag>);
  return (
    <TagsSectionContainer>
      {title ? <Title>{title}</Title> : ""}
      <TagsContainer>{renderTags()}</TagsContainer>
    </TagsSectionContainer>
  );
}
