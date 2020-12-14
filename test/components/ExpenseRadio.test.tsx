import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseRadio from '@/components/ExpenseRadio';

describe('ExpenseRadio', () => {
  beforeEach(() => {
    render(<ExpenseRadio />);
  });

  it('should render a radio group', () => {
    screen.getByRole('radiogroup');
  });

  it('should render a radio buttons', () => {
    screen.getAllByRole('radio');
  });
});
