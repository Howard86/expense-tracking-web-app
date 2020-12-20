import React from 'react';
import { render, screen } from '@testing-library/react';
import CalculatorButton from '@/components/CalculatorButton';

describe('CalculatorButton', () => {
  let element: HTMLElement;
  let start: number;

  beforeEach(() => {
    const handleOnClick = () => {
      start = 10;
    };

    render(<CalculatorButton value={'4'} onClick={handleOnClick} />);
    element = screen.getByRole('button');
  });

  it('should render number', () => {
    expect(element.textContent).toBe('4');
  });

  it('should make start = 10 after click', () => {
    element.click();
    expect(start).toBe(10);
  });
});
