import styled from '@emotion/styled';

import Chart from '../components/Chart';

const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = () => {
  return (
    <Main>
      <Chart />
    </Main>
  );
};

export default Index;
