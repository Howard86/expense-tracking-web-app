import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../src/pages/index';

describe('HomePage', () => {
  it('should render Home page', () => {
    render(<Home />, {});
  });
});
