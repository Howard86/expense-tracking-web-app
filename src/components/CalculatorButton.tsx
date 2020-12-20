import React, { FC } from 'react';
import { Button, GridItem, GridItemProps } from '@chakra-ui/react';

interface CalculatorButtonProps extends GridItemProps {
  value: string;
  colorScheme?: string;
  onClick: () => void;
  isLoading?: boolean;
}

const CalculatorButton: FC<CalculatorButtonProps> = ({
  value,
  onClick,
  isLoading,
  ...props
}) => (
  <GridItem as={Button} onClick={onClick} isLoading={isLoading} {...props}>
    {value}
  </GridItem>
);

export default CalculatorButton;
