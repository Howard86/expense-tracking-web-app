import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '@/redux/reducer';

const store = configureStore({ reducer });

const WrappedProviders: FC = ({ children }) => (
  <ReduxProvider store={store}>
    <ChakraProvider>{children}</ChakraProvider>
  </ReduxProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: WrappedProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
