import React, { FC } from 'react';
import { Container, Spacer } from '@chakra-ui/react';
import Footer from './Footer';

const Layout: FC = ({ children }) => (
  <Container h="100vh" centerContent>
    {children}
    <Spacer />
    <Footer />
  </Container>
);

export default Layout;
