import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

test('renders error page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
  expect(getByText(/Oops! Page not found./i)).toBeInTheDocument();
  expect(getByText(/We're sorry, the page you requested could not be found./i)).toBeInTheDocument();
  expect(getByText(/Go back to home/i)).toBeInTheDocument();
});