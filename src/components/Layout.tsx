import React, { FC } from 'react';
import { Container, Spacer, VStack } from '@chakra-ui/react';
import Footer from './Footer';

const Layout: FC = ({ children }) => (
  <Container h="100vh" centerContent>
    <VStack as="main" textAlign="center" my="4" spacing={[2, 4, 8]}>
      {children}
    </VStack>
    <Spacer />
    <Footer />
  </Container>
);

export default Layout;
