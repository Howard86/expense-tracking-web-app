import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '@/components/Layout';

describe('Layout', () => {
  const TestComponent = () => <div data-testid="Children">Test</div>;

  it('should render Layout', () => {
    render(
      <Layout>
        <TestComponent />
      </Layout>,
    );

    const testElement = screen.getByTestId('Children');

    expect(testElement).toBeDefined();
  });
});
