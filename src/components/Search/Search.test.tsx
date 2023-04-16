import { render, fireEvent, waitFor } from '@testing-library/react';
import { SearchInput } from './Search';
import React from 'react';

describe('SearchInput component', () => {
  it('should render properly', () => {
    const { getByLabelText } = render(<SearchInput onSearch={jest.fn()} />);

    expect(getByLabelText('Find Character')).toBeInTheDocument();
  });

  it('should call onSearch when typing in the input field', async () => {
    const handleSearch = jest.fn();
    const { getByLabelText } = render(<SearchInput onSearch={handleSearch} debounceTimeout={500} />);

    const input = getByLabelText('Find Character');

    fireEvent.change(input, { target: { value: 'a' } });

    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalledWith('a');
    });
  });

});
