import React from 'react';
import { Typography, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles(() => ({
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));

export const Error = ({ message }: { message: string }): JSX.Element => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h5" component="div" className={classes.error}>
        {message}
      </Typography>
    </ThemeProvider>
  );
};
