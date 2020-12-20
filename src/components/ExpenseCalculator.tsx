import React, { FC } from 'react';
import { Box, Grid, Square } from '@chakra-ui/react';
import useCalculator from '@/hooks/useCalculator';
import CalculatorButton from '@/components/CalculatorButton';

const arrays = Array(3).fill(0);

const ExpenseCalculator: FC = () => {
  const {
    value,
    handleOnType,
    handleOnDelete,
    handleOnClear,
  } = useCalculator();

  const handleOnClick = (input: string) => () => handleOnType(input);

  return (
    <Box>
      <Square bg="teal.100" borderRadius="md" p={2}>
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
          onClick={() => alert('submit')}
        />
      </Grid>
    </Box>
  );
};

export default ExpenseCalculator;
