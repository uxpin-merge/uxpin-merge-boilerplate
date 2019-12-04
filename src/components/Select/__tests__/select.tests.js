import React from "react";
import * as enzyme from "enzyme";
import toJson from "enzyme-to-json";
import SelectItem from "../components/SelectItem/SelectItem";
import Select from "../Select";

test("renders Select with width stretched correctly", () => {
    const select = (
      <Select width="stretched">
        <SelectItem>Option 1</SelectItem>
        <SelectItem>Option 2</SelectItem>
        <SelectItem>Option 3</SelectItem>
        <SelectItem>Option 4</SelectItem>
        <SelectItem>Option 5</SelectItem>
        <SelectItem>Option 5 Option 5 Option 5 Option 5 Option 5</SelectItem>
      </Select>
    );
  
    expect(toJson(enzyme.shallow(select))).toMatchSnapshot(`enzyme.shallow`);
  });

test("renders Select with width auto correctly", () => {
    const select = (
      <Select width="auto">
        <SelectItem>Option 1</SelectItem>
        <SelectItem>Option 2</SelectItem>
        <SelectItem>Option 3</SelectItem>
        <SelectItem>Option 4</SelectItem>
        <SelectItem>Option 5</SelectItem>
        <SelectItem>Option 5 Option 5 Option 5 Option 5 Option 5</SelectItem>
      </Select>
    );
  
    expect(toJson(enzyme.shallow(select))).toMatchSnapshot(`enzyme.shallow`);
  });
