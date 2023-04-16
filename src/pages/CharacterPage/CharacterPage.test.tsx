import React from 'react';
import { render } from '@testing-library/react';
import { CharacterPage } from './CharacterPage';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

const mockUseLocation = useLocation as jest.MockedFunction<typeof useLocation>;

test('renders character page', () => {
  const person = { name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair' };
  mockUseLocation.mockReturnValueOnce({
    state: person,
    key: '',
    pathname: '',
    search: '',
    hash: ''
  });
  const { getByText, getByDisplayValue } = render(<CharacterPage />);
  expect(getByText('Luke Skywalker')).toBeInTheDocument();
  expect(getByDisplayValue('172')).toBeInTheDocument();
  expect(getByDisplayValue('77')).toBeInTheDocument();
  expect(getByDisplayValue('blond')).toBeInTheDocument();
  expect(getByDisplayValue('fair')).toBeInTheDocument();
});


