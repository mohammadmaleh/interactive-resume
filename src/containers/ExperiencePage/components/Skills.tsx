import React, { ReactElement } from "react";
import Title from "../../../components/UI/Title/Title";
import styled from "styled-components";
import { white, silver, blue } from "../../../constants/colors";
interface Props {}
interface BarProps {
  percentage: number;
}
const SkillContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
`;
const SkillNameAndPercentage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
  .title {
    font-weight: 400;
    color: ${white};
    font-size: 16px;
  }
  .percent {
    color: ${silver};
    font-size: 14px;
  }
`;
const SkillBarContainer = styled.div`
  width: 100%;
  border: 1px solid ${blue};
  border-radius: 10px;
  padding: 2px;
`;
const Bar = styled.div<BarProps>`
  width: ${({ percentage }) => percentage}%;
  border: 2px solid ${blue};
  border-radius: 10px;
`;
const skillsData = [
  {
    name: "web developer",
    percentage: 90,
  },
  {
    name: "web developer",
    percentage: 90,
  },
  {
    name: "web developer",
    percentage: 90,
  },
  {
    name: "web developer",
    percentage: 90,
  },
  {
    name: "web developer",
    percentage: 90,
  },
  {
    name: "web developer",
    percentage: 90,
  },
  {
    name: "web developer",
    percentage: 90,
  },
  {
    name: "web developer",
    percentage: 90,
  },
];
export default function Skills({}: Props): ReactElement {
  const renderSkills = () =>
    skillsData.map((skill) => (
      <SkillContainer>
        <SkillNameAndPercentage>
          <p className="title">{skill.name}</p>
          <p className="percent">{skill.percentage}%</p>
        </SkillNameAndPercentage>
        <SkillBarContainer>
          <Bar percentage={skill.percentage} />
        </SkillBarContainer>
      </SkillContainer>
    ));

  return (
    <div>
      <Title>Skills</Title>
      {renderSkills()}
    </div>
  );
}
