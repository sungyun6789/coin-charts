import styled from '@emotion/styled';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useQuery } from 'react-query';

const Chart = dynamic(() => import('../components/Chart/Chart'), { ssr: false });

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

const Index = () => {
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
    <Main>
      <Chart data={data} />
    </Main>
  );
};

export default Index;

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
