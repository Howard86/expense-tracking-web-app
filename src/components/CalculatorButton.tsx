import React, { FC } from 'react';
import { Button, GridItem, GridItemProps } from '@chakra-ui/react';

interface CalculatorButtonProps extends GridItemProps {
  value: string;
  colorScheme?: string;
  onClick: () => void;
}

const CalculatorButton: FC<CalculatorButtonProps> = ({
  value,
  onClick,
  ...props
}) => (
  <GridItem as={Button} onClick={onClick} {...props}>
    {value}
  </GridItem>
);

export default CalculatorButton;
