import React from 'react';
import MarkChart from '../MarkChart';

const chartData = [
  { size: 8, x: 0, y: 8 },
  { size: 5, x: 1, y: 5 },
  { size: 4, x: 2, y: 4 },
  { size: 9, x: 3, y: 9 },
  { size: 1, x: 4, y: 1 },
  { size: 7, x: 5, y: 7 },
  { size: 6, x: 6, y: 6 },
  { size: 3, x: 7, y: 3 },
  { size: 2, x: 8, y: 2 },
  { size: 1, x: 9, y: 0 },
];

const chartStartData = [
  { size: 1, x: 0, y: 0 },
  { size: 1, x: 1, y: 1 },
  { size: 1, x: 2, y: 2 },
  { size: 1, x: 3, y: 3 },
  { size: 1, x: 4, y: 4 },
  { size: 1, x: 5, y: 5 },
  { size: 1, x: 6, y: 6 },
  { size: 1, x: 7, y: 7 },
  { size: 1, x: 8, y: 8 },
  { size: 1, x: 9, y: 9 },
];

export default (
  <MarkChart
    animation="wobbly"
    data={chartData}
    height={300}
    hint
    margin={{ right: 20, top: 20 }}
    color="blue"
    fill="white"
    opacity="0.6"
    startData={chartStartData}
    strokeWidth={12}
    uxpId="markChart1"
    width={500}
  />
);
