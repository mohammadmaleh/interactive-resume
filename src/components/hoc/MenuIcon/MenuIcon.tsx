import React, { ReactElement, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";
import { white, darkBlack, blue, silver } from "../../../constants/colors";
import * as easings from "d3-ease";
import ResumeContext from "../../../context/resume.context";
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
  margin: 20px auto;
  cursor: pointer;
  * {
    color: ${(props) => (props.active ? white : silver)};
    z-index: 2;
  }
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  z-index: 0;
`;
const MenuIcon = ({
  Icon,
  link,
  name,
  handleOnClick,
}: MenuIconProps): ReactElement => {
  const resumeContext = useContext(ResumeContext);
  const location = useLocation();
  const isActive = location.pathname === link;
  const transitions = useTransition(isActive, null, {
    from: { transform: "scale(0)" },
    enter: { transform: "scale(1)" },
    leave: { transform: "scale(0)" },
    config: {
      easing: easings.easeCubic,
    },
    unique: true,
    reset: true,
  });
  return (
    <IconContainer
      active={isActive}
      onMouseEnter={() => {
        resumeContext.tracerNotification.toggleTracerNotification(true, name);
      }}
      onMouseLeave={() => {
        resumeContext.tracerNotification.toggleTracerNotification(false, name);
      }}
      onClick={() => {
        if (handleOnClick) handleOnClick();
      }}
    >
      {link && (
        <Link to={link}>
          <Icon size={30} />
        </Link>
      )}
      {!link && (
        <div>
          <Icon size={30} style={{ color: white }} />
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
