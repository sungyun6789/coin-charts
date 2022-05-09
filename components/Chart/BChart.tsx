import styled from '@emotion/styled';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

import { useBtcCurrentDataQuery } from './Chart.query';

const BChart = () => {
  const { data } = useBtcCurrentDataQuery();

  return (
    <ChartWrapper>
      <div>현재 가격: {data?.[0].trade_price.toLocaleString('ko-KR')}원</div>
      <BarChart width={250} height={500} data={data}>
        <Tooltip />
        <XAxis dataKey="market" />
        <YAxis dataKey="trade_price" />
        <Bar dataKey="trade_price" fill="#8884d8" />
      </BarChart>
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
