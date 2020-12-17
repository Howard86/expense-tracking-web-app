import React from 'react';
import { render } from '@testing-library/react';
import IncomePage from '@/pages/income';

describe('IncomePage', () => {
  it('should render IncomePage', () => {
    render(<IncomePage />);
  });
});
