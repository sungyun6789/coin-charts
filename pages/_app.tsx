import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import GlobalStyle from '../styles/global.style';

const queryClient = new QueryClient();

const app = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <Component {...pageProps} />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default app;
