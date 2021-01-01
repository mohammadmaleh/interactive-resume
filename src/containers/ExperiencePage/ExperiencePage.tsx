import React, { ReactElement } from "react";
import {
  PageContainer,
  SectionContainer,
} from "../../components/UI/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import TagsSection from "../../components/TagsSection/TagsSection";
import ProfessionalCareer from "./components/ProfessionalCareer";
import Skills from "./components/Skills";
import { knowledgeData } from "../../constants/data";

interface Props {}
export default function ExperiencePage({}: Props): ReactElement {
  return (
    <PageContainer>
      <Title mainTitle>Experience</Title>
      <SectionContainer>
        <ProfessionalCareer />
        <div>
          <Skills />
          <TagsSection
            title="Technologies I'm familiar with"
            tags={knowledgeData}
          />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}
