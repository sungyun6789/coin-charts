import { Bar, BarChart } from 'recharts';

import { useBtcCurrentDataQuery } from './Chart.query';

const BChart = () => {
  const { data } = useBtcCurrentDataQuery();

  return (
    <BarChart width={150} height={40} data={data}>
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
};

export default BChart;
