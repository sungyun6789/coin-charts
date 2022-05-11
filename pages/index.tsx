import { useState } from 'react';

import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

import { useBtcDayDataQuery } from '../components/Chart/Chart.query';

const LChart = dynamic(() => import('../components/Chart/LChart'), { ssr: false });
const BChart = dynamic(() => import('../components/Chart/BChart'), { ssr: false });

type ChartType = '날짜선택' | '현재가격';

const Index = () => {
  const [selectType, setSelectType] = useState<ChartType>('날짜선택');
  const [count, setCount] = useState(7);
  const { refetch } = useBtcDayDataQuery(count);

  return (
    <Main>
      <Header>
        <select onChange={(e) => setSelectType(e.target.value as ChartType)}>
          <option value="날짜선택">날짜 선택</option>
          <option value="현재가격">현재 가격</option>
        </select>
      </Header>

      {selectType === '날짜선택' ? (
        <>
          <SelectDateWrapper>
            최근
            <input value={count} onChange={(e) => setCount(+e.target.value)} />
            일동안의 KRW-BTC 가격
            <button onClick={() => refetch()}>조회</button>
          </SelectDateWrapper>
          <ChartWrapper>
            <LChart count={count} />
          </ChartWrapper>
        </>
      ) : (
        <ChartWrapper>
          <BChart />
        </ChartWrapper>
      )}
    </Main>
  );
};

export default Index;

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  .yAxis {
    font-size: 11px;
    width: 200px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-top: 20px;

  select {
    width: 200px;
    height: 100%;
    font-size: 16px;
    border: 1px solid #e0e0e0;
    outline: none;
  }
`;

const ChartWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const SelectDateWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

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
