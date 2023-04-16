import { createTheme } from '@mui/material/styles';

export const starWarsColors = {
  grey: '#333333',
  blue: '#2079B0',
  yellow: '#F5BF00',
  red: '#C72527',
};

const theme = createTheme({
  palette: {
    primary: {
      main: starWarsColors.blue,
      contrastText: '#ffffff',
    },
    secondary: {
      main: starWarsColors.yellow,
      contrastText: '#333333',
    },
    error: {
      main: starWarsColors.red,
      contrastText: '#ffffff',
    },
    background: {
      default: starWarsColors.grey,
      paper: starWarsColors.grey,
    },
    text: {
      primary: '#ffffff',
      secondary: '#f1f1f1',
    },
  },
});

export default theme;
