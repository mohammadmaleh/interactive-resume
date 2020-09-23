import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { animated, useSpring, useTransition } from "react-spring";
import { white, darkBlack, blue } from "../../../constants/colors";
import * as easings from "d3-ease";

interface MenuIconProps {
  Icon: any;
  name?: string;
  link?: string;
  handleOnClick?: Function;
}
interface IconContainerProps {
  active: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  cursor: pointer;
  * {
    color: ${(props) => (props.active ? white : darkBlack)};
    z-index: 2;
  }
  min-height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HoverText = styled(animated.p)`
  color: ${white};
  padding: 10px;
  position: absolute;
  right: 70px;
  top: 0;
  z-index: -9;
  width: 70px;
  font-weight: 600;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  background: linear-gradient(#444444, #444444);
  border: 1px solid ${white};
  border-right-color: transparent;
  transform-origin: 100% 50%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;
const IconBackground = styled(animated.div)`
  background-color: ${blue};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  z-index: 1;
`;
const MenuIcon = ({
  Icon,
  link,
  name,
  handleOnClick,
}: MenuIconProps): ReactElement => {
  const location = useLocation();
  const isActive = location.pathname === link;
  const [textAnimationProps, setTextAnimationProps] = useSpring(() => ({
    transform: "rotateY(-90deg)",
    from: { transform: "rotateY(-90deg)" },
    display: "none",
    config: {
      mass: 15,
      tension: 500,
      friction: 100,
      easing: easings.easeCubic,
    },
  }));
  const transitions = useTransition(isActive, null, {
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)" },
    config: {
      easing: easings.easeCubic,
    },
  });
  return (
    <IconContainer
      active={isActive}
      onMouseEnter={() => {
        setTextAnimationProps({
          transform: " rotateY(0deg)",
          display: "block",
        });
      }}
      onMouseLeave={() => {
        setTextAnimationProps({
          transform: "rotateY(-90deg)",
          display: "none",
        });
      }}
      onClick={() => {
        if (handleOnClick) handleOnClick();
      }}
    >
      {link && (
        <Link to={link}>
          <Icon size={30} />
          {name && <HoverText style={textAnimationProps}>{name}</HoverText>}
        </Link>
      )}
      {!link && (
        <div>
          <Icon size={30} />
          {name && <HoverText style={textAnimationProps}>{name}</HoverText>}
        </div>
      )}

      {transitions.map(
        ({ item, key, props }) =>
          item && <IconBackground key={key} style={props} />
      )}
    </IconContainer>
  );
};

export default MenuIcon;
