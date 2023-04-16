import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error component', () => {
  it('renders the given error message', () => {
    const errorMessage = 'An error has occurred';
    render(<Error message={errorMessage} />);
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
