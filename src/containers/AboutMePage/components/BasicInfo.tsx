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
        I am a frontend developer, passionate about learning and implementing
        cutting-edge technologies, with 7 years of professional experience
        working using modern web technologies like React and ExpressJS. Always
        looking to provide my employers with highperformance and attractive web
        applications.
      </AboutMeText>
      <div>
        <InfoField>
          <p className="blue-text">Date of Birth:</p>
          <p>09/01/1988 (33 Years old)</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Nationality:</p>
          <p>Syrian</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Residence: </p>
          <p>Tarabya, Istanbul, Turkey</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Experience: </p>
          <p>7 Years</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Languages:</p>
          <p>English (Fluent), Turkish (Intermediate), Arabic(Mother tongue)</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Marital Status:</p>
          <p>Single</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Phone Number: </p>
          <p>
            <a href="tel:00905070990448">+90 507 099 0448</a>
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
