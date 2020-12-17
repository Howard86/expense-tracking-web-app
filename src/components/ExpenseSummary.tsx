import React, { FC, useEffect, useState } from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';
import { Expense } from '@/components/ExpenseForm';
import { getExpenseCollection } from '@/utils/firebase';
import useUser from '@/hooks/useUser';

const ExpenseSummary: FC = () => {
  const [records, setRecords] = useState<Expense[]>([]);
  const { user } = useUser();

  useEffect(() => {
    if (user && user.email !== null) {
      const collection = getExpenseCollection(user.email);
      collection
        .get({ source: 'cache' })
        .then((snapshot) => {
          setRecords(snapshot.docs.map((doc) => doc.data() as Expense));
        })
        .catch(console.error);
    }
  }, [typeof user]);

  return (
    <>
      <Heading>Summary</Heading>
      {records.map((expense, index) => (
        <Box key={index}>
          <Text>{expense.name}</Text>
          <Text>{expense.category}</Text>
          <Text>{expense.cost}</Text>
          <Text>{expense.date}</Text>
        </Box>
      ))}
    </>
  );
};

export default ExpenseSummary;
