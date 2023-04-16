import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps): JSX.Element => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MuiButton data-testid='save-button' onClick={onClick} variant="contained" color="secondary">
        Save Changes
      </MuiButton>
    </div>
  );
};
