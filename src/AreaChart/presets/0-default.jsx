import React from 'react';
import AreaChart from '../AreaChart';

const chartData = [
  [
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
  ],
  [
    { x: 0, y: 18 },
    { x: 1, y: 9 },
    { x: 2, y: 2 },
    { x: 3, y: 19 },
    { x: 4, y: 11 },
    { x: 5, y: 17 },
    { x: 6, y: 2 },
    { x: 7, y: 1 },
    { x: 8, y: 9 },
    { x: 9, y: 11 },
  ],
];
const chartStartData = [
  [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 0 },
    { x: 6, y: 1 },
    { x: 7, y: 2 },
    { x: 8, y: 3 },
    { x: 9, y: 4 },
  ],
  [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 0 },
    { x: 6, y: 1 },
    { x: 7, y: 2 },
    { x: 8, y: 3 },
    { x: 9, y: 4 },
  ],
];

export default (
  <AreaChart
    animation="gentle"
    colorRange={['teal', 'red']}
    curve="curveLinear"
    data={chartData}
    opacity="0.6"
    startData={chartStartData}
    styles={[{ strokeStyle: 'dashed' }]}
    uxpId="areaChart1"
    width={500}
  />
);
