import React from "react";
import styled, { keyframes } from "styled-components";
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

interface HoverTextProps {
  displayText: boolean;
}
interface IconContainerProps {
  onMouseEnter: any;
  onMouseLeave: any;
}
const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  cursor: pointer;
  color: white;
`;
const HoverText = styled.div<HoverTextProps>`
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
const MenuIcon = (WrappedComponent: any, text?: string) => {
  let displayText = false;
  const hocComponent = ({ ...props }) => (
    <IconContainer
      onMouseEnter={() => {
        displayText = true;
      }}
      onMouseLeave={() => {
        displayText = false;
      }}
    >
      <WrappedComponent {...props} size={30} />
      {text && <HoverText displayText={displayText}>{text}</HoverText>}
    </IconContainer>
  );
  hocComponent.propTypes = {};
  return hocComponent;
};
export default MenuIcon;
