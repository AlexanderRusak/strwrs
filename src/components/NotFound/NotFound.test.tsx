import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';

describe('NotFound component', () => {
  test('renders "Users Not Found" message', () => {
    render(<NotFound />);
    const message = screen.getByText('Users Not Found');
    expect(message).toBeInTheDocument();
  });
});
