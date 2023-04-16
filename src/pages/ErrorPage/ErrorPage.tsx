import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { starWarsColors } from '../../theme';

export const ErrorPage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom={true}>
        Oops! Page not found.
      </Typography>
      <Typography variant="subtitle1" gutterBottom={true}>
        We&apos;re sorry, the page you requested could not be found.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          marginTop: '1rem',
          backgroundColor: starWarsColors.blue,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: starWarsColors.yellow,
          },
        }}
      >
        Go back to home
      </Button>
    </Container>
  );
};
