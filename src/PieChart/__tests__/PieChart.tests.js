import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import PieChart from '../PieChart';


test('renders PieChart correctly', () => {
  const chart = (
    <PieChart
      width={300}
      height={300}
      data={[
        {
          label: 'apples',
          theta: 1,
        },
        {
          label: 'oranges',
          theta: 4,
        },
        {
          label: 'cherries',
          theta: 6,
        },
      ]}
      startData={[
        {
          label: 'apples',
          theta: 0,
        },
        {
          label: 'oranges',
          theta: 0,
        },
        {
          label: 'cherries',
          theta: 0,
        },
      ]}
      padAngle="0.02"
      radius={140}
      innerRadius={120}
    />
  );

  expect(toJson(enzyme.mount(chart))).toMatchSnapshot('enzyme.mount');
});
