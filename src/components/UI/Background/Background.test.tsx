import React from "react";
import { shallow, mount, render } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import Background from "./Background";
const defaultProps = {
  mousePositionX: 0,
  mousePositionY: 0,
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Background {...setupProps} />);
};
describe("<Background />", function () {
  it("<Background /> exist", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "interactive-background");
    expect(component.length).toBe(1);
  });
});
