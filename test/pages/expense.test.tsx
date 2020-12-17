import React from 'react';
import { render } from '@testing-library/react';
import ExpensePage from '@/pages/expense';

jest.mock('@/hooks/useUser', () => {
  return jest.fn(() => ({
    user: null,
  }));
});

describe('ExpensePage', () => {
  it('should render ExpensePage', () => {
    render(<ExpensePage />);
  });
});
