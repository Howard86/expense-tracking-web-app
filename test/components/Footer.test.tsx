import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  const routes = ['/', '/income', '/expense'];

  beforeEach(() => {
    render(<Footer />);
  });

  it('should contain nav tag', () => {
    screen.getByRole('navigation');
  });

  // TODO: fix ul from chakra-toast are included
  it('should should contain ul tag', () => {
    screen.getAllByRole('list');
  });

  it('should should contain multiple li tag', () => {
    screen.getAllByRole('listitem');
  });

  it('should render 3 navigation links', () => {
    const linkElements = screen.getAllByRole('link');

    routes.forEach((route) => {
      expect(
        linkElements.some((element) => element.getAttribute('href') === route),
      );
    });
  });
});
