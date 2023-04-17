import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { HomePage } from './HomePage';


describe('HomePage component', () => {
  test('renders search input', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const searchInput = screen.getByRole('textbox', { name: 'Find Character' });
    expect(searchInput).toBeInTheDocument();
  });

});
