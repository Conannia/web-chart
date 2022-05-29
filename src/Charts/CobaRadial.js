import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

const CobaRadial = () => {
  // Sample data
  const data = [
    { name: 'A', x: 1, fill: 'green' },
    { name: 'B', x: 2, fill: 'green' },
    { name: 'C', x: 3, fill: 'green' },
    { name: 'D', x: 4, fill: 'green' },
    // { name: 'E', x: 5, fill: 'orange' },
    // { name: 'F', x: 6, fill: 'red' },
    // { name: 'G', x: 7, fill: 'black' },
    // { name: 'H', x: 8, fill: 'purple' },
    // { name: 'I', x: 9, fill: 'gray' },
  ];

  return (
    <RadialBarChart width={1000} height={500} data={data}
    cx={720 / 2}
    cy={600 / 2}
    innerRadius={10}
    outerRadius={200}
    barSize={25}
    startAngle={275}
    endAngle={-45}>
      <PolarAngleAxis
        type="number"
        domain={[0, 10]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        dataKey="value"
        cornerRadius={35/2}
        fill="#0BEFF2"
      />
      <text
        x={720 / 2}
        y={600 / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
        textWidth={500}
      >
        $ 89
      </text>
    </RadialBarChart>
  );
};



export default CobaRadial;