import React, { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import ExpenseCalculator from '@/components/ExpenseCalculator';

const ExpensePage: FC = () => (
  <>
    <Heading>開銷</Heading>
    <ExpenseCalculator />
  </>
);

export default ExpensePage;
