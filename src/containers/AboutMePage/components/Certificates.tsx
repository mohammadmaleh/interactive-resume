import React, { ReactElement } from "react";
import styled from "styled-components";

import Title from "../../../components/UI/Title/Title";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
import { silver, grey, white } from "../../../constants/colors";
interface Props {}
const CertificatesContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  padding: 40px 0;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(7, 10fr);
`;

const CertificateContainer = styled.div`
  width: 100%;
  border: 1px solid ${silver};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;
  border-radius: 8px;
  height: 130px;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 130px;
  background-color: ${grey};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
const TextContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  .title {
    font-size: 16px;
    font-weight: 400;
    color: ${white};
    text-transform: capitalize;
  }
  .date {
    font-size: 14px;
    color: ${silver};
  }
`;
export default function Certificates({}: Props): ReactElement {
  return (
    <SectionContainer>
      <Title>Certificates</Title>
      <span />
      <CertificateContainer>
        <ImageContainer />
        <TextContainer>
          <p className="title">computer engineering</p>
          <p className="date">2005 ~ 2010</p>
        </TextContainer>
      </CertificateContainer>
      <CertificateContainer>
        <ImageContainer />
        <TextContainer>
          <p className="title">computer engineering</p>
          <p className="date">2005 ~ 2010</p>
        </TextContainer>
      </CertificateContainer>
    </SectionContainer>
  );
}
