import React, { ReactElement } from "react";
import styled from "styled-components";
import devices from "../../../constants/breakpoints";
import {
  PageContainer,
  SectionContainer,
} from "../../../components/UI/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
interface Props {}

const InfoField = styled.div`
  display: flex;
  margin: 5px 0;
  flex-direction: row;
  font-size: 14px;
  .blue-text {
    font-size: 16px;
    margin-right: 10px;
    font-weight: bold;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;
const AboutMeText = styled.p`
  font-size: 14px;
`;

export default function BasicInfo({}: Props): ReactElement {
  return (
    <SectionContainer>
      <AboutMeText>
        Frontend Engineer with 10+ years of experience architecting React/TypeScript applications. 
        At CELUS, I helped reduce codebase complexity by 60%, established the company's foundational 
        design system, and have a proven track record of building scalable solutions across fintech 
        and hardware engineering domains, with expertise in performance optimization and AI-driven 
        feature integration.
      </AboutMeText>
      <div>
        <InfoField>
          <p className="blue-text">Location:</p>
          <p>Munich (central), Bavaria, Germany</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Citizenship:</p>
          <p>Syrian</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Languages:</p>
          <p>English (fluent), German (A1)</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Work Authorization:</p>
          <p>EU Blue Card holder (renewable), not tied to a single employer, and eligible to change employers in Germany</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Phone Number: </p>
          <p>
            <a href="tel:+4915560718240">+49 155 60718240</a>
          </p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Email:</p>
          <p>
            <a href="mailto:mohammad.maleh@gmail.com">
              mohammad.maleh@gmail.com
            </a>
          </p>
        </InfoField>
      </div>
    </SectionContainer>
  );
}
