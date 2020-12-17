import React from 'react';
import { ByRoleMatcher, render, screen } from '@testing-library/react';
import ExpenseForm from '@/components/ExpenseForm';

jest.mock('@/hooks/useUser', () => {
  return jest.fn(() => ({
    user: null,
  }));
});

const testRole = (
  labelText: string,
  role: ByRoleMatcher,
  name: string,
): HTMLElement => {
  screen.getByLabelText(name);
  const element = screen.getByRole(role, { name });
  expect(element.getAttribute('id')).toBe(labelText);
  expect(element.getAttribute('name')).toBe(labelText);
  return element;
};

describe('ExpenseForm', () => {
  beforeEach(() => {
    render(<ExpenseForm />);
  });

  it('should contain form control', () => {
    expect(screen.getAllByRole('group').length).toBe(4);
  });

  it('should contain date input tag', () => {
    screen.getByLabelText('日期');
  });

  it('should contain category input tag', () => {
    testRole('category', 'textbox', '類別');
  });

  it('should contain name input tag', () => {
    testRole('name', 'textbox', '細項');
  });

  it('should contain cost number input tag', () => {
    const element = testRole('cost', 'spinbutton', '開銷');
    expect(element.getAttribute('type')).toBe('number');
  });

  it('should contain submit button', () => {
    const element = screen.getByRole('button');
    expect(element.getAttribute('type')).toBe('submit');
  });
});
