import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/global.style';

const app = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default app;
