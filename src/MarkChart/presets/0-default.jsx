import React from 'react';
import MarkChart from '../MarkChart';

const chartData = [
  { x: 0, y: 8, size: 8 },
  { x: 1, y: 5, size: 5 },
  { x: 2, y: 4, size: 4 },
  { x: 3, y: 9, size: 9 },
  { x: 4, y: 1, size: 1 },
  { x: 5, y: 7, size: 7 },
  { x: 6, y: 6, size: 6 },
  { x: 7, y: 3, size: 3 },
  { x: 8, y: 2, size: 2 },
  { x: 9, y: 0, size: 1 },
];

const chartStartData = [
  { x: 0, y: 0, size: 1 },
  { x: 1, y: 1, size: 1 },
  { x: 2, y: 2, size: 1 },
  { x: 3, y: 3, size: 1 },
  { x: 4, y: 4, size: 1 },
  { x: 5, y: 5, size: 1 },
  { x: 6, y: 6, size: 1 },
  { x: 7, y: 7, size: 1 },
  { x: 8, y: 8, size: 1 },
  { x: 9, y: 9, size: 1 },
];

export default (
  <MarkChart
    animation="wobbly"
    data={chartData}
    height={300}
    hint
    margin={{ top: 20, right: 20 }}
    opacity="0.3"
    startData={chartStartData}
    strokeWidth={12}
    uxpId="markChart1"
    width={500}
  />
);
