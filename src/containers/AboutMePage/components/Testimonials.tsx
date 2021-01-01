// @ts-nocheck
import React, { useState } from "react";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { grey, blue, lightBlack, silver } from "../../../constants/colors";
import Picture from "../../../assets/profile-picture.png";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";
import { useTrail, animated } from "react-spring";
import * as easings from "d3-ease";
import { testimonialsData } from "../../../constants/data";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import devices from "../../../constants/breakpoints";
interface Props {}

const TestimonialsContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  overflow: scroll;
  padding: 40px 0;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(7, 10fr);
`;
const TestimonialContainer = styled.div`
  width: 380px;
  height: auto;
  background-color: ${lightBlack};
  border: 2px solid ${grey};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 20px;
  padding: 20px;
  @media ${devices.mobileL} {
    width: 330px;
  }
`;
const ImageContainer = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  position: absolute;

  top: -40px;
`;
const Quote = styled.p`
  font-size: 20px;
  margin-top: 40px;
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  font-size: 14px;
  .position {
    color: ${blue};
    text-transform: capitalized;
  }
`;
const BlueQuote = styled(QuoteAltRight)`
  font-size: 30px;
  color: ${blue};
  width: 40px;
  height: 40px;
`;
const NextButton = styled(ChevronRight)`
  hight: 60px;
  width: 60px;
  color: ${silver};
  cursor: pointer;
`;

const PrevButton = styled(ChevronLeft)`
  hight: 60px;
  width: 60px;
  color: ${silver};
  cursor: pointer;
`;
const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export default function Testimonials({}: Props): ReactElement {
  const [counter, setCounter] = useState(0);
  const [trail, set] = useTrail(testimonialsData.length, () => ({
    x: 0,
    zIndex: 1,
    config: {
      mass: 2,
      tension: 300,
      friction: 30,
      easing: easings.easeCubic,
    },
  }));
  const renderTestimonials: Function = () =>
    testimonialsData.map((testimonial) => (
      <>
        <TestimonialContainer>
          <ImageContainer src={testimonial.picture} />
          <Quote>{testimonial.quote}</Quote>
          <BottomContainer>
            <NameContainer>
              <p>{testimonial.name}</p>
              <p className="position">{testimonial.position}</p>
            </NameContainer>

            <BlueQuote />
          </BottomContainer>
        </TestimonialContainer>
      </>
    ));
  return (
    <SectionContainer>
      <Title>Testimonials</Title>
      <ControlsContainer>
        <PrevButton
          onClick={() => {
            let incrementNumber =
              counter === 0 ? testimonialsData.length - 1 : counter - 1;
            setCounter(incrementNumber);
            set({ x: counter * 400 });
          }}
        />

        <NextButton
          onClick={() => {
            let incrementNumber =
              counter === testimonialsData.length - 1 ? 0 : counter + 1;
            setCounter(incrementNumber);
            set({ x: counter * 400 });
          }}
        />
      </ControlsContainer>
      <TestimonialsContainer>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={testimonialsData[index].id}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(-${x}px,0,0)`),
            }}
          >
            <>
              <TestimonialContainer>
                <ImageContainer src={testimonialsData[index].picture} />
                <Quote>{testimonialsData[index].quote}</Quote>
                <BottomContainer>
                  <NameContainer>
                    <p>{testimonialsData[index].name}</p>
                    <p className="position">
                      {testimonialsData[index].position}
                    </p>
                  </NameContainer>

                  <BlueQuote />
                </BottomContainer>
              </TestimonialContainer>
            </>
          </animated.div>
        ))}
      </TestimonialsContainer>
    </SectionContainer>
  );
}
