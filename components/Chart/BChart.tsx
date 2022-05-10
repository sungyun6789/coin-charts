import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
// import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

// import { useBtcCurrentDataQuery } from './Chart.query';

const BChart = () => {
  // const { data } = useBtcCurrentDataQuery();
  const [socketData, setSocketData] = useState<any>();

  useEffect(() => {
    const socket = new WebSocket('wss://api.upbit.com/websocket/v1');
    socket.binaryType = 'arraybuffer';
    socket.onopen = () => socket.send(JSON.stringify([{ ticket: 'ticket' }, { type: 'ticker', codes: ['KRW-BTC'] }]));
    socket.onmessage = (event) => {
      const enc = new TextDecoder('utf-8');
      const arr = new Uint8Array(event.data);
      setSocketData(JSON.parse(enc.decode(arr)));
    };
    return () => socket.close();
  }, []);

  return (
    <ChartWrapper>
      <div>현재 가격: {socketData?.trade_price.toLocaleString('ko-KR')}원</div>
      {/* <BarChart width={250} height={500} data={socketData}>
        <Tooltip />
        <XAxis dataKey="market" />
        <YAxis dataKey="trade_price" />
        <Bar dataKey="trade_price" fill="#8884d8" />
      </BarChart> */}
    </ChartWrapper>
  );
};

export default BChart;

const ChartWrapper = styled.section`
  text-align: center;

  div {
    width: 250px;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
