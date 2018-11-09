import React from "react";
import * as enzyme from "enzyme";
import toJson from "enzyme-to-json";
import SelectItem from "../SelectItem";

test("renders SelectItem correctly", () => {
  const selectItem = (
      <SelectItem>Option 1</SelectItem>
  );

  expect(toJson(enzyme.shallow(selectItem))).toMatchSnapshot(`enzyme.shallow`);
});