import React, { ReactElement } from "react";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo";
import { Phone } from "@styled-icons/bootstrap/Phone";
import { DesignServices } from "@styled-icons/material-outlined/DesignServices";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { blue } from "../../../constants/colors";
interface Props {}

const BlueReactLogo = styled(ReactLogo)`
  color: ${blue};
  width: 40px;
`;
const BluePhone = styled(Phone)`
  color: ${blue};
  width: 40px;
`;
const BlueDesign = styled(DesignServices)`
  color: ${blue};
  width: 40px;
`;
const BlueNode = styled(Nodejs)`
  color: ${blue};
  width: 40px;
`;
const DescriptionTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;
const WhatIDoDescription = styled.p`
  font-size: 14px;
`;
export default function WhatIDo({}: Props): ReactElement {
  return (
    <SectionContainer>
      <Title>What i do</Title>
      <span />
      <div>
        <BlueReactLogo />
        <DescriptionTitle>FrontEnd Development</DescriptionTitle>
        <WhatIDoDescription>
          My main profession and passion is to develop cutting edge technology
          frontend projects. <br /> I'm always looking forward to learn new
          technologies and trends
        </WhatIDoDescription>
      </div>
      <div>
        <BluePhone />

        <DescriptionTitle>Mobile Apps Development</DescriptionTitle>
        <WhatIDoDescription>
          I have been developing mobile apps recently, using React Native,I
          developed a very successful android app with over 1M downloads, and
          making over 100k $ a month. <br />
          and currently I'm developing a new app related to Instagram.
        </WhatIDoDescription>
      </div>
      <div>
        <BlueDesign />

        <DescriptionTitle>Designing</DescriptionTitle>
        <WhatIDoDescription>
          I'm not a professional designer, but If there is no design is
          available, I can come up with my own attractive design.
        </WhatIDoDescription>
      </div>
      <div>
        <BlueNode />

        <DescriptionTitle>Backend Development</DescriptionTitle>
        <WhatIDoDescription>
          I'm able to develop in the backend using NodeJs and ExpressJs, but I
          have little professional experience
        </WhatIDoDescription>
      </div>
    </SectionContainer>
  );
}
