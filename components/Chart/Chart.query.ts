import axios from 'axios';
import { useQuery } from 'react-query';

import type { BtcCurrentDataModel, BtcDayDataModel } from './Chart.type';

const getBtcDayData = async (count: number) => {
  const { data } = await axios.get<BtcDayDataModel[]>(
    `https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=${count}`,
  );
  return data;
};

export const useBtcDayDataQuery = (count: number) =>
  useQuery(['/candles/days?market=KRW-BTC'], () => getBtcDayData(count), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

const getBtcCurrentData = async () => {
  const { data } = await axios.get<BtcCurrentDataModel[]>('https://api.upbit.com/v1/trades/ticks?market=KRW-BTC');
  return data;
};

export const useBtcCurrentDataQuery = () => useQuery(['/trades/ticks?market=KRW-BTC'], getBtcCurrentData);
