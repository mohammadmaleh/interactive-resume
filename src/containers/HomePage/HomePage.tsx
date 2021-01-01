import React, { ReactElement } from "react";
import { PageContainer } from "../../components/UI/Layout/Layout";
import styled from "styled-components";
import { blue } from "../../constants/colors";
import devices from "../../constants/breakpoints";
interface Props {}
const Name = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: -1.89px;
  font-weight: bold;
  @media ${devices.mobileL} {
    text-align: center;
  }
`;
const Profession = styled.h2`
  font-size: 20px;
  margin-top: 10px;
  color: ${blue};
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default function HomePage({}: Props): ReactElement {
  return (
    <PageContainer>
      <Container>
        <div></div>
        <Name>Mohamad Al Maleh</Name>
        <Profession>Senior Frontend Developer</Profession>
      </Container>
    </PageContainer>
  );
}
