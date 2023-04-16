import React from 'react';
import { CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles = makeStyles(() => ({
  loader: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -32,
    marginLeft: -32,
  },
}));

export const Loader = (): JSX.Element => {
  const classes = useStyles();
  return <CircularProgress className={classes.loader} size={64} />;
};

