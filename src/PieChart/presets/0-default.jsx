import React from 'react';
import PieChart from '../PieChart';

const chartData = [
  { theta: 1, label: 'apples' },
  { theta: 4, label: 'oranges' },
  { theta: 6, label: 'cherries' },
];

const chartStartData = [
  { theta: 0, label: 'apples' },
  { theta: 0, label: 'oranges' },
  { theta: 0, label: 'cherries' },
];

export default (
  <PieChart
    animation="gentle"
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
