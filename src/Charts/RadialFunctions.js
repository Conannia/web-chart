import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'



const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
]

const style = {
  top: '50%',
  right: '70%',
  transform: 'translate(20, -100%)',
  lineHeight: '24px',
}

export default function RadialFunction() {
  return (
    <ResponsiveContainer width='100%' aspect={3}>
      <RadialBarChart
        cx='50%'
        cy='50%'
        innerRadius='50%'
        outerRadius='80%'
        barSize={50}
        data={data}
        insideStart={275}
        insideEnd={-45}
      >
        <RadialBar
          minAngle={25}
          label={{ position: 'insideStart', fill: '#fff', fontSize: '10px' }}
          background
          clockWise
          dataKey='uv'
          startAngle={0}
          endAngle={270}
          insideStart={275}
          insideEnd={-45}
        />
        <Legend
          iconSize={25}
          layout='vertical'
          verticalAlign='middle'
          wrapperStyle={style}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}