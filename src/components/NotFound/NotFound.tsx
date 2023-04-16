import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const NotFound = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h5" align="center">
        Users Not Found
      </Typography>
    </Box>
  );
}
