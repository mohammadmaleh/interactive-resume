import React, { ReactElement } from "react";
import {
  PageContainer,
  SectionContainer,
} from "../../components/UI/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import BasicInfo from "./components/BasicInfo";
import WhatIDo from "./components/WhatIDo";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
interface Props {}

export default function AboutMePage({}: Props): ReactElement {
  return (
    <PageContainer>
      <Title mainTitle>about me</Title>

      <BasicInfo />
      <WhatIDo />
      <Testimonials />
      <Certificates />
    </PageContainer>
  );
}
