import React, { ReactElement, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
interface HoverTextProps {
  displayText: boolean;
}
interface MenuIconProps {
  Icon: any;
  name: string;
  link?: string;
  handleOnClick?: Function;
}
interface IconContainerProps {
  active: boolean;
}
const textAnimation = keyframes`
  from {
    right: 0; 
    opacity: 0;
    z-index:-1;
  }
  50% {
    right: 15px; 
    opacity: 0.1;
    z-index:-1;
  }
  to {
    right: 50px; 
    opacity: 1;
    z-index:-1;
  }
`;

const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  cursor: pointer;

  * {
    color: ${(props) => (props.active ? "#303030" : "white")};
  }
`;
const HoverText = styled.p<HoverTextProps>`
  display: ${(props) => (props.displayText ? "block" : "none")};
  color: white;
  padding: 10px;
  position: absolute;
  right: 50px;
  top: 0;
  animation: ${textAnimation} 0.3s linear;
  font-size: 1.2rem;
  font-weight: 600;
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  background: linear-gradient(#444444, #444444);
  border: 1px solid white;
  border-right-color: transparent;
`;

const MenuIcon = ({
  Icon,
  link,
  name,
  handleOnClick,
}: MenuIconProps): ReactElement => {
  const [displayText, setDisplayText] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === link;
  // console.log(isActive);
  // console.log(location.pathname);
  return (
    <IconContainer
      active={isActive}
      onMouseEnter={() => {
        setDisplayText(true);
      }}
      onMouseLeave={() => {
        setDisplayText(false);
      }}
      onClick={() => {
        if (handleOnClick) handleOnClick();
      }}
    >
      {link && (
        <Link to={link}>
          <Icon size={30} />
          {name && <HoverText displayText={displayText}>{name}</HoverText>}
        </Link>
      )}
      {!link && (
        <div>
          <Icon size={30} />
          {name && <HoverText displayText={displayText}>{name}</HoverText>}
        </div>
      )}
    </IconContainer>
  );
};

export default MenuIcon;
