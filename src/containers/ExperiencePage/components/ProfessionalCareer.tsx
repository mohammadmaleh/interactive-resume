import React, { ReactElement } from "react";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import {
  grey,
  white,
  silver,
  blue,
  lightBlack,
} from "../../../constants/colors";
interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfessionalCareerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const CompanyAndDuration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 140px;
  border-right: solid 2px ${grey};
  padding: 20px 20px 20px 0;

  .duration {
    color: ${silver};
    text-align: right;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 14px;
  }
  .company {
    color: ${silver};
    font-size: 12px;
  }
`;
const PositionAndDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 20px 0 20px;
  position: relative;
  .position {
    font-weight: 400;
    color: ${white};
    font-size: 18px;
    margin-bottom: 10px;
  }
  .description {
    color: ${silver};
    font-size: 16px;
  }
  &:before {
    content: "";
    position: absolute;
    border-radius: 10px;
    background-color: ${lightBlack};
    border: solid 3px ${blue};
    height: 6px;
    width: 6px;
    box-shadow: 0px 0px 5px 0px ${blue};
    left: -7px;
    top: 25px;
  }
`;
const professionalCareerData = [
  {
    duration: "2018 - 2020",
    companyName: "gkTech",
    position: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,laudantium atque cumque at dolorem soluta reiciendis officia quastempora molestias nam! Consequuntur earum blanditiis voluptatem qui porro perferendis corrupti modi. ",
  },
  {
    duration: "2018 - 2020",
    companyName: "gkTech",
    position: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,laudantium atque cumque at dolorem soluta reiciendis officia quastempora molestias nam! Consequuntur earum blanditiis voluptatem qui porro perferendis corrupti modi. ",
  },
  {
    duration: "2018 - 2020",
    companyName: "gkTech",
    position: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,laudantium atque cumque at dolorem soluta reiciendis officia quastempora molestias nam! Consequuntur earum blanditiis voluptatem qui porro perferendis corrupti modi. ",
  },
  {
    duration: "2018 - 2020",
    companyName: "gkTech",
    position: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,laudantium atque cumque at dolorem soluta reiciendis officia quastempora molestias nam! Consequuntur earum blanditiis voluptatem qui porro perferendis corrupti modi. ",
  },
  {
    duration: "2018 - 2020",
    companyName: "gkTech",
    position: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,laudantium atque cumque at dolorem soluta reiciendis officia quastempora molestias nam! Consequuntur earum blanditiis voluptatem qui porro perferendis corrupti modi. ",
  },
  {
    duration: "2018 - 2020",
    companyName: "gkTech",
    position: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,laudantium atque cumque at dolorem soluta reiciendis officia quastempora molestias nam! Consequuntur earum blanditiis voluptatem qui porro perferendis corrupti modi. ",
  },
];
export default function ProfessionalCareer({}: Props): ReactElement {
  const renderPositions = () =>
    professionalCareerData.map((career) => (
      <ProfessionalCareerContainer>
        <CompanyAndDuration>
          <p className="duration">{career.duration}</p>
          <p className="company">{career.companyName}</p>
        </CompanyAndDuration>
        <PositionAndDescription>
          <p className="position">{career.position}</p>
          <p className="description">{career.description}</p>
        </PositionAndDescription>
      </ProfessionalCareerContainer>
    ));
  return (
    <div>
      <Title>Professional Career</Title>
      <Container>{renderPositions()}</Container>
    </div>
  );
}
