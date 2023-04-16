import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  const label = 'Test label';
  const value = 'Initial value';
  const onChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders label and initial value', () => {
    const { getByTestId } = render(
      <TextField label={label} value={value} onChange={onChange} />
    );
    const input = getByTestId('text-field-input') as HTMLInputElement;
    expect(input.value).toBe(value);
  });

  it('calls onChange callback with new value when input changes', () => {
    const { getByTestId } = render(
      <TextField label={label} value={value} onChange={onChange} />
    );
    const newValue = 'New value';
    const input = getByTestId('text-field-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: newValue } });
    expect(onChange).toHaveBeenCalledWith(newValue);
  });
});
