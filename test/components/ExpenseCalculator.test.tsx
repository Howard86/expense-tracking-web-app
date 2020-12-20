import React from 'react';
import { render, screen } from '../test-utils';
import ExpenseCalculator from '@/components/ExpenseCalculator';

describe('ExpenseCalculator', () => {
  beforeEach(() => {
    render(<ExpenseCalculator />);
  });

  it('should render DELETE button', () => {
    const button = screen.getByText('DEL');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should render CLEAR button', () => {
    const button = screen.getByText('AC');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should render OK button', () => {
    const button = screen.getByText('OK');
    expect(button.getAttribute('type')).toBe('button');
  });
});
