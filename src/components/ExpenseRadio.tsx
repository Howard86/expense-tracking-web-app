import { Radio, RadioGroup, Wrap, WrapItem } from '@chakra-ui/react';
import React, { FC, ReactText, useState } from 'react';

export type Category = typeof DEFAULT_CATEGORIES[number];

const DEFAULT_CATEGORIES = [
  '伙食',
  '交際',
  '贍養',
  '娛樂',
  '家居',
  '治裝',
  '交通',
  '進修',
  '代墊',
  '其他',
] as const;

const ExpenseRadio: FC = () => {
  const [values, setValues] = useState<Category | ReactText>('伙食');

  return (
    <RadioGroup onChange={setValues} value={values}>
      <Wrap align="center" justify="center">
        {DEFAULT_CATEGORIES.map((category) => (
          <WrapItem key={category}>
            <Radio value={category}>{category}</Radio>
          </WrapItem>
        ))}
      </Wrap>
    </RadioGroup>
  );
};

export default ExpenseRadio;
