import React, { FC } from 'react';
import dayjs from 'dayjs';
import { HStack, Text, Button } from '@chakra-ui/react';

interface ExpenseCalendarProps {
  timestamp: number;
  setTimestamp: (timestamp: number) => void;
}

const ONE_DAY = 24 * 60 * 60;

const ExpenseCalender: FC<ExpenseCalendarProps> = ({
  timestamp,
  setTimestamp,
}) => {
  const increment = () => setTimestamp(timestamp + ONE_DAY);

  const decrement = () => setTimestamp(timestamp - ONE_DAY);

  return (
    <HStack>
      <Button onClick={increment}>+</Button>
      <Text>{dayjs.unix(timestamp).format('YYYY年MM月DD日')}</Text>
      <Button onClick={decrement}>-</Button>
    </HStack>
  );
};

export default ExpenseCalender;
