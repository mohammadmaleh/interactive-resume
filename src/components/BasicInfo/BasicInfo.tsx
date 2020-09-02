import React, { ReactElement } from "react";
import styled from "styled-components";
import profilePicture from "../../assets/profile-picture.png";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "@styled-icons/entypo/Mail";

interface Props {}
const Container = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 330px;
  overflow: auto;
  height: 100%;
`;
const ProfileImage = styled.img`
  border: 1px solid white;
  height: 150px;
  width: 150px;
  border-radius: 170px;
`;
const Name = styled.p`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1.4px;
  margin-top: 30px;
`;
const JobDescription = styled.p`
  font-size: 1.6rem;
  margin-top: 10px;
`;
const IconsContainer = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const GithubIcon = styled(Github)`
  color: white;
  height: 30px;
`;
const LinkedInIcon = styled(LinkedinSquare)`
  color: white;
  height: 30px;
`;
const MailIcon = styled(Mail)`
  color: white;
  height: 30px;
`;
const DownloadButton = styled.button`
  background-color: transparent;
  color: #fff;
  border-color: #fff;
  box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.78);
  padding: 10px 20px;
  border-radius: 40px;
  transition: all 0.6s ease-in-out;
  margin-top: 30px;
  &:hover {
    color: #04b4e0;
    background-color: #fff;
    border-color: #fff;
    cursor: pointer;
  }
`;
export default function BasicInfo({}: Props): ReactElement {
  return (
    <Container data-test="basic-info">
      <ProfileImage src={profilePicture} />
      <Name>MOHAMMAD AL MALEH</Name>
      <JobDescription>Senior Frontend Developer</JobDescription>

      <IconsContainer>
        <GithubIcon />
        <LinkedInIcon />
        <MailIcon />
      </IconsContainer>
      <DownloadButton>Download Resume!</DownloadButton>
    </Container>
  );
}
