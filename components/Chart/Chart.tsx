import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import { useBtcDataQuery } from './Chart.query';

const Chart = () => {
  const { data } = useBtcDataQuery();

  return (
    <LineChart width={1000} height={500} data={data}>
      <XAxis dataKey="candle_date_time_utc" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="candle_acc_trade_price" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />
    </LineChart>
  );
};

export default Chart;
