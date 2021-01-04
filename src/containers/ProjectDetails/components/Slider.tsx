import React, { ReactElement } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import styled from "styled-components";
import devices from "../../../constants/breakpoints";
interface Props {
  screenShots: string[];
}

const SliderContainer = styled.div`
  width: 100%;
  height: 387px;
  position: relative;
  margin-bottom: 40px;
  @media ${devices.mobileL} {
    height: 300px;
  }
`;
const SliderImage = styled.img`
  height: 387px;
  @media ${devices.mobileL} {
    height: 300px;
  }
`;
export default function Slider({ screenShots }: Props): ReactElement {
  const renderSliderImages = () =>
    screenShots.map((screenShot) => (
      <div key={screenShot}>
        <SliderImage src={screenShot} alt="" />
      </div>
    ));
  return (
    <SliderContainer>
      <AwesomeSlider
        fillParent={true}
        animation="cubeAnimation"
        mobileTouch={true}
      >
        {renderSliderImages()}
      </AwesomeSlider>
    </SliderContainer>
  );
}
