import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/pages/index';

jest.mock('@/hooks/useUser', () => {
  return jest.fn(() => ({
    user: null,
  }));
});

jest.mock('swr', () => {
  return jest.fn(() => ({
    data: null,
    error: new Error('mock error'),
  }));
});

describe('HomePage', () => {
  it('should render Home page', () => {
    render(<Home />, {});
  });
});
