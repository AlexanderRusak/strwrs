import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
  it('should render the button with the text "Save Changes"', () => {
    render(<Button onClick={jest.fn()} />);
    const button = screen.getByRole('button', { name: /save changes/i });
    expect(button).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} />);
    const button = screen.getByRole('button', { name: /save changes/i });
    userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
