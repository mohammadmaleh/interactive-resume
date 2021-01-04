import React, { ReactElement } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import { ProjectType } from "../../../types";
import { silver, blue, red, green } from "../../../constants/colors";
import Title from "../../../components/UI/Title/Title";
import TagsSection from "../../../components/TagsSection/TagsSection";
import devices from "../../../constants/breakpoints";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { PermMedia } from "@styled-icons/material-outlined/PermMedia";
import { LinkAlt } from "@styled-icons/boxicons-regular/LinkAlt";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";
interface Props {
  selectedProjectDetails: ProjectType;
}
const GithubIcon = styled(Github)`
  height: 30px;
  width: 30px;
  color: ${blue};
`;
const LinkIcon = styled(LinkAlt)`
  height: 30px;
  width: 30px;
  color: ${blue};
`;
const MediaIcon = styled(PermMedia)`
  height: 30px;
  width: 30px;
  color: ${blue};
`;
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
const BodyText = styled.p`
  font-size: 14px;
  color: ${silver};
  margin-bottom: 20px;
  white-space: pre-line;
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
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    margin-right: 20px;
    margin-bottom: 30px;
  }
`;
export default function Body({ selectedProjectDetails }: Props): ReactElement {
  const renderLinks = () => {
    const { links } = selectedProjectDetails;
    return (
      <LinksContainer>
        {links.github !== "" ? (
          <a href={links.github} target="_blank">
            <GithubIcon />
          </a>
        ) : (
          ""
        )}
        {links.link !== "" ? (
          <a href={links.link} target="_blank">
            <LinkIcon />
          </a>
        ) : (
          ""
        )}
        {links.screenshots !== "" ? (
          <a href={links.screenshots} target="_blank">
            <MediaIcon />
          </a>
        ) : (
          ""
        )}
      </LinksContainer>
    );
  };
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
        <Title>Links:</Title>
        {renderLinks()}
      </SectionContainer>
      <SectionContainer>
        <Title>Description:</Title>
        <BodyText>{selectedProjectDetails.description}</BodyText>
      </SectionContainer>
    </BodyContainer>
  );
}
