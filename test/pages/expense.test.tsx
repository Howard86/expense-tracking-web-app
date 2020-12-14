import React from 'react';
import { render } from '@testing-library/react';
import ExpensePage from '@/pages/expense';

describe('ExpensePage', () => {
  it('should render ExpensePage', () => {
    render(<ExpensePage />);
  });
});
