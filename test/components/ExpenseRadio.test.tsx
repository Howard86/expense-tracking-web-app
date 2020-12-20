import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpenseRadio, { Category } from '@/components/ExpenseRadio';

describe('ExpenseRadio', () => {
  let option: Category = '伙食';
  const setOption = (name: Category) => {
    option = name;
  };

  beforeEach(() => {
    render(<ExpenseRadio option={option} setOption={setOption} />);
  });

  it('should render a radio group', () => {
    screen.getByRole('radiogroup');
  });

  it('should render a radio buttons', () => {
    screen.getAllByRole('radio');
  });
});
