import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import profilePicture from "../../assets/profile-picture.png";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "@styled-icons/entypo/Mail";
import Button from "../UI/Button/Button";
import { white } from "../../constants/colors";
import ResumeContext from "../../context/resume.context";
import devices from "../../constants/breakpoints";
interface Props {}
interface IconContainerProps {
  notificationText: string;
}
const IconContainerDiv = styled.div`
  cursor: pointer;
`;
const Container = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 330px;
  overflow: auto;
  height: 100%;
  @media ${devices.tablet} {
    display: none;
  }
`;
const ProfileImage = styled.img`
  border: 1px solid ${white};
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
  color: ${white};
  height: 30px;
`;
const LinkedInIcon = styled(LinkedinSquare)`
  color: ${white};
  height: 30px;
`;
const MailIcon = styled(Mail)`
  color: ${white};
  height: 30px;
`;
function IconContainer(
  props: React.PropsWithChildren<IconContainerProps>
): ReactElement {
  const resumeContext = useContext(ResumeContext);
  const { toggleTracerNotification } = resumeContext.tracerNotification;
  const { notificationText } = props;
  return (
    <IconContainerDiv
      onMouseEnter={() => {
        toggleTracerNotification(true, notificationText);
      }}
      onMouseLeave={() => {
        toggleTracerNotification(false, notificationText);
      }}
    >
      {props.children}
    </IconContainerDiv>
  );
}
export default function BasicInfo({}: Props): ReactElement {
  return (
    <Container data-test="basic-info">
      <ProfileImage src={profilePicture} />
      <Name>MOHAMMAD AL MALEH</Name>
      <JobDescription>Senior Frontend Developer</JobDescription>
      <IconsContainer>
        <IconContainer notificationText={"Checkout my Github Account"}>
          <GithubIcon />
        </IconContainer>
        <IconContainer notificationText={"Message me on LinkedIn"}>
          <LinkedInIcon />
        </IconContainer>
        <IconContainer notificationText={"Send me an email"}>
          <MailIcon />
        </IconContainer>
      </IconsContainer>
      {/*<Button>Download Resume!</Button>*/}
    </Container>
  );
}
