import React from "react";
import { shallow, mount, render } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
const defaultProps = {};
import App from "./App";
import Background from "./components/Background/Background";
import GlobalStyles from "./GlobalStyle";
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<App {...setupProps} />);
};
describe("<App />", function () {
  it("<App /> exist", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "app");
    expect(component.length).toBe(1);
  });
  it("<App /> renders children <Background/> and <GlobalStyles/>", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "app");
    expect(component.containsMatchingElement(<Background />)).toEqual(true);
    expect(component.containsMatchingElement(<GlobalStyles />)).toEqual(true);
  });
});
