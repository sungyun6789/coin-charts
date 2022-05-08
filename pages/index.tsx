import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart'), { ssr: false });
const Calendar = dynamic(() => import('../components/Calendar'), { ssr: false });

const Index = () => {
  return (
    <>
      <Calendar />
      <Main>
        <Chart />
      </Main>
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
