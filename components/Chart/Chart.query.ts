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

/** @deprecated websocket 연결로 더 이상 사용하지 않음 */
const getBtcCurrentData = async () => {
  const { data } = await axios.get<BtcCurrentDataModel[]>('https://api.upbit.com/v1/trades/ticks?market=KRW-BTC');
  return data;
};

/** @deprecated websocket 연결로 더 이상 사용하지 않음 */
export const useBtcCurrentDataQuery = () =>
  useQuery(['/trades/ticks?market=KRW-BTC'], getBtcCurrentData, {
    refetchInterval: 3000,
  });
