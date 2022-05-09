import { useState } from 'react';

import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

import { useBtcDayDataQuery } from '../components/Chart/Chart.query';

const LChart = dynamic(() => import('../components/Chart/LChart'), { ssr: false });
const BChart = dynamic(() => import('../components/Chart/BChart'), { ssr: false });

const Index = () => {
  const [isCurrentPrice, setIsCurrentPrice] = useState(false);
  const [count, setCount] = useState(10);
  const { refetch } = useBtcDayDataQuery(count);

  return (
    <>
      최근
      <input value={count} onChange={(e) => setCount(+e.target.value)} />
      일의 KRW-BTC 가격
      <button onClick={() => refetch()}>조회</button>
      <div>
        현재가격보기
        <input type="checkbox" onChange={(e) => setIsCurrentPrice(e.target.checked)} />
      </div>
      <Main>{isCurrentPrice ? <BChart /> : <LChart count={count} />}</Main>
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
