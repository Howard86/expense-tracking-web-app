import React, { FC } from 'react';
import { Container, Spacer, VStack } from '@chakra-ui/react';
import Footer from './Footer';
import useUserListener from '@/hooks/useUseListener';

const Layout: FC = ({ children }) => {
  useUserListener();

  return (
    <Container minH="100vh" centerContent>
      <VStack as="main" textAlign="center" my="4" spacing={[2, 4, 8]}>
        {children}
      </VStack>
      <Spacer />
      <Footer />
    </Container>
  );
};

export default Layout;
