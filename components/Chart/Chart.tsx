import dayjs from 'dayjs';
import { Line, LineChart, Tooltip, XAxis } from 'recharts';

import type { UpbitResponseModel } from './Chart.type';

interface Props {
  btcData: UpbitResponseModel[] | undefined;
}

const Chart = ({ btcData }: Props) => {
  const data = btcData
    ?.map((value) => ({
      ...value,
      candle_date_time_utc: dayjs(value.candle_date_time_utc).format('MM-DD'),
      trade_price: value.candle_acc_trade_price,
    }))
    .sort()
    .reverse();

  return (
    <LineChart width={1200} height={500} data={data}>
      <XAxis dataKey="candle_date_time_utc" />
      <Tooltip />
      <Line type="monotone" dataKey="trade_price" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 6 }} />
    </LineChart>
  );
};

export default Chart;
