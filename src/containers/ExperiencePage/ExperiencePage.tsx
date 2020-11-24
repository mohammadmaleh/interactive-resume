import React, { ReactElement } from "react";
import {
  PageContainer,
  SectionContainer,
} from "../../components/UI/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import TagsSection from "../../components/TagsSection/TagsSection";
import ProfessionalCareer from "./components/ProfessionalCareer";
import Skills from "./components/Skills";

interface Props {}
const knowledgeData = [
  "React",
  "React",
  "React",
  "React",
  "React",
  "React",
  "React",
  "React",
  "React",
  "React",
  "React",
];
export default function ExperiencePage({}: Props): ReactElement {
  return (
    <PageContainer>
      <Title mainTitle>Experience</Title>

      <SectionContainer>
        <ProfessionalCareer />
        <div>
          <Skills />
          <TagsSection title="Knowledge" tags={knowledgeData} />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
