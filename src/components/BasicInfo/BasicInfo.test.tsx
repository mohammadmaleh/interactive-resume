import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import BasicInfo from "./BasicInfo";
const defaultProps = {
  mousePositionX: 0,
  mousePositionY: 0,
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<BasicInfo {...setupProps} />);
};
describe("<BasicInfo />", function () {
  it("<BasicInfo /> exist", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "basic-info");
    expect(component.length).toBe(1);
  });
});
