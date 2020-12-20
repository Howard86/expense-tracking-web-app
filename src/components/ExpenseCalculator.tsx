import React, { ChangeEvent, FC, useState } from 'react';
import { Grid, Input, Square, VStack, useToast } from '@chakra-ui/react';
import useCalculator from '@/hooks/useCalculator';
import CalculatorButton from '@/components/CalculatorButton';
import { addExpense } from '@/redux/collection';
import { useAppDispatch } from '@/redux/store';
import type { Category } from './ExpenseRadio';
import ExpenseRadio from './ExpenseRadio';
import dayjs from 'dayjs';
import ExpenseCalender from './ExpenseCalendar';

const INITIAL_NAME = '';
const INITIAL_CATEGORY = '伙食';
const arrays = Array(3).fill(0);
const now = dayjs().unix();

const ExpenseCalculator: FC = () => {
  const [name, setName] = useState<string>(INITIAL_NAME);
  const [timestamp, setTimestamp] = useState<number>(now);
  const [category, setCategory] = useState<Category>(INITIAL_CATEGORY);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast({ duration: 3000, position: 'bottom' });

  const {
    value,
    handleOnType,
    handleOnDelete,
    handleOnClear,
  } = useCalculator();

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const handleOnClick = (input: string) => () => handleOnType(input);

  const handleOnSubmit = async (): Promise<void> => {
    setLoading(true);
    const isSuccess = await dispatch(
      addExpense({
        timestamp,
        category,
        name,
        cost: parseInt(value, 10),
      }),
    );

    if (isSuccess) {
      handleOnClear();
      setName(INITIAL_NAME);
      setCategory(INITIAL_CATEGORY);
      toast({
        title: 'Submit Success',
        status: 'success',
      });
    } else {
      toast({
        title: 'Something went wrong!',
        status: 'error',
      });
    }
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <VStack spacing={4}>
      <ExpenseRadio option={category} setOption={setCategory} />
      <ExpenseCalender timestamp={timestamp} setTimestamp={setTimestamp} />
      <Input value={name} onChange={handleInputOnChange} placeholder="備註" />
      <Square bg="teal.100" borderRadius="md" p={2} w={3 / 4}>
        $ {value}
      </Square>
      <Grid
        my={2}
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={2}
      >
        {arrays.map((_, j) =>
          arrays.map((_, i) => {
            const key = i + 7 - 3 * j;
            return (
              <CalculatorButton
                key={key}
                value={key.toString()}
                colStart={i + 1}
                rowStart={j + 1}
                onClick={handleOnClick(key.toString())}
              />
            );
          }),
        )}
        <CalculatorButton
          value={'00'}
          colStart={1}
          rowStart={4}
          onClick={() => handleOnType('00')}
        />
        <CalculatorButton
          value={'0'}
          colStart={2}
          rowStart={4}
          onClick={() => handleOnType('0')}
        />
        <CalculatorButton
          value={'.'}
          colStart={3}
          rowStart={4}
          onClick={() => handleOnType('.')}
        />
        <CalculatorButton
          value={'AC'}
          colorScheme="red"
          colStart={4}
          rowStart={1}
          onClick={handleOnClear}
        />
        <CalculatorButton
          value={'DEL'}
          colorScheme="red"
          colStart={4}
          rowStart={2}
          onClick={handleOnDelete}
        />
        <CalculatorButton
          value={'OK'}
          colorScheme="blue"
          h="full"
          colStart={4}
          rowStart={3}
          rowSpan={2}
          isLoading={isLoading}
          onClick={handleOnSubmit}
        />
      </Grid>
    </VStack>
  );
};

export default ExpenseCalculator;
