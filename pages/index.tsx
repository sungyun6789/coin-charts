import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart/Chart'), { ssr: false });

const Index = () => {
  return (
    <Main>
      <Chart />
    </Main>
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
