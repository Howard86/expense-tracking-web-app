import React from 'react';
import dayjs from 'dayjs';
import { render, screen } from '@testing-library/react';
import ExpenseCalendar from '@/components/ExpenseCalendar';

describe('ExpenseCalendar', () => {
  let timestamp: number;
  const setTimestamp = (name: number) => {
    timestamp = name;
  };

  beforeEach(() => {
    timestamp = dayjs().unix();
    render(
      <ExpenseCalendar timestamp={timestamp} setTimestamp={setTimestamp} />,
    );
  });

  it('should render a date', () => {
    screen.getByText(/^\d{4}年\d{2}月\d{2}日$/);
  });
});
