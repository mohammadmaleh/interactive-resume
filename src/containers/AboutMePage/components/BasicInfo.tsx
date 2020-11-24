import React, { ReactElement } from "react";
import styled from "styled-components";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
interface Props {}

const InfoField = styled.div`
  display: flex;
  margin: 5px 0;
  flex-direction: row;
  .blue-text {
    margin-right: 10px;
    font-weight: bold;
  }
`;

export default function BasicInfo({}: Props): ReactElement {
  return (
    <SectionContainer>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        consequatur, culpa, saepe quas explicabo nulla voluptatum reiciendis
        velit ipsum minima enim! Earum eveniet fugiat et, repudiandae esse ad
        neque necessitatibus.
      </p>
      <div>
        <InfoField>
          <p className="blue-text">Age</p>
          <p>32</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Residence</p>
          <p>Turkey / Istanbul</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">E-mail</p>
          <p>mohammad.Maleh@gmail.com</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Phone</p>
          <p>+90 507 099 0448</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Age</p>
          <p>32</p>
        </InfoField>
        <InfoField>
          <p className="blue-text">Age</p>
          <p>32</p>
        </InfoField>
      </div>
    </SectionContainer>
  );
}
