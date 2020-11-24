// @ts-nocheck
import React, { useState } from "react";
import { SectionContainer } from "../../../components/UI/Layout/Layout";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { grey, blue, lightBlack } from "../../../constants/colors";
import Picture from "../../../assets/profile-picture.png";
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight";
import { useTrail, animated } from "react-spring";
import * as easings from "d3-ease";
interface Props {}

const testimonialsData = [
  {
    id: 0,
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit officia aspernatur, veniam dolore cumque nihil? Ab cupiditate expedita quos vel officia hic praesentium voluptatum, perspiciatis   harum et omnis iure.",
    name: "mohammad maleh",
    position: "senior frontend developer",
    picture: Picture,
  },
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit officia aspernatur, veniam dolore cumque nihil? Ab cupiditate expedita quos vel officia hic praesentium voluptatum, perspiciatis   harum et omnis iure.",
    name: "mohammad maleh",
    position: "senior frontend developer",
    picture: Picture,
  },
  {
    id: 2,

    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit officia aspernatur, veniam dolore cumque nihil? Ab cupiditate expedita quos vel officia hic praesentium voluptatum, perspiciatis   harum et omnis iure.",
    name: "mohammad maleh",
    position: "senior frontend developer",
    picture: Picture,
  },
  {
    id: 3,

    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit officia aspernatur, veniam dolore cumque nihil? Ab cupiditate expedita quos vel officia hic praesentium voluptatum, perspiciatis   harum et omnis iure.",
    name: "mohammad maleh",
    position: "senior frontend developer",
    picture: Picture,
  },
  {
    id: 4,

    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sit officia aspernatur, veniam dolore cumque nihil? Ab cupiditate expedita quos vel officia hic praesentium voluptatum, perspiciatis   harum et omnis iure.",
    name: "mohammad maleh",
    position: "senior frontend developer",
    picture: Picture,
  },
];
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
  height: 330px;
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

export default function Testimonials({}: Props): ReactElement {
  const [counter, setCounter] = useState(0);
  const [trail, set] = useTrail(testimonialsData.length, () => ({
    x: 0,
    zIndex: 1,
    config: {
      mass: 2,
      tension: 100,
      friction: 20,
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
      <div>
        <button
          onClick={() => {
            let incrementNumber =
              counter === 0 ? testimonialsData.length - 1 : counter - 1;
            console.log(counter, incrementNumber);
            setCounter(incrementNumber);
            set({ x: counter * 400 });
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            let incrementNumber =
              counter === testimonialsData.length - 1 ? 0 : counter + 1;
            setCounter(incrementNumber);
            set({ x: counter * 400 });
          }}
        >
          next
        </button>
      </div>
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
                    {testimonialsData[index].id}

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

// export default function Testimonials({}: Props): JSX.Element {
//   const items = [{ name: 1 }, { name: 2 }, { name: 3 }];

//   return (
//     <TestimonialsContainer
//     // style={{ width: "100%", background: "red", overflow: "auto" }}
//     >
//       <button
//         onClick={() => {
//           set({ x: 1000 });
//         }}
//       >
//         next
//       </button>
//     </TestimonialsContainer>
//   );
// }
