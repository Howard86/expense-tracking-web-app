import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import store from '@/redux/store';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ReduxProvider store={store}>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </ReduxProvider>
);

export default App;
