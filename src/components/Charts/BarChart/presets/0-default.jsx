import React from 'react';
import BarChart from '../BarChart';

const chartData = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 },
];
const chartStartData = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 },
  { x: 6, y: 6 },
  { x: 7, y: 7 },
  { x: 8, y: 8 },
  { x: 9, y: 9 },
];

export default (
  <BarChart
    animation="wobbly"
    color="black"
    fill="blue"
    data={chartData}
    height={300}
    hint
    opacity="1"
    startData={chartStartData}
    uxpId="barChart1"
    width={500}
  />
);
