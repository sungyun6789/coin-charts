import { useState } from 'react';

import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

import { useBtcDataQuery } from '../components/Chart/Chart.query';

const Chart = dynamic(() => import('../components/Chart'), { ssr: false });

const Index = () => {
  const [isCurrentPrice, setIsCurrentPrice] = useState(false);
  const [count, setCount] = useState(10);
  const { data, refetch } = useBtcDataQuery(count);

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
      <Main>{isCurrentPrice ? <div /> : <Chart btcData={data} />}</Main>
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
`;
