import React from 'react';
import { render } from '@testing-library/react';
import { Filter, FilterValues } from './Filter';

describe('Filter component', () => {
  let onFilterChangeMock: (newFilters: FilterValues) => void;
  beforeEach(() => {
    onFilterChangeMock = jest.fn();
  });

  it('should render all select options and "All" selected by default', () => {
    const { getByText } = render(<Filter onFilterChange={onFilterChangeMock} />);
    expect(getByText('Gender')).toBeInTheDocument();
    expect(getByText('Hair Color')).toBeInTheDocument();
    expect(getByText('Skin Color')).toBeInTheDocument();
    expect(getByText('Eye Color')).toBeInTheDocument();
  });

});


