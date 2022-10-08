import type { FC } from 'react';
import type { ChartsProps, Sensor } from 'libs/interface';

import { useSSE } from 'hooks';
import { SSE_URL } from 'utils/constants';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Charts: FC<ChartsProps> = ({ event }) => {
  const { data } = useSSE<Sensor>(SSE_URL, [event]);

  return (
    <ResponsiveContainer height='100%' width='100%'>
      <BarChart data={data[event] ?? []}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='air_temperature' fill='#8884d8' />
        <Bar dataKey='humidity' fill='#82ca9d' />
        <Bar dataKey='light_intensity' fill='#666' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
