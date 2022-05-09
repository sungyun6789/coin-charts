import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

import { useBtcCurrentDataQuery } from './Chart.query';

const BChart = () => {
  const { data } = useBtcCurrentDataQuery();

  return (
    <BarChart width={200} height={500} data={data}>
      <Tooltip />
      <XAxis dataKey="market" />
      <YAxis dataKey="trade_price" />
      <Bar dataKey="trade_price" fill="#8884d8" />
    </BarChart>
  );
};

export default BChart;
