import axios from 'axios';
import { useQuery } from 'react-query';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

export interface UpbitResponseModel {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  prev_closing_price: number;
  change_price: number;
  change_rate: number;
}

const Chart = () => {
  const { data } = useQuery(
    ['/candles/days?market=KRW-BTC'],
    async () =>
      (await axios.get<UpbitResponseModel[]>('https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=100')).data,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (value) => value.sort().reverse(),
    },
  );

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
