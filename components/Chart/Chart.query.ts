import axios from 'axios';
import { useQuery } from 'react-query';

import type { UpbitResponseModel } from './Chart.type';

const getBtcData = async () => {
  const { data } = await axios.get<UpbitResponseModel[]>(
    'https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=100',
  );
  return data;
};

export const useBtcDataQuery = () =>
  useQuery(['/candles/days?market=KRW-BTC'], getBtcData, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
