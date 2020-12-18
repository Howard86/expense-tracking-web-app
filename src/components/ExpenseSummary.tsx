import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/user';
import { getCollection } from '@/redux/firebase';
import { Heading, Box, Text } from '@chakra-ui/react';
import { Expense } from '@/components/ExpenseForm';

const ExpenseSummary: FC = () => {
  const { userData } = useSelector(selectUser);
  const [records, setRecords] = useState<Expense[]>([]);

  useEffect(() => {
    if (userData) {
      const collection = getCollection(userData.email, 'expense');
      collection
        .get({ source: 'cache' })
        .then((snapshot) => {
          setRecords(snapshot.docs.map((doc) => doc.data() as Expense));
        })
        .catch(console.error);
    }
  }, [userData?.email]);

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
