import React, { ReactElement, useContext } from "react";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";
import { silver } from "../../../constants/colors";
import { ProjectType } from "../../../types";
interface Props {
  selectedProjectDetails: ProjectType;
  changeSelectedProjectDetails: (id?: number | undefined) => void;
}
const CloseIcon = styled(Close)`
  height: 50px;
  width: 50px;
  color: ${silver};
  cursor: pointer;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 10px;
  color: ${silver};
`;
export default function ProjectDetails({
  selectedProjectDetails,
  changeSelectedProjectDetails,
}: Props): ReactElement {
  return (
    <HeaderContainer>
      <Title mainTitle>{selectedProjectDetails.name}</Title>
      <CloseIcon
        onClick={() => {
          changeSelectedProjectDetails();
        }}
      />
    </HeaderContainer>
  );
}
