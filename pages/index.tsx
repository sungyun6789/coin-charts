import { useState } from 'react';

import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

import { useBtcDayDataQuery } from '../components/Chart/Chart.query';

const LChart = dynamic(() => import('../components/Chart/LChart'), { ssr: false });
const BChart = dynamic(() => import('../components/Chart/BChart'), { ssr: false });

const Index = () => {
  const [chartType, setChartType] = useState<'날짜선택' | '현재가격'>('날짜선택');
  const [count, setCount] = useState(10);
  const { refetch } = useBtcDayDataQuery(count);

  return (
    <>
      <Header>
        <select onChange={(e) => setChartType(e.target.value as '날짜선택' | '현재가격')}>
          <option value="날짜선택">날짜 선택</option>
          <option value="현재가격">현재 가격</option>
        </select>
      </Header>
      {chartType === '날짜선택' && (
        <SelectDateWrapper>
          최근
          <input value={count} onChange={(e) => setCount(+e.target.value)} />
          일동안의 KRW-BTC 가격
          <button onClick={() => refetch()}>조회</button>
        </SelectDateWrapper>
      )}
      <Main>{chartType === '날짜선택' ? <LChart count={count} /> : <BChart />}</Main>
    </>
  );
};

export default Index;

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  .recharts-cartesian-axis-ticks {
    font-size: 11px;
    width: 200px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 50px;
  margin: 20px;

  select {
    width: 200px;
    height: 100%;
    font-size: 16px;
    border: 1px solid #e0e0e0;
    outline: none;
  }
`;

const SelectDateWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 60px;
    height: 40px;
    font-size: 16px;
    text-align: right;
    margin: 0 3px;
    border: 1px solid #e0e0e0;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
  }

  button {
    width: 60px;
    height: 40px;
    margin: 0 3px;
    background-color: white;
    border: 1px solid #e0e0e0;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      background-color: #f0f0f0;
    }
  }
`;
