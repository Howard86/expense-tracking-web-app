import React, { FC } from 'react';
import { Box, HStack, List, ListItem } from '@chakra-ui/react';
import RouterLink from './RouterLink';

const Footer: FC = () => (
  <Box as="nav" py="3">
    <HStack as={List} spacing={[1, 4, 8]}>
      <ListItem>
        <RouterLink href="/" text="Home" />
      </ListItem>
      <ListItem>
        <RouterLink href="/income" text="Income" />
      </ListItem>
      <ListItem>
        <RouterLink href="/expense" text="Expense" />
      </ListItem>
    </HStack>
  </Box>
);

export default Footer;
