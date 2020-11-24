import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { animated, useSpring, useTransition } from "react-spring";
import * as easings from "d3-ease";
import { lightBlack, blue, white, darkBlack } from "../../constants/colors";
import ResumeContext from "../../context/resume.context";
interface TracerNotificationProps {}
const MainContainer = styled(animated.div)`
  z-index: 1000;
`;
const SecondaryContainer = styled(animated.div)`
  height: 30px;
  width: auto;
  background-color: ${lightBlack};
  position: absolute;
  z-index: 1000;
  border-radius: 70px;
  border: 2px solid ${blue};
  box-shadow: 10px -7px 15px ${darkBlack}, ${darkBlack} 0px 0px 3px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  `;
const TracerText = styled(animated.p)`
  font-size: 1.2em;
  color: ${white};
  white-space: nowrap;
`;
const TracerNotification = (): ReactElement => {
  const [elementWidth, setElementWidth] = useState(0);
  const containerRef = useRef<any>(null);
  const resumeContext = useContext(ResumeContext);
  const { x, y } = resumeContext.mousePosition;
  const { text, show } = resumeContext.tracerNotification;
  useEffect(() => {
    if (containerRef.current) setElementWidth(containerRef.current.offsetWidth);
  }, [containerRef.current]);
  const [movementProps, setMovementProps] = useSpring(() => ({
    xy: [x, y],
    config: {
      mass: 1,
      tension: 4000,
      friction: 130,

      easing: easings.easeCubic,
    },
  }));
  const trans1 = (x: number, y: number) =>
    ` scale(1) translate3d(calc(${x}px - ${
      elementWidth / 2
    }px),calc(${y}px - 50px),0)`;
  setMovementProps({ xy: [x, y] });
  const transitions = useTransition(show, null, {
    from: {
      transform: "scale(0)",
    },
    enter: {
      transform: "scale(1)",
    },
    leave: {
      transform: "scale(0)",
    },
    config: {
      easing: easings.easeCubic,
    },
    unique: true,
  });
  return (
    <div style={{ zIndex: 10000, position: "absolute" }}>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <MainContainer
              style={{
                // @ts-ignore
                transform: movementProps.xy.interpolate(trans1),
              }}
            >
              <SecondaryContainer style={props} ref={containerRef} key={key}>
                <TracerText>{text}</TracerText>
              </SecondaryContainer>
            </MainContainer>
          )
      )}
    </div>
  );
};

export default TracerNotification;
