import React, { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import ExpenseForm from '@/components/ExpenseForm';
import ExpenseRadio from '@/components/ExpenseRadio';

const ExpensePage: FC = () => (
  <>
    <Heading>開銷</Heading>
    <Box w={4 / 5}>
      <ExpenseRadio />
    </Box>
    <ExpenseForm />
  </>
);

export default ExpensePage;
