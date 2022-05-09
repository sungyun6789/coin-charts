import axios from 'axios';
import { useQuery } from 'react-query';

import type { UpbitResponseModel } from './Chart.type';

const getBtcData = async (count: number) => {
  const { data } = await axios.get<UpbitResponseModel[]>(
    `https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=${count}`,
  );
  return data;
};

export const useBtcDataQuery = (count: number) =>
  useQuery(['/candles/days?market=KRW-BTC'], () => getBtcData(count), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
