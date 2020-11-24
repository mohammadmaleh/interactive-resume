import React, { ReactElement } from "react";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
import { HomeAlt } from "@styled-icons/boxicons-regular/HomeAlt";
import { blue } from "../../../constants/colors";
interface Props {}
const BlueIcon = styled.div`
  svg {
    color: ${blue};
    width: 40px;
  }
`;
const DescriptionTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;
export default function WhatIDo({}: Props): ReactElement {
  return (
    <SectionContainer>
      <Title>What i do</Title>
      <span />
      <div>
        <BlueIcon>
          <HomeAlt />
        </BlueIcon>
        <DescriptionTitle>Title</DescriptionTitle>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae
          facilis quasi qui libero eligendi est, aperiam sint? Cumque odit animi
          ea iste quia, natus autem. Reprehenderit laboriosam nobis possimus?
        </p>
      </div>
      <div>
        <BlueIcon>
          <HomeAlt />
        </BlueIcon>
        <DescriptionTitle>Title</DescriptionTitle>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae
          facilis quasi qui libero eligendi est, aperiam sint? Cumque odit animi
          ea iste quia, natus autem. Reprehenderit laboriosam nobis possimus?
        </p>
      </div>
      <div>
        <BlueIcon>
          <HomeAlt />
        </BlueIcon>
        <DescriptionTitle>Title</DescriptionTitle>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae
          facilis quasi qui libero eligendi est, aperiam sint? Cumque odit animi
          ea iste quia, natus autem. Reprehenderit laboriosam nobis possimus?
        </p>
      </div>
      <div>
        <BlueIcon>
          <HomeAlt />
        </BlueIcon>
        <DescriptionTitle>Title</DescriptionTitle>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero beatae
          facilis quasi qui libero eligendi est, aperiam sint? Cumque odit animi
          ea iste quia, natus autem. Reprehenderit laboriosam nobis possimus?
        </p>
      </div>
    </SectionContainer>
  );
}
