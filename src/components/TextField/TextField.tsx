import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import theme from '../../theme';

interface TextFieldProps {
  label: string;
  value: string;

  onChange: (newValue: string) => void;
}

export const TextField = ({ label, value, onChange }: TextFieldProps): JSX.Element => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (<>
    <MuiTextField
      label={label}
      value={value}
      onChange={handleOnChange}
      fullWidth={true}
      margin="normal"
      variant="filled"
      inputProps={{ 'data-testid': 'text-field-input' }}
      InputLabelProps={{
        style: {
          color: theme.palette.secondary.main
        }
      }}
    />

  </>
  );
};
