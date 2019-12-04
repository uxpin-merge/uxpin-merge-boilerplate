import React from 'react';
import PieChart from '../PieChart';

const chartData = [
  { label: 'apples', theta: 1 },
  { label: 'oranges', theta: 4 },
  { label: 'cherries', theta: 6 },
];

const chartStartData = [
  { label: 'apples', theta: 0 },
  { label: 'oranges', theta: 0 },
  { label: 'cherries', theta: 0 },
];

export default (
  <PieChart
    animation="gentle"
    colorRange={['teal', 'red', 'blue']}
    data={chartData}
    height={300}
    hint
    innerRadius={120}
    padAngle="0.02"
    radius={140}
    startData={chartStartData}
    uxpId="pieChart1"
    width={300}
  />
);
