import React from 'react';
import { render, screen } from '@testing-library/react';
import RouterLink from '@/components/RouterLink';

describe('RouterLink', () => {
  let element: HTMLElement;

  beforeAll(() => {
    render(<RouterLink href="/test" text="test" />);
    element = screen.getByRole('link');
  });

  it('should return link href', () => {
    expect(element.getAttribute('href')).toBe('/test');
  });

  it('should return link text', () => {
    expect(element).toHaveTextContent('test');
  });
});
