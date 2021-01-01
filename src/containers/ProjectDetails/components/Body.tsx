import React, { ReactElement } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import { ProjectType } from "../../../types";
import { silver, blue, red, green } from "../../../constants/colors";
import Title from "../../../components/UI/Title/Title";
import TagsSection from "../../../components/TagsSection/TagsSection";
import devices from "../../../constants/breakpoints";
interface Props {
  selectedProjectDetails: ProjectType;
}
const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 10px;
`;
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const BodyText = styled.div`
  font-size: 14px;
  color: ${silver};
  margin-bottom: 20px;
`;
const TwoSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 20px;
  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  label {
    font-size: 16px;
    color: ${blue};
    font-weight: bold;
    text-transform: capitalize;
  }
  p {
    font-size: 14px;
    color: ${silver};
    margin-left: 5px;
    &.online {
      color: ${green};
      text-transform: capitalize;
      position: relative;
      margin-left: 20px;
      font-weight: bold;
      &:before {
        content: "";
        left: -15px;
        top: 3px;
        position: absolute;
        border: 5px solid ${green};
        width: 0;
        height: 0;
        border-radius: 50px;
      }
    }
    &.offline {
      color: ${red};
      text-transform: capitalize;
      position: relative;
      margin-left: 20px;
      font-weight: bold;
      &:before {
        content: "";
        left: -15px;
        top: 3px;
        position: absolute;
        border: 5px solid ${red};
        width: 0;
        height: 0;
        border-radius: 50px;
      }
    }
    @media ${devices.mobileL} {
      margin-bottom: 20px;
    }
  }
`;

const Online = () => <p className="online">Online</p>;
const Offline = () => <p className="offline">Offline</p>;
export default function Body({ selectedProjectDetails }: Props): ReactElement {
  return (
    <BodyContainer>
      <TwoSectionContainer>
        <SectionContainer>
          <Title>Infos:</Title>
          <InfoContainer>
            <label htmlFor="">name:</label>
            <p>{selectedProjectDetails.name}</p>
          </InfoContainer>
          <InfoContainer>
            <label htmlFor="">status:</label>
            <p className={selectedProjectDetails.status}>
              {selectedProjectDetails.status}
            </p>
          </InfoContainer>
          <InfoContainer>
            <label htmlFor="">year:</label>
            <p>{selectedProjectDetails.year}</p>
          </InfoContainer>
          <InfoContainer>
            <label htmlFor="">company:</label>
            <p>{selectedProjectDetails.company}</p>
          </InfoContainer>
        </SectionContainer>
        <SectionContainer>
          <Title>Technologies:</Title>
          <BodyText>
            <TagsSection tags={selectedProjectDetails.tags} />
          </BodyText>
        </SectionContainer>
      </TwoSectionContainer>
      <Slider screenShots={selectedProjectDetails.screenshots} />

      <SectionContainer>
        <Title>Description:</Title>
        <BodyText>{selectedProjectDetails.description}</BodyText>
      </SectionContainer>
    </BodyContainer>
  );
}
